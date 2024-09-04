import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import CandidateImg1 from "../../assets/candidate1.svg";
import { useNavigate } from "react-router-dom";
import CandidateCard from "../../components/CandidateCard";
import EButton from "../../components/EButton";
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

const ChooseCandidate = () => {
  const navigate = useNavigate();
  const handleClick = (id) => navigate("/scan-thumb");
  return (
    <div className=" text-white p-5">
      <div className=" px-16 grid grid-cols-2 gap-4">
        {candidates.map((candidate, index) => (
          <div className="flex flex-col">
            <CandidateCard
              candidate={candidate}
              key={index}
              onClick={handleClick}
            />
            {/* <buttpn className="bg-green-800 px-4 rounded-sm w-full text-center py-3">
              Vote
            </buttpn> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseCandidate;