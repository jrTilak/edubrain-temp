import userSquare2 from "@/assets/images/user-square2.svg";
import ClockIMg from "@/assets/images/clock.svg";
import rightArrow from "@/assets/icons/right-arrow.svg";
import leftArrow from "@/assets/icons/left-arrow.svg";
import play from "@/assets/icons/play.svg";
import { useState } from "react";
import OUR_COURSES from "@/assets/data/ourCourses";
import { Link } from "react-router-dom";
import { reOrderArray } from "@/utils/reorder";
import { AnimatePresence, motion } from "framer-motion";
const CourseSection = () => {
  const [activeCourse, setActiveCourse] = useState(0);
  const [isReadMoreActive, setIsReadMoreActive] = useState(false);
  const handleCourseChange = (direction: "next" | "prev") => {
    if (direction === "next") {
      setActiveCourse((prev) => {
        if (prev === OUR_COURSES.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    } else {
      setActiveCourse((prev) => {
        if (prev === 0) {
          return OUR_COURSES.length - 1;
        }
        return prev - 1;
      });
    }
  };

  return (
    <div className="flex flex-col-reverse xl:flex-row xl:justify-center xl:gap-28 xl:items-center w-full gap-8 mt-8">
      <div className="flex flex-col gap-4 sm:gap-6 xl:max-w-[600px]">
        <div className="flex flex-col">
          <motion.span
            layout
            className="text-blue text-base sm:text-xl xl:text-2xl"
          >
            {OUR_COURSES[activeCourse].category}
          </motion.span>
          <div className="h-[28.8px] sm:h-[38.8px] xl:h-[57px]">
            <AnimatePresence>
              <motion.h2
                initial={{ opacity: 0, y: 20, position: "absolute" }}
                animate={{ opacity: 1, y: 0, position: "relative" }}
                exit={{ opacity: 0, y: -20, position: "absolute" }}
                key={activeCourse}
                className="text-[24px] leading-[28.8px] font-bold text-[#F5F8FF] font-Montserrat sm:text-[32px] sm:leading-[38.4px] xl:text-[48px] xl:leading-[57.6px]"
              >
                {OUR_COURSES[activeCourse].title}
              </motion.h2>
            </AnimatePresence>
          </div>
        </div>
        {/* for smaller devices */}
        <motion.p className="text-[#7A7C80] text-xs leading-[18px] sm:text-sm sm:leading-[21px] xl:hidden">
          <span className="mr-2">
            {isReadMoreActive
              ? OUR_COURSES[activeCourse].desc
              : OUR_COURSES[activeCourse].desc.substring(0, 130) + "..."}
          </span>
          <button
            onClick={() => setIsReadMoreActive((prev) => !prev)}
            className="text-white"
          >
            {
              // if read more is active show "Read Less" else "Read More"
              isReadMoreActive ? "Read Less" : "Read More"
            }
          </button>
        </motion.p>
        {/* for larger devices */}
        <motion.p className="text-[#7A7C80] text-lg hidden xl:block">
          {OUR_COURSES[activeCourse].desc}
        </motion.p>
        <motion.div className="flex gap-2 sm:gap-3 items-end">
          <span className="text-white text-2xl sm:text-3xl xl:text-3xl font-semibold">
            ₹{OUR_COURSES[activeCourse].discountedPrice}
          </span>
          <span className="text-[#AEABB2] text-xs sm:text-base xl:text-lg line-through mb-1 sm:mb-0.5">
            ₹{OUR_COURSES[activeCourse].basePrice}
          </span>
          <span className="text-xs xl:text-lg sm:text-base text-blue mb-1 sm:mb-0.5">
            ({OUR_COURSES[activeCourse].discount}%)
          </span>
        </motion.div>
        <div className="flex gap-6">
          <div className="flex gap-2 items-center justify-center">
            <img
              src={userSquare2}
              className="w-6 sm:w-8 h-6 sm:h-8 mr-1 mb-1 sm:mb-1.5"
            />
            <span className="text-white text-base xs:text-lg sm:text-2xl font-medium">
              {OUR_COURSES[activeCourse].lecturesCount}
            </span>
            <span className="text-[#E0DCE5] text-sm xs:text-base sm:text-xl">
              Lectures
            </span>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <img
              src={ClockIMg}
              className="w-6 sm:w-8 h-6 sm:h-8 mr-1 mb-1 sm:mb-1.5"
            />
            <span className="text-white text-base xs:text-lg sm:text-2xl font-medium">
              {OUR_COURSES[activeCourse].duration}
            </span>
            <span className="text-[#E0DCE5] text-sm xs:text-base sm:text-xl">
              Time
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:max-w-[414px] mt-3">
          <Link
            to="#"
            className="text-center bg-dark font-Roboto rounded-lg px-6 py-3 text-white"
          >
            Let’s explore it!
          </Link>
          <Link
            to="#"
            className="text-center bg-blue font-Roboto rounded-lg px-6 py-3 text-white"
          >
            Enroll Now
          </Link>
          <Link
            to="#"
            className="col-span-2 bg-[#FF9300] text-center font-Roboto rounded-lg px-6 py-3 text-white"
          >
            Get more discount!
          </Link>
        </div>
      </div>
      <div className="flex flex-grow max-w-5xl flex-col items-end gap-4">
        {/* buttons */}
        <div className="gap-4 items-center mr-6 hidden xl:flex">
          <button onClick={() => handleCourseChange("prev")}>
            <img src={leftArrow} alt="" className="h-8 w-8 lg:h-12 lg:w-12" />
          </button>
          <button onClick={() => handleCourseChange("next")}>
            <img src={rightArrow} alt="" className="h-8 w-8 lg:h-12 lg:w-12" />
          </button>
        </div>
        {/* images */}
        <div className="relative w-full">
          {/* stacked images container */}
          <div className="h-[200px] sm:h-[400px] xl:w-[600px] w-full relative">
            {reOrderArray(OUR_COURSES, activeCourse).map((course, i) => (
              <AnimatePresence>
                <motion.img
                  layout
                  key={activeCourse + i}
                  initial={{
                    transform: "translate(50%, -50%)",
                    height: "calc(100% - " + (i + 2) * 40 + "px)",
                  }}
                  animate={{
                    transform: "translate(0, -50%)",
                    height: "calc(100% - " + i * 40 + "px)",
                  }}
                  exit={{
                    transform: "translate(50%, -50%)",
                    opacity: 0,
                    transition: { duration: 0.1 },
                    height: "calc(100% - " + (i + 2) * 40 + "px)",
                  }}
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover object-center rounded-xl absolute inset-y-1/2"
                  style={{
                    zIndex: OUR_COURSES.length - i + 1, // to show the active course image on top
                    left: `${i * 50}px`, // to show the stacked images
                    //scale was not working so used height to show the stacked images
                  }}
                />
              </AnimatePresence>
            ))}
          </div>
          <button className="absolute z-50 shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src={play} alt="play button" className="h-5 w-5" />
          </button>
          {/* // courses indicator line  */}
          <div className="flex relative w-full  bg-[#252526] h-1 mt-6 rounded-full">
            <AnimatePresence>
              <motion.div
                layout
                className="h-1 bg-[#246BFD] rounded-full absolute top-0 left-0"
                style={{
                  width: `${100 / OUR_COURSES.length}%`,
                  left: `${(100 / OUR_COURSES.length) * activeCourse}%`,
                }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseSection;
