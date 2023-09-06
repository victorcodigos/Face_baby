import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../features/auth/authSlice";
import { notification } from "antd";
<<<<<<< HEAD
=======


>>>>>>> df270e230fcb13c33e66b393457c63bf991c8dee
const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { email, password } = formData;
<<<<<<< HEAD
  const { isError, isSuccess, message } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
=======
    
    
  const { isError, isSuccess, message } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

>>>>>>> df270e230fcb13c33e66b393457c63bf991c8dee
    useEffect(() => {
        if (isError) {
          notification.error({  message: "Error", description: message });
        }
        if (isSuccess) {
          notification.success({  message: "Success", description: message });
          setTimeout(() => {
            navigate("/profile");
          }, 2000);
        }
<<<<<<< HEAD
        
      }, [isError, isSuccess, message]);
=======
        dispatch(reset());
      }, [isError, isSuccess, message]);
    

>>>>>>> df270e230fcb13c33e66b393457c63bf991c8dee
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
        <form onSubmit={onSubmit}>
            <input type="email" name="email" value={email} onChange={onChange} />
            <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
            />
            <button type="submit">Login</button>
        </form>
    );
};
export default Login;