<<<<<<< HEAD
import React, { useEffect ,useState } from "react";
import { register, reset } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from 'react-redux'
=======
import React, { useEffect, useState } from "react";
import { register, reset } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
>>>>>>> df270e230fcb13c33e66b393457c63bf991c8dee
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = formData;
  const { message, isSuccess, isError } = useSelector((state) => state.auth);
<<<<<<< HEAD
  const dispatch = useDispatch()
  const navigate = useNavigate();
=======
  const dispatch = useDispatch();
  const navigate = useNavigate()
>>>>>>> df270e230fcb13c33e66b393457c63bf991c8dee

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: message,
      });
      setTimeout(() => {
        navigate("/login");
<<<<<<< HEAD
      }, 2000);
=======
      }, 1000);
>>>>>>> df270e230fcb13c33e66b393457c63bf991c8dee
    }
    if (isError) {
      notification.error({
        message: message,
      });
    }
<<<<<<< HEAD
    
=======
    dispatch(reset());
>>>>>>> df270e230fcb13c33e66b393457c63bf991c8dee
  }, [message, isSuccess, isError]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return notification.error({
        message: "Error",
        description: "Passwords do not match",
      });
    } else {
      dispatch(register(formData));
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="username" value={username} onChange={onChange} />
      <input type="email" name="email" value={email} onChange={onChange} />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <input
        type="password"
        name="password2"
        value={password2}
        onChange={onChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;