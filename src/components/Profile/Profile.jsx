import React from "react";
import "./Profile.scss"
import { Spin, Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { BsFillPersonPlusFill, BsFillPersonDashFill } from "react-icons/bs";
import { follow, unfollow } from "../../features/users/usersSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  if (!user) {
    return <Spin />;
  }

  const handleFollowClick = () => {
    dispatch(follow(user._id));
  };

  const handleUnfollowClick = () => {
    dispatch(unfollow(user._id))
  };


  return (
    <div className="div-main">
      <Card className="card-profile">

        <p className="username">{user.username}</p>
        <p className="useremail">{user.email}</p>



        <button className="button-follow" type="button" onClick={handleFollowClick}><BsFillPersonPlusFill /> Follow</button>



        <button className="button-unfollow" type="button" onClick={handleUnfollowClick}><BsFillPersonDashFill /> Unfollow</button>
      </Card>

    </div>
  );
};

export default Profile;

