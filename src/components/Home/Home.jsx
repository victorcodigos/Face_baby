import React from "react";
import Posts from "../Posts/Posts";
import "./Home.scss"


const Home = () => {
  return (
    <div className="div-main">
      <div className="div-posts">
        <Posts />
      </div>
    </div>
  );
};
export default Home;