import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {

    posts: []

};

export const getAll = createAsyncThunk("posts/getAll", async () => {

    try {
        return await postsService.getAll();
    } catch (error) {
        console.error(error);
    }

});

export const postsSlice = createSlice({

    name: "posts",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
    },
});

export default postsSlice.reducer;