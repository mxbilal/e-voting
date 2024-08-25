import React from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const VotesDetail = () => {
  const navigate = useNavigate();
  const booths = [
    { number: 1, votes: 800 },
    { number: 2, votes: 700 },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-5">
      {/* Title Section */}
      <h2 className="text-3xl font-bold mb-5">
        No. of Ladies Booths: <span className="text-green-400">02</span>
      </h2>

      {/* Total Casted Votes Section */}
      <div className="bg-green-800 p-5 rounded-lg flex items-center justify-between mb-5">
        <div>
          <h3 className="text-xl font-bold">Total Casted Votes: 1500</h3>
          <p>Click to check result based on candidate</p>
        </div>
        <button
          className="bg-white text-black px-5 py-2 rounded-md flex items-center space-x-2"
          onClick={() => navigate("/candidates")}
        >
          <FaCheck />
          <span>Check</span>
        </button>
      </div>

      {/* Booths List */}
      <div className="space-y-3">
        {booths.map((booth, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-800 p-3 rounded-md"
          >
            <span className="text-lg">
              No. of votes casted in Booth Number {booth.number}:
            </span>
            <span className="text-lg font-bold">{booth.votes}</span>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-md"
              onClick={() => navigate("/candidates")}
            >
              View Candidates Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotesDetail;
