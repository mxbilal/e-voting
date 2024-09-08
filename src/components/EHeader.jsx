import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

const EHeader = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user data from localStorage
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  const handleLogout = () => {
    // Clear localStorage and redirect to login page or home page
    localStorage.removeItem("user");
    window.location.replace("/");
  };

  return (
    <div className="flex justify-between items-center p-3 bg-gray-800">
      {/* Logo */}
      <div
        className="cursor-pointer"
        onClick={() => window.location.replace("/")}
      >
        <img src={logo} alt="Logo" width={80} />
      </div>

      {/* User Info and Logout Button */}
      <div className="flex items-center space-x-4 text-white">
        {user ? (
          <>
            <div className="text-right">
              <p className="font-bold">{user.full_name}</p>
              <p className="text-sm text-gray-400">{user.role}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default EHeader;
