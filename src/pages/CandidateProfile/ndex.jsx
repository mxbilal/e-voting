import React from "react";
import { FaVoteYea, FaChartPie } from "react-icons/fa";
import CandidateImg from "../../assets/candidate1.svg";
import cand1 from "../../assets/cand1.jpg";
import userIcon from "../../assets/user_icon.svg";
import voteBox from "../../assets/vote_box_color.svg";
import pieChart from "../../assets/pie.svg";
import { useParams } from "react-router-dom";

const candidates = [
  {
    id: "1",
    name: "Malik Hajji Zaman",
    party: "PTI",
    img: CandidateImg,
    fatherName: "Muhammad Tufail",
    dateOfBirth: "05/06/1980",
    cnic: "35201-2345666-2",
    address: "Gldpur Tehseel Chunian",
    council: "UC-71",
    tehseel: "Chunian",
    district: "Qasur",
    division: "UC-71",
    province: "Punjab",
    totalVotes: 1800,
    percentage: 45,
  },
  {
    id: "2",
    name: "Ghulam Mohiudeen Bhatti",
    party: "N League",
    img: userIcon,
    fatherName: "Ahmed Raza",
    dateOfBirth: "12/03/1985",
    cnic: "35201-2349999-2",
    address: "Lahore City",
    council: "UC-52",
    tehseel: "Lahore",
    district: "Lahore",
    division: "UC-52",
    province: "Punjab",
    totalVotes: 2300,
    percentage: 52,
  },
  {
    id: "3",
    name: "Malik Abbas",
    party: "Azad",
    img: cand1,
    fatherName: "Malik Shahnawaz",
    dateOfBirth: "15/08/1982",
    cnic: "35201-5678888-2",
    address: "Sialkot Tehseel",
    council: "UC-34",
    tehseel: "Sialkot",
    district: "Sialkot",
    division: "UC-34",
    province: "Punjab",
    totalVotes: 1950,
    percentage: 48,
  },
  {
    id: "4",
    name: "Nazar Ullah Arain",
    party: "PPP",
    img: userIcon,
    fatherName: "Ch Muhammad Din",
    dateOfBirth: "21/11/1990",
    cnic: "35201-7766554-2",
    address: "Faisalabad City",
    council: "UC-14",
    tehseel: "Faisalabad",
    district: "Faisalabad",
    division: "UC-14",
    province: "Punjab",
    totalVotes: 1600,
    percentage: 40,
  },
];
const CandidateDetails = () => {
  const { id } = useParams();
  const candidate = candidates.find((candidate) => candidate.id === id);

  // Handle case where no candidate is found
  if (!candidate) {
    return <div>Candidate not found</div>;
  }
  return (
    <div className=" border border-gray-600 rounded-md text-white p-5">
      <h2 className="text-2xl font-bold mb-5">Candidate Details</h2>

      <div className="bg-green-600 text-white p-3 rounded-lg mb-5">
        <p className="text-lg font-bold">Party: {candidate.party}</p>
      </div>

      {/* Details and Image Section */}
      <div className="flex mb-5">
        <div className="flex-grow space-y-3">
          <div className="px-4 rounded">
            <p className="text-sm">Name</p>
            <div className="border border-gray-600 rounded-md text-white p-2">
              {candidate.name}
            </div>
          </div>
          <div className="px-4 rounded">
            <p className="text-sm">Father's Name</p>
            <div className="border border-gray-600 rounded-md text-white p-2">
              {candidate.fatherName}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="ml-5 flex-none">
          <img
            src={candidate.img}
            alt="Candidate"
            className="w-32 rounded-full object-cover bg-white"
          />
        </div>
      </div>

      {/* Additional Details */}
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className=" px-4 rounded">
            <p className="text-sm">Date of Birth</p>
            <div className="border border-gray-600 rounded-md text-white p-2">
              {candidate.dateOfBirth}
            </div>
          </div>
          <div className=" px-4 rounded">
            <p className="text-sm">CNIC Number</p>
            <div className="border border-gray-600 rounded-md text-white p-2">
              {candidate.cnic}
            </div>
          </div>
        </div>
        <div className=" px-4 rounded">
          <p className="text-sm">Address</p>
          <div className="border border-gray-600 rounded-md text-white p-2">
            {candidate.address}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className=" px-4 rounded">
            <p className="text-sm">Council</p>
            <div className="border border-gray-600 rounded-md text-white p-2">
              {candidate.council}
            </div>
          </div>
          <div className=" px-4 rounded">
            <p className="text-sm">Tehseel</p>
            <div className="border border-gray-600 rounded-md text-white p-2">
              {candidate.tehseel}
            </div>
          </div>
          <div className=" px-4 rounded">
            <p className="text-sm">District</p>
            <div className="border border-gray-600 rounded-md text-white p-2">
              {candidate.district}
            </div>
          </div>
          <div className=" px-4 rounded">
            <p className="text-sm">Division</p>
            <div className="border border-gray-600 rounded-md text-white p-2">
              {candidate.division}
            </div>
          </div>
          <div className=" px-4 rounded">
            <p className="text-sm">Province</p>
            <div className="border border-gray-600 rounded-md text-white p-2">
              {candidate.province}
            </div>
          </div>
        </div>
      </div>

      {/* Votes and Percentage Section */}
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div className="bg-gray-800 p-5 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-lg font-bold">Total Votes Cast</p>
            <h3 className="text-4xl font-bold text-white">
              {candidate.totalVotes}
            </h3>
          </div>
          <img src={voteBox} width={60} alt="" />
        </div>
        <div className="bg-gray-800 p-5 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-lg font-bold">Percentage</p>
            <h3 className="text-4xl font-bold text-white">
              {candidate.percentage}%
            </h3>
          </div>
          <img src={pieChart} width={60} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;
