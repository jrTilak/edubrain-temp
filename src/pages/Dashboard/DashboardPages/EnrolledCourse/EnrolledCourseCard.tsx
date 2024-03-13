//@ts-nocheck
// import image from "../../../../assets/image 37.png"
import calender from "../../../../assets/calendar.png";
import timer from "../../../../assets/timer-start.png";
import { FaPlay } from "react-icons/fa";

const EnrolledCourseCard = () => {
  const courseDetails = [
    {
      img: "https://i.ibb.co/dcQynTD/ui-ux-design.png",
      courseName: "UI/UX design",
      enrollDate: "Enrolled on 12 may, 2023",
      time: "Last Read: Introduction of UI/UX",
      module: "154",
      completedModule: "12",
    },

    {
      img: "https://i.ibb.co/VBJZcwK/data-science.png",
      courseName: "Data Science",
      enrollDate: "Enrolled on 12 may, 2023",
      time: "Last Read: Learn Data Science",
      module: "154",
      completedModule: "1",
    },

    {
      img: "https://i.ibb.co/2qYdCVc/Mern-stark.png",
      courseName: "Mern Stack",
      enrollDate: "Enrolled on 23 June, 2023",
      time: "Last Read: Learn Mern Stack",
      module: "154",
      completedModule: "50",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {courseDetails.map((details, index) => (
          <div key={index} className="border border-[#4B494D] rounded-2xl">
            <img
              className="rounded-t-2xl mb-2 w-full"
              src={details?.img}
              alt=""
            />

            <div className="px-4 pb-2">
              <h1 className="text-lg text-[#F9F5FF] font-bold font-roboto mb-[3px]">
                {details?.courseName}
              </h1>

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourseCard;
