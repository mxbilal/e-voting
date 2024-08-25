import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { FaCheck } from "react-icons/fa";
import { Chart, registerables } from "chart.js";
import { useNavigate } from "react-router-dom";

Chart.register(...registerables);

const PollingStationDetail = () => {
  const navigate = useNavigate();
  const data = {
    labels: ["Gents Booth", "Ladies Booth"],
    datasets: [
      {
        data: [2500, 1500],
        backgroundColor: ["#00b300", "#99ff99"],
        hoverBackgroundColor: ["#009900", "#66ff66"],
        borderColor: "#000",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          color: "#fff",
          fontSize: 14,
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white p-5">
      <h2 className="text-2xl font-bold text-green-400 mb-5">
        Polling Station 101
      </h2>

      <div className="space-y-5 mb-5">
        <div className="bg-gray-200 p-5 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-lg text-black">Total Registered Voters</p>
            <h3 className="text-4xl font-bold text-black px-3 py-1 rounded-md">
              5000
            </h3>
          </div>
          <button className="bg-green-600 text-white px-5 py-3 rounded-md flex items-center space-x-2">
            <FaCheck />
            <span>Check</span>
          </button>
        </div>

        <div className="bg-gray-200 p-5 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-lg text-black">Total Casted Votes</p>
            <h3 className="text-4xl font-bold text-black px-3 py-1 rounded-md">
              4000
            </h3>
          </div>
          <button className="bg-green-600 text-white px-5 py-3 rounded-md flex items-center space-x-2">
            <FaCheck />
            <span>Check</span>
          </button>
        </div>
      </div>

      <div className="bg-gray-800 p-5 rounded-lg mb-5">
        <div className="relative h-64">
          <Pie data={data} options={options} />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center bg-green-800 rounded-md p-3">
          <span className="text-lg font-bold">Gents Votes: 2500</span>
          <button
            className="bg-white text-black px-4 py-2 rounded-md"
            onClick={() => navigate("/votes-detail")}
          >
            View Details
          </button>
        </div>
        <div className="flex justify-between items-center bg-green-800 rounded-md p-3">
          <span className="text-lg font-bold">Ladies Votes: 1500</span>
          <button
            className="bg-white text-black px-4 py-2 rounded-md"
            onClick={() => navigate("/votes-detail")}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PollingStationDetail;
