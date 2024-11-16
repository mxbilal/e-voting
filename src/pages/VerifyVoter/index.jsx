import React, { useState } from "react";
import { FaIdCard } from "react-icons/fa";
import VerifyImage from "../../assets/verify_voter_logo.svg";
import VotingResult from "../../components/VotingResult";
import { useNavigate } from "react-router-dom";
import voteCall from "../../VoteCall";

const VerifyVoter = () => {
  const [cnic, setCnic] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCnicChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 5) value = `${value.slice(0, 5)}-${value.slice(5)}`;
    if (value.length > 13) value = `${value.slice(0, 13)}-${value.slice(13)}`;

    setCnic(value);
    setError("");
  };

  const handleCheckNow = async () => {
    const numericCnic = cnic.replace(/-/g, "");
    if (numericCnic.length !== 13 || isNaN(Number(numericCnic))) {
      setError("CNIC must be a 13-digit number.");
      return;
    }
    try {
      let res = await voteCall.post("user/verify_cnic/", { cnic });
      const { data, status } = res;
      if (status === 200 && data) {
        const { result, code, error } = data;
        if (code === 0 && !error) {
          navigate("/check-voter/" + cnic);
        }
      } else alert("Something went wrong");
    } catch (e) {
      let message = e?.response?.data?.message || "Something went wrong";
      alert(message);
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
            onChange={handleCnicChange}
            className="bg-transparent text-white w-full focus:outline-none"
            maxLength="15"
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      <button onClick={handleCheckNow} className="bg-green-800 text-white text-xl px-20 py-3 rounded-md">
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
