import React from "react";
import CandidateImg1 from "../../assets/candidate1.svg";
import fingerImg from "../../assets/finger.svg";
import CandidateCard from "../../components/CandidateCard";
import { useNavigate } from "react-router-dom";

const candidates = [
  {
    name: "Ch. Nasar ullah Arain",
    type: "Independent",
    imgSrc: CandidateImg1,
  },
];
const ScanThumb = () => {
  const navigate = useNavigate();
  const handleClick = (id) => navigate("/vote-success");
  return (
    <div className="flex justify-center text-white  flex-col items-center gap-5 ">
      <div className="grid grid-cols-1 gap-4">
        {candidates.map((candidate, index) => (
          <CandidateCard
            candidate={candidate}
            key={index}
            // onClick={handleClick}
          />
        ))}
      </div>

      <p>Scan Now</p>

      <img
        src={fingerImg}
        width={150}
        className="cursor-pointer"
        onClick={handleClick}
      />

      <p>Press Your finger on scanner</p>
    </div>
  );
};

export default ScanThumb;
