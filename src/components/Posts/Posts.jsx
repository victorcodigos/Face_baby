import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import { createPost, getAll } from "../../features/posts/postsSlice";
import { useDispatch } from "react-redux";
import "./Posts.scss"

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

    <div className="div-supreme">
      <div className="form">
        <form onSubmit={onSubmit}>
          <label className="input-title" htmlFor="title">Title: </label><input type="text" id="title" name="title" />
          <label className="label-image" htmlFor="image"> Image : </label>
          <input className="input-file" type="file" accept="image/*" id="image" name="image" />
          <label className="input-content" htmlFor="body"> <br />Content :</label>
          <textarea className="text-area" id="body" name="body" cols="25" rows="10"></textarea>
          <button className="button-sent" type="submit">Submit</button>
        </form>
      </div>
      <div className="all-posts">
        < Post className="posts" />
      </div>
    </div>
  );
};

export default Posts;