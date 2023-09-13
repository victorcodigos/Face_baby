import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../features/posts/postsSlice";
import { DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "./Post.scss";
import { HeartOutlined } from "@ant-design/icons";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const post = posts.map((post) => {
    const image = post.image?.includes("https://")
      ? post.image
      : "http://localhost:3000/images/" + post.image;

    return (
      <div className="div-main" key={post._id}>
        <div className="div-post">
          <Card className="div-card" title={post.title}>
            <Link to={"/post/" + post._id}>
              <img className="img" src={image} alt="post image" />{" "}
            </Link>
            <p className="user">Posted by: {post.userId.username}</p>
            <p className="user">
              <HeartOutlined /> {post.likes.length}
            </p>

            {post.userId?._id === user?._id ? (
              <span
                className="user"
                onClick={() => dispatch(deletePost(post._id))}
              >
                <DeleteOutlined />
                Delete
              </span>
            ) : null}
          </Card>
        </div>
      </div>
    );
  });

  return <div className="div-return-posts"> {post}</div>;
};

export default Post;
