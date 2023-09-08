import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/posts/postsSlice";
import { likePost } from "../../features/posts/postsSlice";
import { Spin, Card } from "antd";
import {HeartFilled, HeartOutlined   } from "@ant-design/icons"
import "./PostDetail.scss"

const PostDetail = () => {
  const { _id } = useParams();

  const dispatch = useDispatch();

  const { post} = useSelector((state) => state.posts);
const {user} =useSelector(state => state.auth)
  useEffect(() => {
    dispatch(getById(_id));
  }, []);  

  

  if(!post){
    return <Spin/>
  }

  const isAlreadyLiked = post.likes?.includes(user?._id);  
 
  return (
    <div className="Detail">
        
        <Card title= {post.title} bordered={false} style={{ width: 300, objectFit: "cover"  }}>
        <img src={post.image} alt="post image" style={{ width: 200, height: 200 }} />
        <p>{post.body}</p>
        <span className="likes"> {post.likes?.length}</span>
       {isAlreadyLiked ? (
          <HeartFilled  onClick={()=>  console.log("dislike")  } />
        ) : (
          <HeartOutlined onClick={()=> dispatch(likePost(post._id))  } />
        )}        
        </Card>                          
    </div>
  );
};

export default PostDetail;
