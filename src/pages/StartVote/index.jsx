import React, { useState } from "react";
import { FaIdCard } from "react-icons/fa";
import loginLogo from "../../assets/login_logo.svg";
import { useNavigate, useParams } from "react-router-dom";
import voteCall from "../../VoteCall";

const StartVote = () => {
  const { id,gender } = useParams();
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
          if(result.gender === gender){
            navigate("/check-vote/" + cnic);
          }
          else alert("Please select booth of your gender!")
        }
      } else alert("Something went wrong");
    } catch (e) {
      let message = e?.response?.data?.message || "Something went wrong";
      alert(message);
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
            onChange={handleCnicChange}
            className="bg-transparent text-white w-full focus:outline-none"
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      <button onClick={handleCheckNow} className="bg-green-800 text-white text-xl px-20 py-3 rounded-md">
        Proceed
      </button>

      <p>*Transaction secured ans encrypted</p>
    </div>
  );
};

export default StartVote;
