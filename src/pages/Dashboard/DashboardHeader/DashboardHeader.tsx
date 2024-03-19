//@ts-nocheck
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import { FiLogOut } from "react-icons/fi";

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
      const handleOutsideClick = (event) => {
        if (isOpen && !event.target.closest(".dropdown")) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleOutsideClick);
  
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [isOpen]);

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center ">
        <h1 className="text-[32px] text-[#F9F5FF] font-semibold font-roboto hidden md:flex">Hello, Rahul</h1>
        <div className="flex md:hidden">
          <DashboardSidebar/>
        </div>


{/* Right side search bar, notification, user image */}
          <div className="flex items-center gap-[22px]">

            {/* Search bar */}
          <div className="relative w-[320px] hidden md:block">
          <input type="text" className="text-white bg-[#141414] border border-[#4B494D] rounded-xl px-4 py-3 w-[320px] outline-none focus:border-[#246BFD] hover:border-blue-800 transition duration-300" placeholder="Search" />
          <CiSearch className="text-[#E0DCE5] w-6 h-6 absolute right-2 bottom-3 cursor-pointer"/>
          </div>

          {/* Notification */}
          <IoNotificationsOutline className="text-[#E0DCE5] w-8 h-8 cursor-pointer"/>


    <div className="relative dropdown">
      <div onClick={toggleDropdown} className="w-12 rounded-full cursor-pointer">
          <img className="rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" />
        </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 z-10 origin-top-right bg-[#141414] rounded-lg shadow-lg border border-[#246BFD] p-2">
          <div className="py-1">
            <p
              className="text-[#F9F5FF] block px-2 py-2 text-sm hover:bg-[#246BFD] transition duration-300 cursor-pointer rounded-lg"
            >
              Home
            </p>
            <p
              className="text-[#F9F5FF] block px-2 py-2 text-sm hover:bg-[#246BFD] transition duration-300 cursor-pointer rounded-lg"
            >
              Setting
            </p>
            <p
              className="text-[#F9F5FF] block px-2 py-2 text-sm hover:bg-[#246BFD] transition duration-300 cursor-pointer rounded-lg"
            >
              All Course
            </p>
            <p
              className="text-[#c5d9ff] px-2 py-2 text-sm hover:bg-[#246BFD] hover:text-white transition duration-300 cursor-pointer rounded-lg flex items-center gap-2"
            >
              Logout
              <FiLogOut/>
            </p>
          </div>
        </div>
      )}
    </div>





          </div>

      </div>
    </div>
  );
};

export default DashboardHeader;
