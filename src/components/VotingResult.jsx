import React from "react";

const VotingResult = () => {
  return (
    <div className="w-full max-w-md flex justify-between items-center bg-green-600 p-4 rounded-md">
      <span className="text-lg font-bold">See Voting Results</span>
      <button className="bg-white text-black px-4 py-2 rounded-md">
        View Details
      </button>
    </div>
  );
};

export default VotingResult;
