//@ts-nocheck
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center ">
        <h1 className="text-[32px] text-[#F9F5FF] font-semibold font-roboto">
          Hello, Rahul
        </h1>

        {/* Right side search bar, notification, user image */}
        <div className="flex items-center gap-[22px]">
          {/* Search bar */}
          <div className="relative w-[320px]">
            <input
              type="text"
              className="text-white bg-[#141414] border border-[#4B494D] rounded-xl px-4 py-3 w-[320px] outline-none focus:border-[#246BFD] hover:border-blue-800 transition duration-300"
              placeholder="Search"
            />
            <CiSearch className="text-[#E0DCE5] w-6 h-6 absolute right-2 bottom-3 cursor-pointer" />
          </div>

          {/* Notification */}
          <IoNotificationsOutline className="text-[#E0DCE5] w-8 h-8 cursor-pointer" />

          {/* User picture */}
          <div className="relative">
            <div className="avatar" onClick={toggleDropdown}>
              <div className="w-12 rounded-full cursor-pointer">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="avatar"
                />
              </div>
            </div>

            {isOpen && (
              <div className="absolute right-0 mt-2 bg-[#242224] text-[#246BFD] rounded shadow-md">
                <ul className="py-2 px-4 flex flex-col gap-3 font-roboto">
                  <Link>Hello</Link>
                  <Link>Hello1</Link>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
