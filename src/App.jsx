import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PostDetail from "./components/PostDetail/PostDetail";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import PrivateZone from "./guards/PrivateZone";
import Logo from "./components/Logo/Logo";
import UsersAll from "./components/UsersAll/UsersAll";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logo />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<PrivateZone><Profile /> </PrivateZone>} />
          <Route path="/users" element={<UsersAll />} />
          <Route path="/post/:_id" element={<PostDetail />} />
          <Route path="/search/:title" element={<Search />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
