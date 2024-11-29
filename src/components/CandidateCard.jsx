import React from "react";

const CandidateCard = ({ candidate, onClick }) => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg text-center  cursor-pointer" onClick={() => onClick(candidate)}>
      <div className="w-24 h-24 mx-auto mb-3">
        {candidate.imgSrc ? (
          <img src={candidate.imgSrc} alt={candidate.name} className="w-full h-full object-cover rounded-full" />
        ) : (
          <div className="w-full h-full bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-black">No Image</span>
          </div>
        )}
      </div>
      <h3 className="text-lg font-bold text-green-400">{candidate.name}</h3>
      <p className="text-white">{candidate.type}</p>
    </div>
  );
};

export default CandidateCard;
