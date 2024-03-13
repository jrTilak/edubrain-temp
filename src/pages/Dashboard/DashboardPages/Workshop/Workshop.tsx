import { useState } from "react";
import WorkshopAllCard from "./WorkshopAllCard";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
// import { motion } from "framer-motion"


const Workshop = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabChange = (tab) => {
        setActiveTab(tab)
    }
    // const variants = {
    //     visible: { opacity: 1 },
    //     hidden: { opacity: 0 },
    //   }

    //   const list = {
    //     visible: { opacity: 1 },
    //     hidden: { opacity: 0 },
    //   }
      
    //   const item = {
    //     visible: { opacity: 1, x: 0 },
    //     hidden: { opacity: 0, x: -100 },
    //   }

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
          <select
            className="appearance-none bg-[#141414]  py-2 px-5 rounded-lg border border-[#252526] text-[#F9F5FF] cursor-pointer"
          >
              <option value="Hello">
              UI/UX design
              </option>
              <option value="Hello">
                Mern Stack
              </option>
              <option value="Hello">
                Data Science
              </option>
          </select>


{/* <motion.div variants={variants} initial="hidden" animate="visible">
  <motion.ul initial="hidden" animate="visible" variants={list}>
    <motion.li variants={item}>Item 1</motion.li>
    <motion.li variants={item}>Item 2</motion.li>
    <motion.li variants={item}>Item 3</motion.li>
  </motion.ul>
</motion.div> */}




          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center text-gray-700">
            <IoIosArrowDown className="text-[#F9F5FF]"></IoIosArrowDown>
          </div>
        </div>
                <div className="flex items-center gap-6 text-[#F9F5FF] text-[24px]">
                <svg className="cursor-pointer hover:bg-[#246BFD] rounded transition duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M15 19.9201L8.48003 13.4001C7.71003 12.6301 7.71003 11.3701 8.48003 10.6001L15 4.08014" stroke="#F9F5FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                    <svg className="cursor-pointer hover:bg-[#246BFD] rounded transition duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M8.90997 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.90997 4.08014" stroke="#F9F5FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                </div>
                </div>
                </div>

                <div className="mt-8">
                    <div>
                        {
                            activeTab === "tab1" && (
                                <div>
                                    <WorkshopAllCard></WorkshopAllCard>
                                </div>
                            )
                        }

                        {
                            activeTab === "tab2" && (
                                <div>
                                    <h1 className="text-white">This is tab2</h1>
                                </div>
                            )
                        }

                        {
                            activeTab === "tab3" && (
                                <div>
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