import React, { useState } from "react";
import { FaIdCard } from "react-icons/fa";
import loginLogo from "../../assets/login_logo.svg";
import { useNavigate } from "react-router-dom";

const StartVote = () => {
  const [cnic, setCnic] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCheckNow = () => {
    if (cnic.length !== 13 || isNaN(Number(cnic.replace("-", "")))) {
      setError("CNIC must be a 13 digit number.");
    } else {
      setError("");
      // Handle the verification logic here
      //   alert("CNIC verified successfully!");
      navigate("/check-vote/" + cnic);
    }
  };

  return (
    <div className=" bg-black text-white p-5 flex flex-col items-center justify-center space-y-10">
      <div className="mb-10">
        <img src={loginLogo} alt="Verify" className="w-60 h-auto mx-auto" />
      </div>

      <div className="w-full max-w-md">
        <div className="flex items-center bg-green-900 border border-gray-100 rounded-md p-3">
          <FaIdCard className="text-white mr-3" />
          <input
            type="text"
            placeholder="Enter Voter's CNIC Number"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            className="bg-transparent text-white w-full focus:outline-none"
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      <button
        onClick={handleCheckNow}
        className="bg-green-800 text-white text-xl px-20 py-3 rounded-md"
      >
        Proceed
      </button>

      <p>*Transaction secured ans encrypted</p>
    </div>
  );
};

export default StartVote;
