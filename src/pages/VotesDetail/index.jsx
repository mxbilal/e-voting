import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { getVotesDetail } from "../../VoteAPI";

const boothEnum = { male_booth: "Male", female_booth: "Female" };

const VotesDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id, type } = params;

  const [detail, setDetail] = useState({});

  const getDetailAPI = async () => {
    let res = await getVotesDetail(id, type);
    setDetail(res?.data || {});
  };
  useEffect(() => {
    getDetailAPI();
  }, []);

  const booths = [
    { number: 1, votes: 800 },
    { number: 2, votes: 700 },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-5">
      {/* Title Section */}
      <h2 className="text-3xl font-bold mb-5">
        No. of {boothEnum[type]} Booths: <span className="text-green-400">{detail?.booth_votes?.length || 0}</span>
      </h2>

      {/* Total Casted Votes Section */}
      <div className="bg-green-800 p-5 rounded-lg flex items-center justify-between mb-5">
        <div>
          <h3 className="text-xl font-bold">Total Casted Votes: {detail?.total_votes_sum || 0}</h3>
          <p>Click to check result based on candidate</p>
        </div>
        <button
          className="bg-white text-black px-5 py-2 rounded-md flex items-center space-x-2"
          // onClick={() => navigate("/candidates")}
        >
          <FaCheck />
          <span>Check</span>
        </button>
      </div>

      {/* Booths List */}
      <div className="space-y-3">
        {detail?.booth_votes &&
          detail?.booth_votes.map((booth, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
              <span className="text-lg">No. of votes casted in {booth?.name}:</span>
              <span className="text-lg font-bold">{booth?.total_votes || 0}</span>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md" onClick={() => navigate("/candidates")}>
                View Candidates Details
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default VotesDetail;
