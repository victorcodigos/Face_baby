import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";
import Posts from "../../components/Posts/Posts";

const initialState = {
  posts: [],
  isLoading: false,
  post: {},
  
  
};

export const getAll = createAsyncThunk("posts/getAll", async () => {
  try {
    return await postsService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const getById = createAsyncThunk("posts/getById", async (_id) => {
  try {
    return await postsService.getById(_id);
  } catch (error) {
    console.error(error);
  }
});

export const getPostByName = createAsyncThunk(
  "posts/getPostByName",
  async (postName) => {
    try {
      return await postsService.getPostByName(postName);
    } catch (error) {
      console.error(error);
    }
  }
);

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  try {
    return await postsService.deletePost(id);
  } catch (error) {
    console.error(error);
  }
});

export const likePost = createAsyncThunk("posts/like", async (_id) => {
    try {
      return await postsService.likePost(_id);
    } catch (error) {
      console.error(error);
    }
  });  

  export const dislikePost = createAsyncThunk("posts/dislike", async (_id) => {
    try {
      return await postsService.dislikePost(_id);
    } catch (error) {
      console.error(error);
    }
  }); 

  export const createPost = createAsyncThunk("posts/create", async (formData) => {
    try {
      console.log(formData)
      return await postsService.createPost(formData);
      
    } catch (error) {
      console.error(error)
    }
  });
 
  
  

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.posts = action.payload;
    });

    builder.addCase(getAll.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getById.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(getPostByName.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.posts = state.posts.filter(
        (post) => post._id != action.payload.post._id
      );
    });
    builder.addCase(likePost.fulfilled, (state, action) => {        
      state.post = action.payload
    });  
    builder.addCase(dislikePost.fulfilled, (state, action) => {        
        state.post = action.payload
      });
      builder.addCase(createPost.fulfilled, (state, action) => {        
        state.post = action.payload
      });  
    
  

      
  },
});

export const { reset } = postsSlice.actions;

export default postsSlice.reducer;
