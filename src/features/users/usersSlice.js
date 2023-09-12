import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersService from "./usersService";

const user = JSON.parse(localStorage.getItem("user")) || null;
const token = JSON.parse(localStorage.getItem("token")) || null;

const initialState = {
  user: user,
  token:token,
  isLoading: false, 
};

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
      state.isLoading = false;
      state.user = {}; 
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUserConnected.pending, (state) => {
        state.isLoading = null;
      })
      .addCase(getUserConnected.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.getUser        ;
      })
      .addCase(getUserConnected.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reset } = usersSlice.actions;

export default usersSlice.reducer;
