import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../features/posts/postsSlice";
import { DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "./Post.scss"


const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();


  const post = posts.map((post) => {

    return (
      <div className="Post-container" key={post._id}>
        <div className="Post">
          <Card title={post.title} bordered={false} style={{ width: '30vh' }}>
            <Link to={"/post/" + post._id}>
              <img src={post.image} alt="post image" style={{ width: 50, height: 50 }} />
            </Link>
            {
              post.userId?._id === user?._id ? <span onClick={() => dispatch(deletePost(post._id))}><DeleteOutlined /></span> : null
            }

          </Card>

        </div>
      </div>
    );
  });
  return <div>{post}</div>;
};
export default Post;
