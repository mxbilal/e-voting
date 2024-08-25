import React from "react";
import { Outlet } from "react-router-dom";
import EHeader from "../../components/EHeader";

const LayoutPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <EHeader />
      <Outlet />
    </div>
  );
};
export default LayoutPage;
