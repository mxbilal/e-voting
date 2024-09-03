import React from "react";
import logo from "../assets/logo.svg";

const EHeader = () => {
  return (
    <div className="p-3 cursor-pointer ">
      <img
        src={logo}
        alt=""
        width={80}
        onClick={() => window.location.replace("/")}
      />
    </div>
  );
};

export default EHeader;
