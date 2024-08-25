import React from "react";
import DashboardImg from "../../assets/dashboard.svg";

// Assuming you have an image file path for each candidate
import CandidateImg1 from "../../assets/candidate1.svg";
import CandidateImg2 from "../../assets/no-candidate.svg";
// import CandidateImg3 from "../../assets/candidate3.png";
// import CandidateImg4 from "../../assets/candidate4.png";

const candidates = [
  {
    name: "Ch. Nasar ullah Arain",
    type: "Independent",
    votes: "1,0800",
    imgSrc: CandidateImg1, // Example image for this candidate
  },
  {
    name: "Ghulam Murtaza",
    type: "TLP",
    votes: "12,000",
    imgSrc: CandidateImg2,
  },
  {
    name: "Haji Khan",
    type: "PTI",
    votes: "6,000",
    imgSrc: CandidateImg2,
  },
  {
    name: "Gulam Mahudeen Bhatti",
    type: "PPP",
    votes: "4,000",
    imgSrc: CandidateImg2,
  },
];

const TotalVotes = () => {
  return (
    <div className="bg-black text-white p-5 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-5">
        Total Votes: <span className="text-green-400">40,000</span>
      </h2>

      <div className="mb-5">
        <img src={DashboardImg} alt="Illustration" className="rounded" />
      </div>

      <div className="w-full max-w-2xl p-5 rounded-lg">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Type</th>
              <th className="p-3">Votes</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index} className="bg-green-800">
                <td className="p-3 flex items-center space-x-3 rounded-l-md">
                  <img
                    src={candidate.imgSrc}
                    alt={candidate.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span>{candidate.name}</span>
                </td>
                <td className="p-3">{candidate.type}</td>
                <td className="p-3 rounded-r-md">{candidate.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalVotes;
