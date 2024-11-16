import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import CongratsImage from "../../assets/checked.svg";
import crossIcon from "../../assets/cross.svg";
import VotingResult from "../../components/VotingResult";
import { useNavigate, useParams } from "react-router-dom";

const CheckVote = () => {
  const { cnic } = useParams();
  const canVote = true; //                                                                                                                       parseInt(cnic.split("")[0] || "0") % 2 === 0;
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/choose-candidate");
  };
  return (
    <div className=" text-white p-5 flex flex-col items-center">
      {
        <div className="w-full text-center p-5 rounded-lg mb-5 flex flex-col items-center justify-between">
          <img src={canVote ? CongratsImage : crossIcon} alt="Congratulations" width={canVote ? 100 : 100} />
          <div>
            {/* <h1 className={`text-3xl font-bold ${!canVote && "text-red-600"}`}>
              {canVote ? "Congratulations" : "Unmatched"}
            </h1> */}
            <p className="text-xl text-green-500 mt-2">
              {canVote ? "Confirm Details" : "You can’t vote here. Your polling station is below"}
            </p>
            {!canVote && <p className="text-green-500">Govt Graduate College for Women, Shadbagh</p>}
          </div>
        </div>
      }

      <div className="w-full max-w-md space-y-4 mb-5">
        <div className="px-2 rounded">
          <p className="text-sm">Name</p>
          <div className="border border-gray-600 text-white p-2 rounded">Muhammad Haneef</div>
        </div>
        <div className="px-2 rounded">
          <p className="text-sm">Father's Name</p>
          <div className="border border-gray-600 text-white p-2 rounded">Muhammad Ramzan</div>
        </div>
        <div className="px-2 rounded">
          <p className="text-sm">Age</p>
          <div className="border border-gray-600 text-white p-2 rounded">65</div>
        </div>
        <div className="px-2 rounded">
          <p className="text-sm">CNIC Number</p>
          <div className="border border-gray-600 text-white p-2 rounded">35201-7307006-1</div>
        </div>
        <div className="px-2 rounded">
          <p className="text-sm">Address</p>
          <div className="border border-gray-600 text-white p-2 rounded">
            Dak Khana Gadpur, China Hatar, Tehseel Chunian, District Qasur
          </div>
        </div>
      </div>
      {/* <p>*Press below button to confirm your adentity</p> */}

      <button className="bg-green-800 text-white text-xl px-10 py-3 mb-3 rounded-md" onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default CheckVote;
