import React, { useState } from "react";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
// import userIcon from "../../assets/user.svg";
// import eyeIcon from "../../assets/eye.svg";
import loginLogo from "../../assets/login_logo.svg";
import { useNavigate, useParams } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    switch (name) {
      case "election-commission":
        navigate("/dashboard");
        break;
      case "presiding-officer":
        navigate("/poling-station/1");
        break;
      case "assistant-presiding-officer":
        navigate("/verify-voter");
        break;
      case "poling-agent":
        navigate("/booth");
        break;
    }
  };

  return (
    <div className="bg-black flex items-center justify-center">
      <div className="bg-transparent p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-8">
          <img src={loginLogo} alt="E-Voting Logo" className="w-32 h-32" />
        </div>
        <h2 className="text-center text-2xl text-green-500 mb-6 capitalize ">
          {name.replaceAll("-", " ")}
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="username"
            >
              Enter username
            </label>
            <div className="flex items-center border border-white bg-green-900 rounded p-2 ">
              <FaUser className="text-white mr-2" />
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                className="bg-transparent w-full text-white focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Enter Password
            </label>
            <div className="flex items-center border border-white rounded p-2 bg-green-900">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter password"
                className="bg-transparent w-full text-white focus:outline-none"
              />
              <div
                onClick={togglePasswordVisibility}
                className="cursor-pointer ml-2 text-white"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-900 text-white font-bold py-2 px-4 rounded hover:bg-green-800 focus:outline-none focus:ring-2 "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
