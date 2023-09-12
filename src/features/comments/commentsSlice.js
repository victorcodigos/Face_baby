import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentsService from "./commentsService";



const initialState = {
  newComment: "",
  comment: "",
  comments: [],
};


export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(newComment.fulfilled, (state, action) => {
        state.comment = action.payload;
      })
  },
});

export const newComment = createAsyncThunk("comments/newcomment", async (newComment) => {
  try {
    return await commentsService.newComment(newComment);
  } catch (error) {
    console.error(error);
  }
}
);


export default commentsSlice.reducer;