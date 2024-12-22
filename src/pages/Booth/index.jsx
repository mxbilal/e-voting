import React, { useEffect, useState } from "react";
import BoothImage from "../../assets/booth.svg";
import { useNavigate } from "react-router-dom";
import voteCall from "../../VoteCall";
import { getBooth } from "../../VoteAPI";
const Booth = () => {
  const navigate = useNavigate();
  const [booths, setBooths] = useState([]);
  const getBoothAPI = async () => {
    let res = await getBooth();
    if (res.error) {
    } else {
      setBooths(res.data);
    }
  };
  const handleBooth = (dt) => {
    navigate("/start-vote/" + dt.id+"/"+dt.gender);
  };
  useEffect(() => {
    getBoothAPI();
  }, []);
  return (
    <div className="min-h-screen bg-black text-white p-5 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-green-400 mb-5">Select your Booth</h2>
      <hr className="w-full mb-10 border-gray-600" />

      <div className="w-full max-w-md text-center mb-10">
        <h3 className="text-xl font-bold mb-5">Gents Booths</h3>
        <div className="grid  gap-5">
          {booths
            .filter((a) => a.gender === "Male")
            .map((dt) => (
              <button className="bg-green-800 text-white text-lg py-3 rounded-md" onClick={() => handleBooth(dt)}>
                {dt?.name}
              </button>
            ))}
        </div>
      </div>

      <div className="w-full max-w-md text-center mb-10">
        <h3 className="text-xl font-bold mb-5">Ladies Booths</h3>
        <div className="grid  gap-5">
          {booths
            .filter((a) => a.gender === "Female")
            .map((dt) => (
              <button className="bg-green-800 text-white text-lg py-3 rounded-md" onClick={() => handleBooth(dt)}>
                {dt?.name}
              </button>
            ))}
        </div>
      </div>

      <div className="mb-10">
        <img src={BoothImage} alt="Booth" className="w-60 h-auto mx-auto" />
      </div>
    </div>
  );
};

export default Booth;
