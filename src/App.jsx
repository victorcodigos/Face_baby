import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
<<<<<<< HEAD
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
>>>>>>> df270e230fcb13c33e66b393457c63bf991c8dee


function App() {

  return (

    <div className="App">
      <BrowserRouter>
<<<<<<< HEAD
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
=======
      <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
>>>>>>> df270e230fcb13c33e66b393457c63bf991c8dee
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;