import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import CongratsImage from "../../assets/checked.svg";
import crossIcon from "../../assets/cross.svg";
import VotingResult from "../../components/VotingResult";
import { useNavigate, useParams } from "react-router-dom";
import voteCall from "../../VoteCall";

const CheckVote = () => {
  const { cnic } = useParams();
  const canVote = true; //                                                                                                                       parseInt(cnic.split("")[0] || "0") % 2 === 0;
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const handleConfirm = () => {
    navigate("/choose-candidate/" + data?.id);
  };

  const handleCheckNow = async () => {
    try {
      let res = await voteCall.post("user/verify_cnic/", { cnic });
      const { data, status } = res;
      if (status === 200 && data) {
        const { result, code, error } = data;
        if (code === 0 && !error) {
          setData(result || {});
        }
      } else alert("Something went wrong");
    } catch (e) {
      let message = e?.response?.data?.message || "Something went wrong";
      alert(message);
    }
  };
  useEffect(() => {
    handleCheckNow();
  }, []);
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
          <div className="border border-gray-600 text-white p-2 rounded">{data?.name}</div>
        </div>
        <div className="px-2 rounded">
          <p className="text-sm">Father's Name</p>
          <div className="border border-gray-600 text-white p-2 rounded">{data?.father_name}</div>
        </div>
        <div className="px-2 rounded">
          <p className="text-sm">Polling Station</p>
          <div className="border border-gray-600 text-white p-2 rounded">{data?.polling_station?.name}</div>
        </div>
        <div className="px-2 rounded">
          <p className="text-sm">CNIC Number</p>
          <div className="border border-gray-600 text-white p-2 rounded">{cnic}</div>
        </div>
        <div className="px-2 rounded">
          <p className="text-sm">Address</p>
          <div className="border border-gray-600 text-white p-2 rounded">{data?.address}</div>
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
