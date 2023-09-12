import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersService from "./usersService";

//const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
    users: [],
    user: null,
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
        //console.log(_id)
        return await usersService.follow(_id);
    } catch (error) {
        console.error(error)
    }
})

export const unfollow = createAsyncThunk("users/unfollow", async (_id) => {
    try {
        //console.log(_id)
        return await usersService.unfollow(_id);
    } catch (error) {
        console.error(error)
    }
})

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        resetUsers: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.users = [];
            state.user = null;
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

    },



})


export const { resetUsers } = usersSlice.actions;

export default usersSlice.reducer;