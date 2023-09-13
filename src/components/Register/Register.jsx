import React, { useEffect, useState } from "react";
import { register, reset } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import "./Register.scss"

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = formData;
  const { message, isSuccess, isError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: message,
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
    if (isError) {
      notification.error({
        message: message,
      });
    }
    dispatch(reset());
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
    <div className="div-main">
    <form className="form" onSubmit={onSubmit}>
      <input className="input-username" type="text" name="username" placeholder="Insert your username here" value={username} onChange={onChange} />
      <input className="input-email" type="email" name="email" placeholder="Insert your username email here" value={email} onChange={onChange} />
      <input className="input-password"type="password"  name="password" placeholder="Insert your password here" value={password} onChange={onChange}/>
      <input className="repeat-password" type="password"name="password2" placeholder="Repeat your password please" value={password2}onChange={onChange}/>
      <button className="btn-submit" type="submit">Register</button>
    </form>
    </div>
  );
};

export default Register;