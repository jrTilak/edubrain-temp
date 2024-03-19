//@ts-nocheck
import { useEffect, useState } from "react";
// import WorkshopAllCard from "./WorkshopAllCard";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import CourseCard from "../../ReusableComponents/CourseCard";
import CarouselBtn from "../../ReusableComponents/CourseCardCaurosel/CarouselBtn";
// import { motion } from "framer-motion"


const Workshop = ({btnpressprev, btnpressnext, currentSlider}) => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabChange = (tab) => {
        setActiveTab(tab)
    }



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

    const courseDetails = [
        { 
         "img" : "https://i.ibb.co/sH2NrNp/image-112.png",
         "courseName" : "The Basics of UI/UX design principals",
         "startDate" : "12 May, 2024",
         "startTime" : "12 pm to 2 pm",
         "startIn" : "02hr :01min"
     },
 
        { 
         "img" : "https://i.ibb.co/S08f1yk/image-113.png",
         "courseName" : "The Basics of UI/UX design principals",
         "startDate" : "12 May, 2024",
         "startTime" : "12 pm to 2 pm",
         "startIn" : "02hr :01min"
     },
 
        { 
         "img" : "https://i.ibb.co/BGGkVfx/image-114.png",
         "courseName" : "The Basics of UI/UX design principals",
         "startDate" : "12 May, 2024",
         "startTime" : "12 pm to 2 pm",
         "startIn" : "02hr :01min"
     },
 
        { 
         "img" : "https://i.ibb.co/BGGkVfx/image-114.png",
         "courseName" : "The Basics of UI/UX design principals",
         "startDate" : "12 May, 2024",
         "startTime" : "12 pm to 2 pm",
         "startIn" : "02hr :01min"
     },
     ]

    return (
        <div>
            <div className="my-16">

                <div className="">
                <div className="flex justify-between items-center mb-4">
                <h1 className="text-[24px] text-[#F9F5FF] font-semibold">Workshop</h1>
                <Link className="text-base text-[#F9F5FF] font-normal">Seel All</Link>
                </div>
                <div className="bg-[#323133] w-full h-1"></div>
                </div>


                <div className="mt-6">
                <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <button onClick={() => handleTabChange("tab1")} className={activeTab === "tab1" ? ' rounded-lg h-9 py-2 px-5 border border-[#AEABB2] flex justify-center items-center text-[#F9F5FF]' : "h-9 py-2 px-5 rounded-lg border border-[#252526] flex justify-center items-center text-[#F9F5FF]"}>All</button>

                    <button onClick={() => handleTabChange("tab2")} className={activeTab === "tab2" ? ' rounded-lg h-9 py-2 px-5 border border-[#AEABB2] flex justify-center items-center text-[#F9F5FF]' : "h-9 py-2 px-5 rounded-lg border border-[#252526] flex justify-center items-center text-[#F9F5FF]"}>Upcoming workshop</button>

                    <button onClick={() => handleTabChange("tab3")} className={activeTab === "tab3" ? ' rounded-lg h-9 py-2 px-5 border border-[#AEABB2] flex justify-center items-center text-[#F9F5FF]' : "h-9 py-2 px-5 rounded-lg border border-[#252526] flex justify-center items-center text-[#F9F5FF]"}>Attended</button>
                </div>

                <div className="flex items-center gap-8">
                <div className="relative inline-block text-left">

                {/* <div className="relative inline-block text-left">
                            <select
                                className="block appearance-none bg-transparent bg-[#141414] py-2 px-5 rounded-lg border border-[#252526] text-[#F9F5FF] cursor-pointer "
                            >
                                <option value="Hello">UI/UX design</option>
                                <option value="Hello">Mern Stack</option>
                                <option value="Hello">Data Science</option>
                            </select>
                           
                            <div className="absolute inset-y-0 right-0 flex items-center px-3 text-[#F9F5FF] pointer-events-none">
                                <IoIosArrowDown />
                            </div>
                        </div> */}

<div className="relative dropdown">
      <button
        onClick={toggleDropdown}
        className="bg-transparent bg-[#141414] py-2 px-5 rounded-lg border border-[#252526] text-[#F9F5FF] cursor-pointer flex items-center gap-1"
      >
        Select Course
        <IoIosArrowDown/>
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full z-10 origin-top-right bg-[#141414] rounded-lg shadow-lg border border-[#246BFD] p-2">
          <div className="py-1">
            <p
              className="text-[#F9F5FF] block px-2 py-2 text-sm hover:bg-[#246BFD] transition duration-300 cursor-pointer rounded-lg"
            >
              UI/UX design
            </p>
            <p
              className="text-[#F9F5FF] block px-2 py-2 text-sm hover:bg-[#246BFD] transition duration-300 cursor-pointer rounded-lg"
            >
              Mern Stack
            </p>
            <p
              className="text-[#F9F5FF] block px-2 py-2 text-sm hover:bg-[#246BFD] transition duration-300 cursor-pointer rounded-lg"
            >
              Data Science
            </p>
          </div>
        </div>
      )}
    </div>


        </div>

        <CarouselBtn slideName={"workshop"} btnpressprev={btnpressprev} btnpressnext={btnpressnext}/>


                </div>
                </div>

                <div className="mt-8">
                    <div>
                        {
                            activeTab === "tab1" && (
                                <div className="flex min-h-[380px] justify-center items-center">
                                    <CourseCard currentSlider={currentSlider} courseDetails={courseDetails}></CourseCard>
                                    {/* <WorkshopAllCard></WorkshopAllCard> */}
                                </div>
                            )
                        }

                        {
                            activeTab === "tab2" && (
                                <div className="min-h-[380px] flex justify-center items-center">
                                    <h1 className="text-white">This is tab2</h1>
                                </div>
                            )
                        }

                        {
                            activeTab === "tab3" && (
                                <div className="min-h-[380px] flex justify-center items-center">
                                    <h1 className="text-white">This is tab3</h1>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>



                
            </div>


            
        </div>
    );
};

export default Workshop;