import React, { useState } from "react";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
// import userIcon from "../../assets/user.svg";
// import eyeIcon from "../../assets/eye.svg";
import loginLogo from "../../assets/login_logo.svg";
import { useNavigate, useParams } from "react-router-dom";
import voteCall from "../../VoteCall";

const LoginPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const [state, SetState] = useState({ email: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loader, setLoader] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      let res = await voteCall.post("user/login/", {
        email: state.email,
        password: state.password,
      });
      const { data, status } = res;
      if (status === 200 && data) {
        const { result } = data;
        window.localStorage.setItem("token", result?.access_token);
        window.localStorage.setItem("refresh_token", result?.refresh_token);
        window.localStorage.setItem("user", JSON.stringify(result?.user));
        switch (name) {
          case "election-commission":
            window.location.replace("/dashboard");
            break;
          case "presiding-officer":
            window.location.replace("/poling-station/1");
            break;
          case "assistant-presiding-officer":
            window.location.replace("/verify-voter");
            break;
          case "poling-agent":
            window.location.replace("/booth");
            break;
        }
      } else alert("something went wrong");
    } catch (e) {
      alert("Wrong Credential");
    }
    setLoader(false);
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
              htmlFor="email"
            >
              Enter Email
            </label>
            <div className="flex items-center border border-white bg-green-900 rounded p-2 ">
              <FaUser className="text-white mr-2" />
              <input
                type="email"
                id="email"
                required
                placeholder="Enter Email"
                className="bg-transparent w-full text-white focus:outline-none"
                value={state.email}
                onChange={(e) => SetState({ ...state, email: e.target.value })}
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
                required
                placeholder="Enter password"
                className="bg-transparent w-full text-white focus:outline-none"
                value={state.password}
                onChange={(e) =>
                  SetState({ ...state, password: e.target.value })
                }
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
              disabled={loader}
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
