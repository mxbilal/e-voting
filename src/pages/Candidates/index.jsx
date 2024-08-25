import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import CandidateImg1 from "../../assets/candidate1.svg";
import { useNavigate } from "react-router-dom";
// Add more images as necessary

const candidates = [
  {
    name: "Ch. Nasar ullah Arain",
    type: "Independent",
    imgSrc: CandidateImg1,
  },
  {
    name: "Ghulam Murtaza",
    type: "TLP",
    imgSrc: "", // Placeholder image or leave empty if none
  },
  {
    name: "Haji Khan",
    type: "PTI",
    imgSrc: "", // Placeholder image or leave empty if none
  },
  {
    name: "Gulam Mahudeen",
    type: "PPP",
    imgSrc: "", // Placeholder image or leave empty if none
  },
];

const CandidateList = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white p-5">
      {/* Top Section with Search and Icons */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center bg-gray-800 rounded px-3 py-2">
          <FaSearch className="text-white mr-2" />
          <input
            type="text"
            placeholder="search"
            className="bg-gray-800 text-white focus:outline-none"
          />
        </div>
        <FaBell className="text-white text-2xl" />
      </div>

      {/* Title and Range Section */}
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-green-400">Candidate’s List:</h2>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value="01 - 10"
              readOnly
              className="bg-gray-800 text-white rounded px-3 py-2"
            />
            <span>Select range to get more results</span>
          </div>
          <div className="text-green-400">Total : 04</div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        <button className="bg-gray-800 rounded p-3">
          Province <br /> <span className="font-bold">Punjab</span>
        </button>
        <button className="bg-gray-800 rounded p-3">
          District <br /> <span className="font-bold">Qasur</span>
        </button>
        <button className="bg-gray-800 rounded p-3">
          Division <br /> <span className="font-bold">Chunian</span>
        </button>
        <button className="bg-gray-800 rounded p-3">
          Tehseel <br /> <span className="font-bold">GidPur</span>
        </button>
        <button className="bg-gray-800 rounded p-3">
          Council <br /> <span className="font-bold">UC-71</span>
        </button>
        <button className="bg-gray-800 rounded p-3">
          Polling Station <br /> <span className="font-bold">101</span>
        </button>
      </div>

      {/* Candidate Cards */}
      <div className="grid grid-cols-2 gap-4">
        {candidates.map((candidate, index) => (
          <div
            key={index}
            className="bg-gray-800 p-5 rounded-lg text-center  cursor-pointer"
            onClick={() => navigate("/candidate-profile/1")}
          >
            <div className="w-24 h-24 mx-auto mb-3">
              {candidate.imgSrc ? (
                <img
                  src={candidate.imgSrc}
                  alt={candidate.name}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="w-full h-full bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-black">No Image</span>
                </div>
              )}
            </div>
            <h3 className="text-lg font-bold text-green-400">
              {candidate.name}
            </h3>
            <p>{candidate.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateList;
