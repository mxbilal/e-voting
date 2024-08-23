import React from "react";

const EButton = ({ onClick, text, ...args }) => {
  return (
    <button
      className="mt-6 bg-green-900 text-white px-4 py-2 rounded relative overflow-hidden focus:outline-none active:bg-green-800"
      onClick={onClick}
      {...args}
    >
      {text}
    </button>
  );
};

export default EButton;
