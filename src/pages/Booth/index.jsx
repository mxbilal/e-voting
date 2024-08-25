import React from "react";
import BoothImage from "../../assets/booth.svg";
const Booth = () => {
  return (
    <div className="min-h-screen bg-black text-white p-5 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-green-400 mb-5">
        Select your Booth
      </h2>
      <hr className="w-full mb-10 border-gray-600" />

      <div className="w-full max-w-md text-center mb-10">
        <h3 className="text-xl font-bold mb-5">Gents Booths</h3>
        <div className="grid grid-cols-2 gap-5">
          <button className="bg-green-800 text-white text-lg py-3 rounded-md">
            Booth 1
          </button>
          <button className="bg-green-800 text-white text-lg py-3 rounded-md">
            Booth 2
          </button>
          <button className="bg-green-800 text-white text-lg py-3 rounded-md">
            Booth 3
          </button>
          <button className="bg-green-800 text-white text-lg py-3 rounded-md">
            Booth 4
          </button>
        </div>
      </div>

      <div className="w-full max-w-md text-center mb-10">
        <h3 className="text-xl font-bold mb-5">Ladies Booths</h3>
        <div className="grid grid-cols-2 gap-5">
          <button className="bg-green-800 text-white text-lg py-3 rounded-md">
            Booth 1
          </button>
          <button className="bg-green-800 text-white text-lg py-3 rounded-md">
            Booth 2
          </button>
        </div>
      </div>

      <div className="mb-10">
        <img src={BoothImage} alt="Booth" className="w-60 h-auto mx-auto" />
      </div>
    </div>
  );
};

export default Booth;
