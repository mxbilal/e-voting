import React from "react";
import { FaVoteYea, FaChartPie } from "react-icons/fa";
import CandidateImg from "../../assets/candidate1.svg";
import voteBox from "../../assets/vote_box_color.svg";
import pieChart from "../../assets/pie.svg";

const CandidateDetails = () => {
  return (
    <div className=" border border-gray-600 rounded-md text-white p-5">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-5">Candidate Details</h2>

      {/* Party Section */}
      <div className="bg-green-600 text-white p-3 rounded-lg mb-5">
        <p className="text-lg font-bold">Party: Independent</p>
      </div>

      {/* Details and Image Section */}
      <div className="flex mb-5">
        <div className="flex-grow space-y-3">
          <div className="px-4 rounded">
            <p className="text-sm">Name</p>
            <div className="border border-gray-600 rounded-md text-white p-2">
              Ch. Nasar ullah Arain
            </div>
          </div>
          <div className="px-4 rounded">
            <p className="text-sm">Father's Name</p>
            <div className="border border-gray-600 rounded-md text-white p-2">
              Muhammad Akram
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="ml-5 flex-none">
          <img
            src={CandidateImg}
            alt="Candidate"
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Additional Details */}
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className=" px-4 rounded">
            <p className="text-sm">Date of Birth</p>
            <div className="border border-gray-600 rounded-md text-white p-2">
              05/06/1980
            </div>
          </div>
          <div className=" px-4 rounded">
            <p className="text-sm">CNIC Number</p>
            <div className="border border-gray-600 rounded-md text-white p-2">
              35201-2345666-2
            </div>
          </div>
        </div>
        <div className=" px-4 rounded">
          <p className="text-sm">Address</p>
          <div className="border border-gray-600 rounded-md text-white p-2">
            Gldpur Tehseel Chunian
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className=" px-4 rounded">
            <p className="text-sm">Council</p>
            <div className="border border-gray-600 rounded-md text-white p-2">
              UC-71
            </div>
          </div>
          <div className=" px-4 rounded">
            <p className="text-sm">Tehseel</p>
            <div className="border border-gray-600 rounded-md text-white p-2">
              Chunian
            </div>
          </div>
          <div className=" px-4 rounded">
            <p className="text-sm">District</p>
            <div className="border border-gray-600 rounded-md text-white p-2">
              Qasur
            </div>
          </div>
          <div className=" px-4 rounded">
            <p className="text-sm">Division</p>
            <div className="border border-gray-600 rounded-md text-white p-2">
              UC-71
            </div>
          </div>
          <div className=" px-4 rounded">
            <p className="text-sm">Province</p>
            <div className="border border-gray-600 rounded-md text-white p-2">
              Chunian
            </div>
          </div>
        </div>
      </div>

      {/* Votes and Percentage Section */}
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div className="bg-gray-800 p-5 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-lg font-bold">Total Votes Cast</p>
            <h3 className="text-4xl font-bold text-white">1800</h3>
          </div>
          <img src={voteBox} width={60} alt="" />
        </div>
        <div className="bg-gray-800 p-5 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-lg font-bold">Percentage</p>
            <h3 className="text-4xl font-bold text-white">45%</h3>
          </div>
          <img src={pieChart} width={60} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;
