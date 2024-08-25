import React from "react";
import voteBox from "../../assets/vote_box.svg";
import { useNavigate } from "react-router-dom";
const pollingStations = [
  "Polling Station 101",
  "Polling Station 102",
  "Polling Station 103",
  "Polling Station 104",
  "Polling Station 105",
  "Polling Station 106",
  "Polling Station 107",
  "Polling Station 108",
];

const PollingStations = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white p-5">
      {/* Title Section */}
      <h2 className="text-2xl font-bold text-green-400 mb-5">
        Polling Stations:
      </h2>

      {/* Total Polling Stations Box */}
      <div className="bg-gray-200 rounded-lg p-5 flex items-center justify-between mb-5">
        <div>
          <p className="text-lg text-black">Total Polling Stations</p>
          <h3 className="text-4xl font-bold text-black ">10</h3>
        </div>
        <img src={voteBox} width={70} alt="" />
      </div>

      {/* List of Polling Stations */}
      <div className="space-y-3">
        {pollingStations.map((station, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-green-800 rounded-md p-3"
          >
            <span className="text-lg font-bold">{station}</span>
            <button
              className="bg-white text-black px-4 py-2 rounded-md"
              onClick={() => navigate("/poling-station/1")}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PollingStations;
