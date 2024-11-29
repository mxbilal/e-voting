import React from "react";
import CandidateImg1 from "../../assets/candidate1.svg";
import fingerImg from "../../assets/finger.svg";
import CandidateCard from "../../components/CandidateCard";
import { useLocation, useNavigate } from "react-router-dom";
import voteCall from "../../VoteCall";

const candidates = [
  {
    name: "Ch. Nasar ullah Arain",
    type: "Independent",
    imgSrc: CandidateImg1,
  },
];
const ScanThumb = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { voter, candidate } = location.state;

  const handleClick = async () => {
    try {
      let res = await voteCall.post("user/cast_vote/", {
        voter,
        candidate: candidate.id,
        gender: "Male",
        council: 1,
        polling_station: 1,
        polling_booth: 1,
      });
      const { data, status } = res;
      if ([200, 201].includes(status) && data) {
        const { result, code, error } = data;
        if (code === 0 && !error) {
          navigate("/vote-success", { state: candidate });
        }
      } else alert("Something went wrong");
    } catch (e) {
      let message = e?.response?.data?.message || "Something went wrong";
      alert(message);
    }
    //
  };

  return (
    <div className="flex justify-center text-white  flex-col items-center gap-5 mt-40 ">
      <div className="grid grid-cols-1 gap-4">
        <CandidateCard candidate={candidate} />
      </div>

      <p>Scan Now</p>

      <img src={fingerImg} width={150} className="cursor-pointer" onClick={handleClick} />

      <p>Press Your finger on scanner</p>
    </div>
  );
};

export default ScanThumb;
