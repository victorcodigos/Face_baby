import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/posts/postsSlice";
import { likePost } from "../../features/posts/postsSlice";
import { dislikePost } from "../../features/posts/postsSlice";
import { Spin, Card } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import Comment from "../Comment/Comment";

import "./PostDetail.scss";

const PostDetail = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const { post } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getById(_id));
  }, []);

  if (!post) {
    return <Spin />;
  }

  const isAlreadyLiked = post.likes?.includes(user?._id);

  const handleLikeDislike = () => {
    if (isAlreadyLiked) {
      dispatch(dislikePost(post._id));
    } else {
      dispatch(likePost(post._id));
    }
  };

  const image = post.image?.includes("https://")
    ? post.image
    : "http://localhost:3000/images/" + post.image;
  return (
    <div className="detail">
      <Card
        className="div-card"
        title={post.title}
        style={{ backgroundColor: "#93CFE4" }}
      >
        <img className="img" src={image} alt="post image" />
        <p className="title-post">{post.body}</p>

        <span className="likes"> {post.likes?.length}</span>
        {isAlreadyLiked ? (
          <HeartFilled className="red-heart" onClick={handleLikeDislike} />
        ) : (
          <HeartOutlined className="red-heart" onClick={handleLikeDislike} />
        )}
        <p>
          <Comment className="comments" />
          {post.commentIds?.map((post) => {
            return <div className="posts">{post.title}</div>;
          })}
        </p>
      </Card>
    </div>
  );
};

export default PostDetail;
