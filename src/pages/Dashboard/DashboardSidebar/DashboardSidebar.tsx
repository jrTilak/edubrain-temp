//@ts-nocheck
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiNoteBlankLight } from "react-icons/pi";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import { TbLogout2 } from "react-icons/tb";
import Togglebtn from "../DashboardLayout/Togglebtn";

const DashboardSidebar = () => {
  return (
    <div className="z-10">
      <div className="drawer">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button"
          >
            <MdMenu className="text-[#F9F5FF] cursor-pointer text-3xl"/>
          </label>
          
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

            {/* Sidebar content here */}
            <div className="menu bg-[#0C0C0D] w-[270px] p-5 h-full">
        {/* Logo */}
        <div className="flex justify-center">
        <img className="w-16 mb-16" src={logo} alt="" />
        </div>

        {/* Navlinks */}
        <div className="flex flex-col justify-center gap-4">
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
            <MdOutlineSpaceDashboard/> My Course
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
            <PiNoteBlankLight/> My Assignment
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
            <IoLogoGameControllerB/> Games
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
            <IoCheckmarkDoneCircle/> Refer & Earn
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
            <GrCertificate/> Certificate
          </NavLink>

         
        </div>


        <div className="flex flex-col gap-6 mt-5">
          {/* Light & Dark mode button */}
        <Togglebtn></Togglebtn>

        <button
            to={"/"}
            className="text-[#AEABB2] h-[45px] p-3 flex items-center gap-3 text-[16px] font-roboto font-normal transform transition-transform duration-300 hover:-translate-y-0.5"
            
          >
            <TbLogout2/> Logout
          </button>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
