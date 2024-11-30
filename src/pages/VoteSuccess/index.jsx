import React from "react";
import CandidateImg1 from "../../assets/checked.svg";
import CandidateCard from "../../components/CandidateCard";
import { useLocation } from "react-router-dom";

const candidates = [
  {
    name: "Ch. Nasar",
    type: "Independent",
    imgSrc: CandidateImg1,
  },
];
const VoteSuccess = () => {
  const location = useLocation();
  const candidate = location.state;
  return (
    <div className="text-white flex flex-col gap-5 p-20 ">
      <div className="flex flex-col  ">
        <CandidateCard
          candidate={candidate}
          // onClick={handleClick}
        />
        {/* <buttpn className="bg-green-800 px-4 rounded-sm w-full text-center py-3">
              congrats
            </buttpn> */}
      </div>

      <h1 className="text-green-500 text-xl ">Note:</h1>

      <ul>
        <li>Don't share your id with anyone </li>
        <li>You have only on coin/chance to vote so utilize it carefully</li>
        <li>Transaction is secured and encrypted</li>
      </ul>

      <button
        className="bg-green-600 text-white text-xl px-10 py-3 mb-3 rounded-md"
        onClick={() => window.location.replace("/booth")}
      >
        Go to Home Screen
      </button>
    </div>
  );
};

export default VoteSuccess;
