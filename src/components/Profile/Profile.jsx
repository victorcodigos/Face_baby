import { Spin } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsFillPersonPlusFill } from "react-icons/bs";
import {follow }from "../../features/users/usersSlice";

const Profile = () => {
  const { user} = useSelector((state) => state.auth);
 
 
  const dispatch = useDispatch();


  if (!user) {
    return <Spin />;
  }

  const handleFollowClick = () => {
    dispatch(follow(user._id)); 
  };
  return (
    <div>
      <p>{user.username}</p>
      <p>{user.email}</p>

      <button type="button" onClick={handleFollowClick}>
        <BsFillPersonPlusFill /> Follow
      </button>


    </div>
  );
};

export default Profile;

