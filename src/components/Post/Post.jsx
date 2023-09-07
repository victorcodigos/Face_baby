import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../features/posts/postsSlice";


const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  
console.log(user)
  const post = posts.map((post) => {
    console.log(post)
    return (
      <div className="post" key={post._id}>
        <Link to={"/post/" + post._id}>
          <p>{post.title}</p>
          </Link>
          {
            post.userId?._id === user?._id ?   <button onClick={() => dispatch(deletePost(post._id))}>X</button>:null
          }
        
       
      </div>
    );
  });
  return <div>{post}</div>;
};
export default Post;
