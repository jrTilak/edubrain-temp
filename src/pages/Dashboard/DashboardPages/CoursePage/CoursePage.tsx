//@ts-nocheck
import { useState } from "react";
import CarouselBtn from "../../ReusableComponents/CourseCardCaurosel/CarouselBtn";
import CourseCard from "../../ReusableComponents/CourseCard";


const CoursePage = ({courseDetails, courseHeading, tabs, btnpressprev, btnpressnext, currentSlider}) => {
    const [activeTab, setActiveTab] = useState(tabs[0].link);

    const handleTabChange = (tab) => {
        setActiveTab(tab)
    }
    return (
        <div className="">
        <div className="mb-16">
            <div className="">
            <h1 className="text-[24px] text-[#F9F5FF] font-semibold mb-4">{courseHeading}</h1>
            <div className="bg-[#323133] w-full h-1"></div>
            </div>


            <div className="mt-6 ">
            <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <button onClick={() => handleTabChange("tab1")} className={activeTab === "tab1" ? ' rounded-lg h-9 py-2 px-5 border border-[#AEABB2] flex justify-center items-center text-[#F9F5FF]' : "h-9 py-2 px-5 rounded-lg border border-[#252526] flex justify-center items-center text-[#F9F5FF]"}>All</button>

                <button onClick={() => handleTabChange("tab2")} className={activeTab === "tab2" ? ' rounded-lg h-9 py-2 px-5 border border-[#AEABB2] flex justify-center items-center text-[#F9F5FF]' : "h-9 py-2 px-5 rounded-lg border border-[#252526] flex justify-center items-center text-[#F9F5FF]"}>In progress</button>

                <button onClick={() => handleTabChange("tab3")} className={activeTab === "tab3" ? ' rounded-lg h-9 py-2 px-5 border border-[#AEABB2] flex justify-center items-center text-[#F9F5FF]' : "h-9 py-2 px-5 rounded-lg border border-[#252526] flex justify-center items-center text-[#F9F5FF]"}>Yet to start</button>

                <button onClick={() => handleTabChange("tab4")} className={activeTab === "tab4" ? ' rounded-lg h-9 py-2 px-5 border border-[#AEABB2] flex justify-center items-center text-[#F9F5FF]' : "h-9 py-2 px-5 rounded-lg border border-[#252526] flex justify-center items-center text-[#F9F5FF]"}>Completed</button>
            </div>

            <CarouselBtn slideName={"enrolledCourse"} btnpressprev={btnpressprev} btnpressnext={btnpressnext}/>
            </div>

            <div className="mt-8">
                <div className="">
                    {
                        activeTab === "tab1" && (
                            <div className="min-h-[380px]">
                                <CourseCard currentSlider={currentSlider} courseDetails={courseDetails}></CourseCard>

                                
                            </div>
                        )
                    }

                    <div className="">
                    {
                        activeTab === "tab2" && (
                            <div className="flex justify-center items-center min-h-[380px]">
                                <h1 className="text-white">This is tab2</h1>
                            </div>
                        )
                    }
                    </div>

                    {
                        activeTab === "tab3" && (
                            <div className="flex justify-center items-center min-h-[380px]">
                                <h1 className="text-white">This is tab3</h1>
                            </div>
                        )
                    }

                    {
                        activeTab === "tab4" && (
                            <div className="flex justify-center items-center min-h-[380px]">
                                <h1 className="text-white">This is tab4</h1>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>

        {/* <div>
            {
                tabs?.map((tab, index) => 
                <button key={index} onClick={() => handleTabChange("tab1")} className={activeTab === "tab1" ? ' rounded-lg h-9 py-2 px-5 border border-[#AEABB2] flex justify-center items-center text-[#F9F5FF]' : "h-9 py-2 px-5 rounded-lg border border-[#252526] flex justify-center items-center text-[#F9F5FF]"}>{tab?.tabName}</button>
                )
            }


                <div className="">
                    {
                        activeTab === "tab1" && (
                            <div className="min-h-[380px]">
                                <CourseCard courseDetails={courseDetails}></CourseCard>
                            </div>
                        )
                    }
                    {
                        activeTab === "tab2" && (
                            <div className="min-h-[380px]">
                                hi
                            </div>
                        )
                    }
                </div>
        </div> */}

{/* <div className="tabs">
                {tabs?.map((tab, index) => (
                    <div key={index} className="tab">
                        <a onClick={() => handleTabChange(tab.link)} href={`#${tab.link}`}>{tab.tabName}</a>
                    </div>
                ))}
            </div> */}



            
        </div>

        {/* <RecomendedCourse></RecomendedCourse> */}


        
    </div>
    );
};

export default CoursePage;