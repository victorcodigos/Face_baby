import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "antd";
import "./Header.scss"
import { HomeOutlined, LogoutOutlined, LoginOutlined, UserAddOutlined, SearchOutlined, TeamOutlined} from "@ant-design/icons"

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const [text, setText] = useState("");
  const navigate = useNavigate()
  
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {      
      navigate("/search/" + text)
    }
  };

  const dispatch = useDispatch();

  return (
    <div className="header">
      <Link to="/">
        <HomeOutlined /> Home
      </Link>
      <div className="search-input">
        <input onKeyUp={handleChange} placeholder="search a post here 🔎" name="text" />
      </div>
      {user ? (
        <div className="nav-links">
          <Link to="/profile" className="avatar">
            <Avatar size="medium">
              {user.username}
            </Avatar>
          </Link>
          <Link to="/users" className="users">USERS</Link>
          <button
            className="logout-button"
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            <LogoutOutlined /> Logout
          </button>
        </div>
      ) : (
        <div className="nav-links">
          <Link to="/login">
            <LoginOutlined /> Login
          </Link>
          <Link to="/register">
            <UserAddOutlined /> Register
          </Link>
        </div>
      )}
    </div>
  );
  
};

export default Header;