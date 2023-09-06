import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user")) || null;
const token = JSON.parse(localStorage.getItem("token")) || null;

const initialState = {
<<<<<<< HEAD
    user: user,
    token: token,
    isError: false,
    isSuccess: false,
    message: "",
=======
    
  user: user,
  token: token,
  isError: false,
  isSuccess: false,
  message: "",
>>>>>>> df270e230fcb13c33e66b393457c63bf991c8dee
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
<<<<<<< HEAD
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.token = null;
            })
            .addCase(register.fulfilled, (state, action) => {

                state.isSuccess = true;
                state.message = action.payload.message;

            })
            .addCase(register.rejected, (state, action) => {

                state.isError = true;
                state.message = action.payload;
            });
=======
    reducers: {
      reset: (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      },
>>>>>>> df270e230fcb13c33e66b393457c63bf991c8dee
    },
  
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isSuccess = true;        
        state.message = action.payload.message;        
        })
        .addCase(register.rejected, (state, action) => {
            state.isError = true;
            state.message = action.payload;
          })    
  },
});

export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
<<<<<<< HEAD
    try {
        return await authService.register(user);
    } catch (error) {
        const message = error.response.data.errors[0].message;
        return thunkAPI.rejectWithValue(message);
    }
})

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    try {
        return await authService.login(user);
    } catch (error) {
        const message = error.response.data.message;

        return thunkAPI.rejectWithValue(message);
    }
});

export const logout = createAsyncThunk("auth/logout", async () => {

    try {
        return await authService.logout();
    } catch (error) {
        console.error(error);
    }
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
=======
  try {
    return await authService.register(user);
  } catch (error) {
    const message = error.response.data.errors[0].message
    return thunkAPI.rejectWithValue(message)
  }
});

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
    
  } catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    return await authService.logout();
  } catch (error) {
    console.error(error);
  }
});


export const { reset } = authSlice.actions;
export default authSlice.reducer;
>>>>>>> df270e230fcb13c33e66b393457c63bf991c8dee
