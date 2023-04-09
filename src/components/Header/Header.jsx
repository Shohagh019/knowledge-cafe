import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="flex items-center justify-between m-10 px-10">
      <h1 className="font-bold text-4xl">Knowledge Cafe</h1>
      <img className="w-28 h-28" src="image.png" alt="" />
    </div>
  );
};

export default Header;
