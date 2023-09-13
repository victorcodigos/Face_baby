import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersService from "./usersService";


const user = JSON.parse(localStorage.getItem("user")) || null;
const token = JSON.parse(localStorage.getItem("token")) || null;


const initialState = {
   // users: [],
    user: user,
  token:token,
  isLoading: false, 
}

export const getAll = createAsyncThunk("users/getallusers", async () => {
    try {
        return await usersService.getAll();
    } catch (error) {
        console.error(error);
    }
})

export const follow = createAsyncThunk("users/follow", async (_id) => {
    try {
        
        return await usersService.follow(_id);
    } catch (error) {
        console.error(error)
    }
})

export const unfollow = createAsyncThunk("users/unfollow", async (_id) => {
    try {
        
        return await usersService.unfollow(_id);
    } catch (error) {
        console.error(error)
    }
})

export const getUserConnected = createAsyncThunk("users/getuserconnected", async () => {
    try {
      return await usersService.getUserConnected();
    } catch (error) {
      console.error(error);
      throw error; 
    }
  });

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.users = [];
            state.user = {};
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.users = action.payload;
        });

        builder.addCase(getAll.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(follow.fulfilled, (state, action) => {
            const usersUpdates = state.users.map(user => {
                if (user._id == action.payload._id) {
                    user = action.payload
                }
                return user
            })
            state.users = usersUpdates;
        })
        builder.addCase(unfollow.fulfilled, (state, action) => {
            const usersUpdates = state.users.map(user => {
                if (user._id == action.payload._id) {
                    user = action.payload
                }
                return user
            })
            state.users = usersUpdates;
        })
        builder.addCase(getUserConnected.pending, (state) => {
          state.isLoading = null;
        })
  
  
        builder.addCase(getUserConnected.fulfilled, (state, action) => {
          state.isLoading = false;
          state.user = action.payload.getUser        ;
        })
  
  
        builder.addCase(getUserConnected.rejected, (state) => {
          state.isLoading = false;
        });
    },


})

export const { reset } = usersSlice.actions;

export default usersSlice.reducer;
