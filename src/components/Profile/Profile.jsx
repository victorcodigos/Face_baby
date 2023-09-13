import React, { useEffect } from "react";
import "./Profile.scss"
import { Spin, Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {  getUserConnected} from "../../features/users/usersSlice";

const Profile = () => {
  const { user  } = useSelector((state) => state.users);
  
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getUserConnected());
  }, []);

  if (!user) {
    return <Spin />;
  }



  return (
    <div className="div-father">
    <Card className="div-card" title="User Profile" style={{ width: 300 }}>
      <div className="div-container">
        <p className="name-user">User: {user.username}</p>
        <p className="email-user">Email: {user.email}</p>
        <div className="div-posts"> 
          <p className="p-posts">Posts:</p>
          {user.postIds.map((postId) => (
            <div className="id-posts" key={postId._id}>
              <p className="title">Title: {postId.title}</p>
              <p className="body">Body: {postId.body}</p>
              <img className="img" src={"http://localhost:3000/images/" + postId.image} alt="Post-image" srcSet="" />
            </div>
          ))}
        </div>
        <div>
          <p className="followers">Followers:</p>
          {user.followers.map((follower) => (
            <li key={follower._id}>{follower.username}</li>
          ))}
        </div>
      </div>
      
    </Card>
    </div>
  );
};

export default Profile;
