//@ts-nocheck
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiNoteBlankLight } from "react-icons/pi";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import { TbLogout2 } from "react-icons/tb";
import Togglebtn from "./Togglebtn";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Dashboard left side bar */}
      <div className="bg-[#0C0C0D] w-[290px] p-5 h-screen sticky top-0">
        {/* Logo */}
        <div className="flex justify-center">
          <img className="w-16 mb-16" src={logo} alt="" />
        </div>

        {/* Navlinks */}
        <div className="flex flex-col gap-4">
          <NavLink
            to={"/dashboard/myCourse"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#246BFD] h-[45px] rounded-xl bg-[#246BFD1A] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal"
                : " text-[#AEABB2] h-[45px] rounded-xl bg-[#242224] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal"
            }
          >
            <MdOutlineSpaceDashboard /> My Course
          </NavLink>

          <NavLink
            to={"/dashboard/myAssignment"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#246BFD] h-[45px] rounded-xl bg-[#246BFD1A] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal"
                : " text-[#AEABB2] h-[45px] rounded-xl bg-[#242224] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal"
            }
          >
            <PiNoteBlankLight /> My Assignment
          </NavLink>

          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#246BFD] h-[45px] rounded-xl bg-[#246BFD1A] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal"
                : " text-[#AEABB2] h-[45px] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal"
            }
          >
            <IoLogoGameControllerB /> Games
          </NavLink>

          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#246BFD] h-[45px] rounded-xl bg-[#246BFD1A] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal"
                : " text-[#AEABB2] h-[45px] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal"
            }
          >
            <IoCheckmarkDoneCircle /> Refer & Earn
          </NavLink>

          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#246BFD] h-[45px] rounded-xl bg-[#246BFD1A] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal"
                : " text-[#AEABB2] h-[45px] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal"
            }
          >
            <GrCertificate /> Certificate
          </NavLink>
        </div>

        <div className="flex flex-col gap-6 mt-5">
          {/* Light & Dark mode button */}
          <Togglebtn></Togglebtn>

          <button
            to={"/"}
            className="text-[#AEABB2] h-[45px] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal transform transition-transform duration-300 hover:-translate-y-0.5"
          >
            <TbLogout2 /> Logout
          </button>
        </div>
      </div>

      {/* All navlinks */}
      <div className="bg-[#141414] w-full px-10 py-5">
        <DashboardHeader></DashboardHeader>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
