//@ts-nocheck
import { useState } from "react";
import EnrolledCourseCard from "./EnrolledCourseCard";
import RecomendedCourse from "../RecomendedCourse/RecomendedCourse";

const EnrolledCourse = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="mb-16">
        <div className="">
          <h1 className="text-[24px] text-[#F9F5FF] font-semibold mb-4">
            Enrolled Courses
          </h1>
          <div className="bg-[#323133] w-full h-1"></div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleTabChange("tab1")}
                className={
                  activeTab === "tab1"
                    ? " rounded-lg h-9 py-2 px-5 border border-[#AEABB2] flex justify-center items-center text-[#F9F5FF]"
                    : "h-9 py-2 px-5 rounded-lg border border-[#252526] flex justify-center items-center text-[#F9F5FF]"
                }
              >
                All
              </button>

              <button
                onClick={() => handleTabChange("tab2")}
                className={
                  activeTab === "tab2"
                    ? " rounded-lg h-9 py-2 px-5 border border-[#AEABB2] flex justify-center items-center text-[#F9F5FF]"
                    : "h-9 py-2 px-5 rounded-lg border border-[#252526] flex justify-center items-center text-[#F9F5FF]"
                }
              >
                In progress
              </button>

              <button
                onClick={() => handleTabChange("tab3")}
                className={
                  activeTab === "tab3"
                    ? " rounded-lg h-9 py-2 px-5 border border-[#AEABB2] flex justify-center items-center text-[#F9F5FF]"
                    : "h-9 py-2 px-5 rounded-lg border border-[#252526] flex justify-center items-center text-[#F9F5FF]"
                }
              >
                Yet to start
              </button>

              <button
                onClick={() => handleTabChange("tab4")}
                className={
                  activeTab === "tab4"
                    ? " rounded-lg h-9 py-2 px-5 border border-[#AEABB2] flex justify-center items-center text-[#F9F5FF]"
                    : "h-9 py-2 px-5 rounded-lg border border-[#252526] flex justify-center items-center text-[#F9F5FF]"
                }
              >
                Completed
              </button>
            </div>
            <div className="flex items-center gap-6 text-[#F9F5FF] text-[24px]">
              <svg
                className="cursor-pointer hover:bg-[#246BFD] rounded transition duration-300"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15 19.9201L8.48003 13.4001C7.71003 12.6301 7.71003 11.3701 8.48003 10.6001L15 4.08014"
                  stroke="#F9F5FF"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                className="cursor-pointer hover:bg-[#246BFD] rounded transition duration-300"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8.90997 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.90997 4.08014"
                  stroke="#F9F5FF"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="mt-8">
            <div>
              {activeTab === "tab1" && (
                <div>
                  <EnrolledCourseCard></EnrolledCourseCard>
                </div>
              )}

              {activeTab === "tab2" && (
                <div>
                  <h1 className="text-white">This is tab2</h1>
                </div>
              )}

              {activeTab === "tab3" && (
                <div>
                  <h1 className="text-white">This is tab3</h1>
                </div>
              )}

              {activeTab === "tab4" && (
                <div>
                  <h1 className="text-white">This is tab4</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <RecomendedCourse></RecomendedCourse>
    </div>
  );
};

export default EnrolledCourse;
