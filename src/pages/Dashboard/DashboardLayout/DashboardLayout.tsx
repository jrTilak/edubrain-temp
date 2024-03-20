//@ts-nocheck

import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Sidebar from "./Sidebar";

const DashboardLayout = ({
  children,
}) => {
  return (
    <div className="flex">

      {/* Dashboard left sidebar */}
      <Sidebar/>

      {/* All Pages */}
      <div className="bg-[#141414] w-full px-7 md:px-10 py-5 overflow-hidden">
        <DashboardHeader></DashboardHeader>
      {
        children
      }
      </div>


    </div>
  );
};

export default DashboardLayout;
