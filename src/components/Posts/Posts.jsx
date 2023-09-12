import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import { createPost, getAll } from "../../features/posts/postsSlice";
import { useDispatch } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  
  const onSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    if (event.target.image.files[0]) {
      formData.append('image', event.target.image.files[0]);
    }
    
    formData.append('title', event.target.title.value);
    formData.append('body', event.target.body.value); 
    
    dispatch(createPost(formData));  
    
  }
  

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
        />
        <label htmlFor="body">Content</label>
        <textarea
          id="body"
          name="body"
          cols="10"
          rows="5"
        ></textarea>
        <label htmlFor="image">Image</label>
        <input
          type="file"
          accept="image/*"          
          id="image"
          name="image"
        />
        <button type="submit">Submit</button>
      </form>
      <Post />
    </div>
  );
};

export default Posts;