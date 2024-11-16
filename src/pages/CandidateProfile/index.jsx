import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaVoteYea, FaChartPie } from "react-icons/fa";
import userIcon from "../../assets/user_icon.svg";
import voteBox from "../../assets/vote_box_color.svg";
import pieChart from "../../assets/pie.svg";
import { getCandidateProfile } from "../../VoteAPI";

const CandidateDetails = () => {
  const { id } = useParams();
  const [candidateData, setCandidate] = useState({});
  const [error, setError] = useState(null);

  const fetchCandidate = async () => {
    const res = await getCandidateProfile(id);
    if (res.error) {
      setError(res.message);
    } else {
      setCandidate(res?.data || {});
    }
  };
  useEffect(() => {
    fetchCandidate();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!candidateData) return <div>Candidate not found</div>;

  const { candidate, total_votes, percentage } = candidateData;

  return (
    <div className="border border-gray-600 rounded-md text-white p-5">
      <h2 className="text-2xl font-bold mb-5">Candidate Details</h2>

      <div className="bg-green-600 text-white p-3 rounded-lg mb-5">
        <p className="text-lg font-bold">Party: {candidate?.type || "N/A"}</p>
      </div>

      {/* Details and Image Section */}
      <div className="flex mb-5">
        <div className="flex-grow space-y-3">
          <div className="px-4 rounded">
            <p className="text-sm">Name</p>
            <div className="border border-gray-600 rounded-md text-white p-2">{candidate?.name || ""}</div>
          </div>
          <div className="px-4 rounded">
            <p className="text-sm">Father's Name</p>
            <div className="border border-gray-600 rounded-md text-white p-2">{/* Empty field for static data */}</div>
          </div>
        </div>

        {/* Image Section */}
        <div className="ml-5 flex-none">
          {/* <img
            src={CandidateImg} // Placeholder image
            alt="Candidate"
            className="w-32 rounded-full object-cover bg-white"
          /> */}
        </div>
      </div>

      {/* Additional Details */}
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="px-4 rounded">
            <p className="text-sm">Date of Birth</p>
            <div className="border border-gray-600 rounded-md text-white p-2">{/* Empty field for static data */}</div>
          </div>
          <div className="px-4 rounded">
            <p className="text-sm">CNIC Number</p>
            <div className="border border-gray-600 rounded-md text-white p-2">{/* Empty field for static data */}</div>
          </div>
        </div>
        <div className="px-4 rounded">
          <p className="text-sm">Address</p>
          <div className="border border-gray-600 rounded-md text-white p-2">{/* Empty field for static data */}</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="px-4 rounded">
            <p className="text-sm">Council</p>
            <div className="border border-gray-600 rounded-md text-white p-2">{candidate?.council || ""}</div>
          </div>
          <div className="px-4 rounded">
            <p className="text-sm">Tehseel</p>
            <div className="border border-gray-600 rounded-md text-white p-2">{candidate?.tehsil || ""}</div>
          </div>
          <div className="px-4 rounded">
            <p className="text-sm">District</p>
            <div className="border border-gray-600 rounded-md text-white p-2">{candidate?.district || ""}</div>
          </div>
          <div className="px-4 rounded">
            <p className="text-sm">Division</p>
            <div className="border border-gray-600 rounded-md text-white p-2">{candidate?.division || ""}</div>
          </div>
          <div className="px-4 rounded">
            <p className="text-sm">Province</p>
            <div className="border border-gray-600 rounded-md text-white p-2">{candidate?.province || ""}</div>
          </div>
        </div>
      </div>

      {/* Votes and Percentage Section */}
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div className="bg-gray-800 p-5 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-lg font-bold">Total Votes Cast</p>
            <h3 className="text-4xl font-bold text-white">{total_votes || 0}</h3>
          </div>
          <img src={voteBox} width={60} alt="" />
        </div>
        <div className="bg-gray-800 p-5 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-lg font-bold">Percentage</p>
            <h3 className="text-4xl font-bold text-white">{percentage || 0}%</h3>
          </div>
          <img src={pieChart} width={60} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;
