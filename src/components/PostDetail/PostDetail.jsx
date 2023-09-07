import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/posts/postsSlice";
import { Spin } from "antd";

const PostDetail = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getById(_id));
  }, []);

  if(!post){
    return <Spin/>
  }
  return (
    <div style={{minHeight:"60vh"}}> 
      <h1>PostDetail</h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <img src={post.image} alt="post image" />
    </div>
  );
};

export default PostDetail;
