import React, { useState, useRef, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import EButton from "../components/EButton";
import { useNavigate } from "react-router-dom";

//src
import adminIcon from "../assets/administrator.svg";
import voteIcon from "../assets/vote.svg";

const HomePage = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    setIsPopupVisible(true);
  };

  // Close popup if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  const handleLoginAsElectionCommission = () => {
    navigate("/login/election-commission");
  };

  return (
    <div className="bg-black min-h-screen flex flex-col gap-8 items-center justify-center">
      <div className="w-full max-w-md">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
        >
          <div className="text-white text-center p-4">
            <h1 className="text-3xl font-bold">
              Welcome to <span className="text-green-500">E-Voting</span>
            </h1>
            <p className="mt-4">Where democracy meets technology!</p>
            <p className="mt-2">
              Participate in elections from anywhere in Pakistan, with our
              secured blockchain technology.
            </p>
          </div>
          <div className="text-white text-center p-4">
            <h1 className="text-3xl font-bold">
              The Power of{" "}
              <span className="text-green-500">Blockchain Technology</span>
            </h1>
            <p className="mt-4">Where democracy meets technology!</p>
            <p className="mt-2">
              A decentralized system that records every value on a distributed
              ledger.
            </p>
          </div>
          <div className="text-white text-center p-4">
            <h1 className="text-3xl font-bold">
              Get Started and{" "}
              <span className="text-green-500">Start Voting Today</span>
            </h1>
            <p className="mt-4">Where democracy meets technology!</p>
            <p className="mt-2">
              Enter your details and verify yourself to start voting today!
            </p>
          </div>
        </Carousel>
      </div>
      <div className="flex flex-col gap-2">
        <EButton text="Get Started" onClick={handleGetStartedClick} />
        <p className="text-center text-white mt-4">
          Already registered?{" "}
          <a href="#" className="text-green-500">
            Login to vote
          </a>
        </p>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div
            ref={popupRef}
            className="bg-white rounded-lg shadow-lg p-4 max-w-sm w-full"
          >
            <div
              className="flex items-center justify-between py-2 cursor-pointer"
              onClick={handleLoginAsElectionCommission}
            >
              <span className="text-gray-800 flex gap-3">
                <img src={adminIcon} alt="Admin Icon" width={20} />
                Login as Election Commission {" ->"}
              </span>
            </div>
            <hr />
            <div
              className="flex items-center justify-between py-2 cursor-pointer"
              onClick={() => navigate("/welcome")}
            >
              <span className="text-gray-800 flex gap-3">
                <img src={voteIcon} alt="Vote Icon" width={20} />
                Login as Polling Staff {" ->"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
