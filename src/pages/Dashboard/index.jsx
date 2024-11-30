import React, { useEffect, useState } from "react";
import { FaHandPeace, FaBell } from "react-icons/fa";
import dashboardIMG from "../../assets/dashboard.svg";
import { useNavigate } from "react-router-dom";
import { getDashboardData } from "../../VoteAPI";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const getDataAPI = async () => {
    let res = await getDashboardData();
    setData(res?.data || {});
  };
  useEffect(() => {
    getDataAPI();
  }, []);

  console.log(data);

  const handleClick = (key) => {
    switch (key) {
      case 1:
        navigate("/register-voters");
        break;
      case 2:
        navigate("/total-votes/1");
        break;
      case 3:
        navigate("/poling-stations");
        break;
      case 4:
        navigate("/candidates");
        break;
      default:
        console.log("default");
    }
  };

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-green-500">UC-71</h1>
          <FaHandPeace className="text-yellow-500 text-3xl" />
          <span className="text-sm">Welcome back.</span>
        </div>
        <FaBell className="text-white text-2xl" />
      </div>

      <div className="bg-green-500 rounded-lg p-4 text-center mb-6">
        <h2 className="text-2xl font-bold">Live Voting:</h2>
        <p className="text-3xl font-bold">{data?.casted_votes_count}</p>
      </div>

      <div className="flex justify-center mb-8">
        <img src={dashboardIMG} alt="Dashboard Graphic" width={200} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 text-center cursor-pointer" onClick={() => handleClick(1)}>
          <h3 className="text-lg font-semibold text-green-500">Total Voters</h3>
          <p className="text-2xl font-bold">{data?.total_votes_count}</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center cursor-pointer" onClick={() => handleClick(2)}>
          <h3 className="text-lg font-semibold text-green-500">Total Casted Votes</h3>
          <p className="text-2xl font-bold">{data?.casted_votes_count}</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center cursor-pointer" onClick={() => handleClick(3)}>
          <h3 className="text-lg font-semibold text-green-500">Total Polling Stations</h3>
          <p className="text-2xl font-bold">{data?.polling_stations_count}</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center cursor-pointer" onClick={() => handleClick(4)}>
          <h3 className="text-lg font-semibold text-green-500">Total Candidates</h3>
          <p className="text-2xl font-bold">{data?.candidates_count}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
