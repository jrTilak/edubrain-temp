//@ts-nocheck
import { useState } from "react";
import CarouselBtn from "../../ReusableComponents/CourseCardCaurosel/CarouselBtn";
import CourseCard from "../../ReusableComponents/CourseCard";


const CoursePage = ({courseDetails, courseHeading, tabs}) => {
    const [activeTab, setActiveTab] = useState(tabs[0].link);

    const handleTabChange = (tab) => {
        setActiveTab(tab)
    }

    const [currentSlider, setCurrentSlider] = useState(0);

  const isSmallScreen = window.innerWidth <= 768;
  const isMediumScreen = window.innerWidth >= 1064;

  const prevSlider = () => {
      setCurrentSlider((currentSlider) => currentSlider === 0 ? 0 : currentSlider - 1 )
      
  };

  const nextSlider = () => {
    setCurrentSlider((currentSlider) =>
    currentSlider ===
    courseDetails.length - (isSmallScreen ? 1 : isMediumScreen ? 3 : 3)
      ? 0
      : currentSlider + 1 )
  };

    return (
        <div className="">
        <div className="mt-16">

            {/* Heading and horizontal line */}
            <div className="">
            <h1 className="text-[24px] text-[#F9F5FF] font-semibold mb-4">{courseHeading}</h1>
            <div className="bg-[#323133] w-full h-1"></div>
            </div>


            <div className="mt-6 ">

                {/* Tabs and carousel btn */}
            <div className="flex justify-between items-center w-full gap-[10px]">

                {/* Tabs button here */}
            {/* <div className="flex items-center gap-4 overflow-x-scroll w-4/5">
                <button onClick={() => handleTabChange("tab1")} className={activeTab === "tab1" ? ' rounded-lg h-9 py-2 px-5 border border-[#AEABB2] flex justify-center items-center text-neutral-10 flex-shrink-0' : "h-9 py-2 px-5 rounded-lg border border-[#252526] flex justify-center items-center text-neutral-10 flex-shrink-0"}>All</button>

                <button onClick={() => handleTabChange("tab2")} className={activeTab === "tab2" ? ' rounded-lg h-9 py-2 px-5 border border-[#AEABB2] flex justify-center items-center text-neutral-10 flex-shrink-0' : "h-9 py-2 px-5 rounded-lg border border-[#252526] flex justify-center items-center text-neutral-10 flex-shrink-0"}>In progress</button>

                <button onClick={() => handleTabChange("tab3")} className={activeTab === "tab3" ? ' rounded-lg h-9 py-2 px-5 border border-[#AEABB2] flex justify-center items-center text-neutral-10 flex-shrink-0' : "h-9 py-2 px-5 rounded-lg border border-[#252526] flex justify-center items-center text-neutral-10 flex-shrink-0"}>Yet to start</button>

                <button onClick={() => handleTabChange("tab4")} className={activeTab === "tab4" ? ' rounded-lg h-9 py-2 px-5 border border-[#AEABB2] flex justify-center items-center text-neutral-10 flex-shrink-0' : "h-9 py-2 px-5 rounded-lg border border-[#252526] flex justify-center items-center text-neutral-10 flex-shrink-0"}>Completed</button>
            </div> */}

{tabs && (
              <div className="flex items-center gap-4 overflow-x-scroll w-4/5">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabChange(tab.link)}
                    className={
                      activeTab === tab.link
                        ? ' rounded-lg h-9 py-2 px-5 border border-[#AEABB2] flex justify-center items-center text-neutral-10 flex-shrink-0'
                        : 'h-9 py-2 px-5 rounded-lg border border-[#252526] flex justify-center items-center text-neutral-10 flex-shrink-0'
                    }
                  >
                    {tab.tabName}
                  </button>
                ))}
              </div>
            )}


            {/* Carousel Button */}
            <div className="w-[20%] flex justify-end">
            <CarouselBtn slideName={"enrolledCourse"} btnpressprev={prevSlider} btnpressnext={nextSlider}/>
            </div>
            </div>

            {/* Tabs content Here */}
            <div className="mt-8">
                <div className="">
                    {
                        activeTab === "tab1" && (
                            <div className="flex items-center min-h-[300px]">
                                <div className="overflow-hidden">
                    <div className="flex justify-between items-center">
                      <div
                        className="ease-linear duration-300 flex gap-6"
                        style={{
                          transform: `translateX(-${currentSlider * 342}px)`,
                        }}
                      >
                        {courseDetails &&
                          courseDetails.map((cd, ind) => (
                            <CourseCard key={ind} details={cd} />
                          ))}
                      </div>
                    </div>
                  </div>
                            </div>
                        )
                    }

                    <div className="">
                    {
                        activeTab === "tab2" && (
                            <div className="flex justify-center items-center min-h-[300px]">
                                <h1 className="text-white">This is tab2</h1>
                            </div>
                        )
                    }
                    </div>

                    {
                        activeTab === "tab3" && (
                            <div className="flex justify-center items-center min-h-[300px]">
                                <h1 className="text-white">This is tab3</h1>
                            </div>
                        )
                    }

                    {
                        activeTab === "tab4" && (
                            <div className="flex justify-center items-center min-h-[300px]">
                                <h1 className="text-white">This is tab4</h1>
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

export default CoursePage;