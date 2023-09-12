import { Card, Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserConnected } from "../../features/users/usersSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  useEffect(() => {    
    dispatch(getUserConnected());
  }, []);

  if (!user) {
    return <Spin />;
  }

  return (
    <Card title="User Profile" style={{ width: 300 }}>
      <div>
        <p>User: {user.username}</p>
        <p>Email: {user.email}</p>
        <div>
          <p>Posts:</p>
          {user.postIds.map((postId) => (
            <div key={postId._id}>
              <p>Title: {postId.title}</p>
              <p>Body: {postId.body}</p>
              <img src={"http://localhost:3000/images/" + postId.image} alt="Post-image" srcSet="" style={{ width: 200, height: 200 }}/>
            </div>
          ))}
        </div>
        <div>
          <p>Followers:</p>          
            {user.followers.map((follower) => (
              <li key={follower._id}>{follower.username}</li>
            ))}          
        </div>
      </div>
    </Card>
  );
};

export default Profile;
