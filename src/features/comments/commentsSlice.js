import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentsService from "./commentsService";


const initialState = {
  newComment: "",
  comment: "",
  comments: [],
};

export const newComment = createAsyncThunk("newcomment",  async (newComment) => {
    try {
      return await commentsService.createComment(newComment);
    } catch (error) {
      console.error(error);
    }
  }
);

export const commentsSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {},
  
    extraReducers: (builder) => {
      builder;
    },
  });
  
  export default commentsSlice.reducer;