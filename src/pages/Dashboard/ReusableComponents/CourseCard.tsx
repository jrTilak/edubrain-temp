//@ts-nocheck
import calender from "../../../assets/calendar.svg";
import timer from "../../../assets/timer-start.png";
import { FaPlay } from "react-icons/fa";
import clock from "../../../../src/assets/clock.png";
import userIcon from "../../../../src/assets/user-square.png";
import "./CourseCard.css";

const CourseCard = ({ courseDetails, currentSlider }) => {
  // const [currentSlider, setCurrentSlider] = useState(0);
  // const isSmallScreen = window.innerWidth <= 768;
  // const isMediumScreen = window.innerWidth >= 1064;

  // const prevSlider = () =>
  //   setCurrentSlider((currentSlider) =>
  //     currentSlider === 0 ? 0 : currentSlider - 1
  //   );

  // const nextSlider = () =>
  //   setCurrentSlider((currentSlider) =>
  //     currentSlider ===
  //     courseDetails.length - (isSmallScreen ? 1 : isMediumScreen ? 3 : 3)
  //       ? 0
  //       : currentSlider + 1
  //   );


  return (
    <div className="overflow-hidden">

      {/* <div className="">
        <CarouselBtn
          btnpressprev={prevSlider}
          btnpressnext={nextSlider}
        ></CarouselBtn>
      </div> */}

      <div className="flex justify-between items-center">
        <div
          className="ease-linear duration-300 flex gap-6"
          style={{ transform: `translateX(-${currentSlider * 342}px)` }}
        >
          {courseDetails?.map((details, index) => (
            <div
              key={index}
              className="min-w-[318px] border border-[#4B494D] rounded-2xl"
            >
              <img className="rounded-t-2xl mb-2 " src={details?.img} alt="" />

              <div className="px-4 pb-2">
                <h1 className="text-lg text-[#F9F5FF] font-bold font-roboto mb-[3px]">
                  {details?.courseName && details?.courseName}
                </h1>

                {details?.lecture ? (
                  <div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 mb-4">
                        <img src={userIcon} alt="" />
                        <p className="text-base text-[#C7C4CC] font-light font-roboto">
                          {details?.lecture}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <img src={clock} alt="" />
                        <p className="text-base text-[#C7C4CC] font-light font-roboto">
                          {details.duration}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center w-full">
                      <button className="text-[#F9F5FF] text-base px-4 py-3 bg-[#1A1A1F] rounded-xl w-1/2">
                        View Detail
                      </button>

                      <button className="text-[#F9F5FF] text-base px-4 py-3 bg-[#246BFD] hover:bg-blue-700 transition duration-300 rounded-xl w-1/2">
                        Enroll Now!
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    {details?.startDate ? (
                      <div className="flex justify-between items-center mb-5">
                        <div className="flex items-center gap-2">
                          <img className="w-6" src={calender} alt="" />
                          <p className="text-base text-[#C7C4CC] font-light font-roboto">
                            {details?.startDate}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <img src={clock} alt="" />
                          <p className="text-base text-[#C7C4CC] font-light font-roboto">
                            {details.startTime}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <img src={calender} alt="" />
                          <p className="text-[12px] text-[#F9F5FF] font-normal font-roboto">
                            {details?.enrollDate}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <img src={timer} alt="" />
                          <p className="text-base text-[#F9F5FF] font-normal font-roboto">
                            {details.time}
                          </p>
                        </div>

                        <div className="flex items-center justify-between gap-2 mb-4">
                          <progress
                            className="progress progress-primary w-56"
                            value={details.completedModule}
                            max="100"
                          ></progress>
                          <p className="text-base text-[#F9F5FF] font-normal font-roboto">
                            {details.completedModule}%
                          </p>
                        </div>
                      </div>
                    )}

                    {details?.startIn ? (
                      <div className="flex justify-between items-center">
                        <div>
                          <h1 className="text-base text-[#AEABB2] font-normal font-roboto mb-[3px]">
                            It will start in
                          </h1>
                          <p className="text-[18px] text-[#F9F5FF] font-bold font-roboto">
                            {details?.startIn}
                          </p>
                        </div>

                        <button className="text-[#F9F5FF] text-base px-9 py-3 bg-[#246BFD] hover:bg-blue-700 transition duration-300 rounded-xl">
                          View Details
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center">
                        <div>
                          <h1 className="text-base text-[#F9F5FF] font-bold font-roboto mb-[3px]">
                            <span className="text-xs sm:text-sm md:text-base">
                              {details.completedModule}/{details.module}
                            </span>
                          </h1>
                          <p className="text-[12px] text-[#F9F5FF] font-normal font-roboto">
                            Completed lectures
                          </p>
                        </div>
                        <button className="flex gap-2 items-center justify-center text-[#F9F5FF] text-base px-9 py-3 bg-[#246BFD] hover:bg-blue-700 transition duration-300 rounded-xl">
                          Resume
                          <FaPlay />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
