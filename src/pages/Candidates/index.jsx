import React, { useEffect, useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import CandidateCard from "../../components/CandidateCard";
import { getDistricts, getTehsils, getCouncils, getPollingStations, getCandidates } from "../../VoteAPI";
import { useNavigate } from "react-router-dom";

const CandidateList = () => {
  // Static options
  const provinces = ["Punjab"];
  const divisions = ["Lahore"];
  const navigate = useNavigate();

  // State for selected dropdown values
  const [selectedProvince, setSelectedProvince] = useState(provinces[0]);
  const [selectedDivision, setSelectedDivision] = useState(divisions[0]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedTehsil, setSelectedTehsil] = useState("");
  const [selectedCouncil, setSelectedCouncil] = useState("");
  const [selectedPollingStation, setSelectedPollingStation] = useState("");

  // State for dynamic data
  const [districts, setDistricts] = useState([]);
  const [tehsils, setTehsils] = useState([]);
  const [councils, setCouncils] = useState([]);
  const [pollingStations, setPollingStations] = useState([]);
  const [candidates, setCandidates] = useState([]);

  // Fetch districts initially
  useEffect(() => {
    async function fetchDistricts() {
      const districtData = await getDistricts();
      setDistricts(districtData);
    }
    fetchDistricts();
  }, []);

  // Fetch tehsils when district changes
  useEffect(() => {
    if (selectedDistrict) {
      async function fetchTehsils() {
        const tehsilData = await getTehsils(selectedDistrict);
        setTehsils(tehsilData);
      }
      fetchTehsils();
    }
  }, [selectedDistrict]);

  // Fetch councils when tehsil changes
  useEffect(() => {
    if (selectedTehsil) {
      async function fetchCouncils() {
        const councilData = await getCouncils(selectedTehsil);
        setCouncils(councilData);
      }
      fetchCouncils();
    }
  }, [selectedTehsil]);

  // Fetch polling stations when council changes
  useEffect(() => {
    if (selectedCouncil) {
      async function fetchPollingStations() {
        const pollingData = await getPollingStations(selectedCouncil);
        setPollingStations(pollingData?.data || []);
      }
      fetchPollingStations();
    }
  }, [selectedCouncil]);

  // Fetch candidates whenever any filter changes
  useEffect(() => {
    async function fetchCandidates() {
      const filterOptions = {
        district: selectedDistrict,
        tehsil: selectedTehsil,
        council: selectedCouncil,
        polling_station: selectedPollingStation,
      };
      const candidateData = await getCandidates(filterOptions);
      setCandidates(candidateData.data || []);
    }
    fetchCandidates();
  }, [selectedDistrict, selectedTehsil, selectedCouncil, selectedPollingStation]);

  return (
    <div className="min-h-screen bg-black text-white p-5">
      <div className="grid grid-cols-3 gap-2 mb-5">
        {/* Static dropdowns for Province and Division */}
        <div className="bg-gray-800 rounded p-3">
          <label>Province</label>
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
          <label>Division</label>
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

        {/* Dynamic dropdowns */}
        <div className="bg-gray-800 rounded p-3">
          <label>District</label>
          <select
            className="bg-gray-700 text-white p-2 rounded w-full"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-gray-800 rounded p-3">
          <label>Tehsil</label>
          <select
            className="bg-gray-700 text-white p-2 rounded w-full"
            value={selectedTehsil}
            onChange={(e) => setSelectedTehsil(e.target.value)}
          >
            <option value="">Select Tehsil</option>
            {tehsils.map((tehsil) => (
              <option key={tehsil.id} value={tehsil.id}>
                {tehsil.name}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-gray-800 rounded p-3">
          <label>Council</label>
          <select
            className="bg-gray-700 text-white p-2 rounded w-full"
            value={selectedCouncil}
            onChange={(e) => setSelectedCouncil(e.target.value)}
          >
            <option value="">Select Council</option>
            {councils.map((council) => (
              <option key={council.id} value={council.id}>
                {council.name}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-gray-800 rounded p-3">
          <label>Polling Station</label>
          <select
            className="bg-gray-700 text-white p-2 rounded w-full"
            value={selectedPollingStation}
            onChange={(e) => setSelectedPollingStation(e.target.value)}
          >
            <option value="">Select Polling Station</option>
            {pollingStations.map((station) => (
              <option key={station.id} value={station.id}>
                {station.name}
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
            onClick={() => navigate("candidate-profile/" + candidate.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CandidateList;
