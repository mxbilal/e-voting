import React, { useState } from "react";
import { FaIdCard } from "react-icons/fa";
import VerifyImage from "../../assets/verify_voter_logo.svg";
import VotingResult from "../../components/VotingResult";
import { useNavigate } from "react-router-dom";

const VerifyVoter = () => {
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
      navigate("/check-voter/" + cnic);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-5 flex flex-col items-center justify-center space-y-10">
      <h2 className="text-2xl font-bold text-green-400">Verify Voter</h2>

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
        Check Now
      </button>

      <div className="mb-10">
        <img src={VerifyImage} alt="Verify" className="w-60 h-auto mx-auto" />
      </div>

      <VotingResult />
    </div>
  );
};

export default VerifyVoter;
