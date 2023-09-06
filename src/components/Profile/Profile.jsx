import { Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Spin />;
  }
  return (
    <div>
      <p>{user._id}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;