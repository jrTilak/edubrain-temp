//@ts-nocheck
import { Outlet } from "react-router-dom";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">

      {/* Dashboard left sidebar */}
      <Sidebar/>

      {/* All Pages */}
      <div className="bg-[#141414] w-full px-7 md:px-10 py-5 overflow-hidden">
        <DashboardHeader></DashboardHeader>
      <Outlet></Outlet>
      </div>


    </div>
  );
};

export default DashboardLayout;
