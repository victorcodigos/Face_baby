import { Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
<<<<<<< HEAD
=======
  
>>>>>>> df270e230fcb13c33e66b393457c63bf991c8dee

  if (!user) {
    return <Spin />;
  }
  return (
    <div>
<<<<<<< HEAD
      <p>{user._id}</p>
=======
       
>>>>>>> df270e230fcb13c33e66b393457c63bf991c8dee
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;