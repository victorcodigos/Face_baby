import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/posts/postsSlice";
import { Spin, Card } from "antd";
import {LikeOutlined } from "@ant-design/icons"
import "./PostDetail.scss"

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
    <div className="Detail">
        <Card title= {post.title} bordered={false} style={{ width: 300, objectFit: "cover"  }}>
        <img src={post.image} alt="post image" style={{ width: 200, height: 200 }} />
        <p>{post.body}</p>
        <p><LikeOutlined />{post.likes.length}</p>       
        </Card>                          
    </div>
  );
};

export default PostDetail;
