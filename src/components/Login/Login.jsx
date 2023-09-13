import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../features/auth/authSlice";
import { notification } from "antd";
import "./Login.scss"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const { email, password } = formData;
  const { isError, isSuccess, message } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      notification.error({ message: "Error", description: message });
    }
    if (isSuccess) {
      notification.success({ message: "Success", description: message });
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    }
    dispatch(reset());
  }, [isError, isSuccess, message]);


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };
  return (
    <>
      <div className="div-main">
        <form className="form" onSubmit={onSubmit}>
          <input className="input-email" type="email" name="email" placeholder="Insert your email here" value={email} onChange={onChange} />
          <input className="input-password" type="password" name="password" placeholder="Insert your password here" value={password} onChange={onChange} />
          <button className="button-login" type="submit">Login</button>
        </form>
      </div>
    </>


  );
};
export default Login;