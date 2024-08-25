import React, { useEffect, useRef, useState } from "react";
import WelcomeImage from "../../assets/welcome.svg";
import adminIcon from "../../assets/administrator.svg";
import voteIcon from "../../assets/vote.svg";
import EButton from "../../components/EButton";
import { useNavigate } from "react-router-dom";

const WelcomeBack = () => {
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

  const handleClick = (id) => {
    switch (id) {
      case 1:
        navigate("/login/presiding-officer");
        break;
      case 2:
        navigate("/login/assistant-presiding-officer");
        break;
      case 3:
        navigate("/login/poling-agent");
        break;
      default:
        console.log("default");
    }
  };
  return (
    <div className=" text-white flex flex-col items-center justify-center p-5">
      <div className="bg-green-600 w-full text-center p-5 rounded-lg mb-10">
        <h1 className="text-4xl font-bold">Welcome Back!</h1>
        <p className="text-lg mt-2">Polling Station 101</p>
      </div>
      <div className="mb-10">
        <img src={WelcomeImage} alt="Welcome" className="w-60 h-auto mx-auto" />
      </div>

      <EButton text="Select Your Role" onClick={handleGetStartedClick} />
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div
            ref={popupRef}
            className="bg-white rounded-lg shadow-lg p-4 max-w-sm w-full"
          >
            <div
              className="flex items-center justify-between py-2 cursor-pointer"
              onClick={() => handleClick(1)}
            >
              <span className="text-gray-800 flex gap-3">
                <img src={adminIcon} alt="Admin Icon" width={20} />
                Presiding Officer {" ->"}
              </span>
            </div>
            <hr />
            <div
              className="flex items-center justify-between py-2 cursor-pointer"
              onClick={() => handleClick(2)}
            >
              <span className="text-gray-800 flex gap-3">
                <img src={voteIcon} alt="Admin Icon" width={20} />
                Assistant Presiding Officer {" ->"}
              </span>
            </div>
            <hr />
            <div
              className="flex items-center justify-between py-2 cursor-pointer"
              onClick={() => handleClick(3)}
            >
              <span className="text-gray-800 flex gap-3">
                <img src={voteIcon} alt="Admin Icon" width={20} />
                Polling Agents {" ->"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomeBack;
