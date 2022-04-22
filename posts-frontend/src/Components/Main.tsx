import React from "react";
import CreatePost from "./CreatePost";
import Navigation from "./Navigation";
import Header from "./Header";

const Main = () => {
  return (
    <div>
      <Navigation />
      <CreatePost />
      <Header />
    </div>
  );
};

export default Main;
