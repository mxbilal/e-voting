import React, { useEffect, useState } from "react";
import voteBox from "../../assets/vote_box.svg";
import { useNavigate } from "react-router-dom";
import { getPollingStations } from "../../VoteAPI";

const PollingStations = () => {
  const navigate = useNavigate();
  const [pollingStationsData, setPolingStationsData] = useState([]);

  const getPolingStationsAPI = async () => {
    let res = await getPollingStations(1);
    setPolingStationsData(res?.data || []);
  };
  useEffect(() => {
    getPolingStationsAPI();
  }, []);
  console.log(pollingStationsData);

  return (
    <div className="min-h-screen bg-black text-white p-5">
      {/* Title Section */}
      <h2 className="text-2xl font-bold text-green-400 mb-5">Polling Stations:</h2>

      {/* Total Polling Stations Box */}
      <div className="bg-gray-200 rounded-lg p-5 flex items-center justify-between mb-5">
        <div>
          <p className="text-lg text-black">Total Polling Stations</p>
          <h3 className="text-4xl font-bold text-black ">{pollingStationsData?.length || 0}</h3>
        </div>
        <img src={voteBox} width={70} alt="" />
      </div>

      {/* List of Polling Stations */}
      <div className="space-y-3">
        {pollingStationsData.map((station) => (
          <div key={station.id} className="flex justify-between items-center bg-green-800 rounded-md p-3">
            <span className="text-lg font-bold">{station?.name}</span>
            <button
              className="bg-white text-black px-4 py-2 rounded-md"
              onClick={() => navigate("/poling-station/" + station.id)}
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
