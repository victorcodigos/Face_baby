import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersService from "./usersService"; 

const initialState = {
    users: [],
    user: null,
}

export const follow = createAsyncThunk("users/follow/", async(_id) =>{
    try {
        return await usersService.follow(_id);
    } catch (error) {
        console.error(error)
    }
})

export const unfollow = createAsyncThunk("users/unfollow/", async (_id)=>{
    try {
        return await usersService.unfollow(_id);
    } catch (error) {
       console.error(error) 
    }
})

export const usersSlice = createSlice({
    name:"users",
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
        builder
        .addCase(follow.fulfilled, (state, action) => {
            state.user = action.payload;
        })
        .addCase(unfollow.fulfilled, (state, action) => {
            state.user = action.payload;
        })  


    },   
        


})


export const { resetUsers } = usersSlice.actions;

export default usersSlice.reducer;