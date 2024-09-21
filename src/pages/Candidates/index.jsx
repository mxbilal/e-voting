import React, { useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import CandidateImg1 from "../../assets/candidate1.svg";
import { useNavigate } from "react-router-dom";
import CandidateCard from "../../components/CandidateCard";
import cand1 from "../../assets/cand1.jpg";
import userIcon from "../../assets/user_icon.svg";

const candidates = [
  {
    name: "Malik Hajji Zaman S/O M. Tufail",
    type: "PTI",
    imgSrc: CandidateImg1,
  },
  {
    name: "Ghulam Mohiudeen Bhatti",
    type: "N league",
    imgSrc: userIcon,
  },
  {
    name: "Malik Abbas S/O Malik Shahnawaz",
    type: "Azad",
    imgSrc: cand1,
  },
  {
    name: "Nazar Ullah Arain S/O Muhammad Din",
    type: "PPP",
    imgSrc: userIcon,
  },
];

const provinces = ["Punjab", "Sindh", "KPK", "Balochistan"];
const divisions = ["Chunian", "Lahore", "Faisalabad"];
const districts = ["Qasur", "Lahore", "Multan"];
const tehsils = ["GidPur", "Kot Radha Kishan", "Kasur"];
const councils = ["UC-71", "UC-72", "UC-73"];
const pollingStations = ["101", "102", "103"];

const CandidateList = () => {
  const navigate = useNavigate();
  const handleClick = (id) => navigate("/candidate-profile/1");

  // State for dropdown selections
  const [selectedProvince, setSelectedProvince] = useState(provinces[0]);
  const [selectedDivision, setSelectedDivision] = useState(divisions[0]);
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0]);
  const [selectedTehsil, setSelectedTehsil] = useState(tehsils[0]);
  const [selectedCouncil, setSelectedCouncil] = useState(councils[0]);
  const [selectedPollingStation, setSelectedPollingStation] = useState(
    pollingStations[0]
  );

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

      {/* Filter Dropdowns */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        <div className="bg-gray-800 rounded p-3">
          <label className="block mb-2">Province</label>
          <select
            className="bg-gray-700 text-white p-2 rounded w-full"
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
          >
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-gray-800 rounded p-3">
          <label className="block mb-2">Division</label>
          <select
            className="bg-gray-700 text-white p-2 rounded w-full"
            value={selectedDivision}
            onChange={(e) => setSelectedDivision(e.target.value)}
          >
            {divisions.map((division) => (
              <option key={division} value={division}>
                {division}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-gray-800 rounded p-3">
          <label className="block mb-2">District</label>
          <select
            className="bg-gray-700 text-white p-2 rounded w-full"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-gray-800 rounded p-3">
          <label className="block mb-2">Tehsil</label>
          <select
            className="bg-gray-700 text-white p-2 rounded w-full"
            value={selectedTehsil}
            onChange={(e) => setSelectedTehsil(e.target.value)}
          >
            {tehsils.map((tehsil) => (
              <option key={tehsil} value={tehsil}>
                {tehsil}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-gray-800 rounded p-3">
          <label className="block mb-2">Council</label>
          <select
            className="bg-gray-700 text-white p-2 rounded w-full"
            value={selectedCouncil}
            onChange={(e) => setSelectedCouncil(e.target.value)}
          >
            {councils.map((council) => (
              <option key={council} value={council}>
                {council}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-gray-800 rounded p-3">
          <label className="block mb-2">Polling Station</label>
          <select
            className="bg-gray-700 text-white p-2 rounded w-full"
            value={selectedPollingStation}
            onChange={(e) => setSelectedPollingStation(e.target.value)}
          >
            {pollingStations.map((station) => (
              <option key={station} value={station}>
                {station}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Candidate Cards */}
      <div className="grid grid-cols-2 gap-4">
        {candidates.map((candidate, index) => (
          <CandidateCard
            candidate={candidate}
            key={index}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CandidateList;
