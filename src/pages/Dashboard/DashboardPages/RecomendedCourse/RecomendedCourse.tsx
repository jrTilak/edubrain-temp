//@ts-nocheck
import clock from "../../../../../src/assets/clock.png";
import userIcon from "../../../../../src/assets/user-square.png";

const RecomendedCourse = () => {
  const recomendedCourseDetails = [
    {
      img: "https://i.ibb.co/CsLGHy8/image-38.png",
      courseName: "UI/UX design",
      lecture: "120 Lecture",
      duration: "12hr duration",
    },

    {
      img: "https://i.ibb.co/CsLGHy8/image-38.png",
      courseName: "Data Science",
      lecture: "120 Lecture",
      duration: "12hr duration",
    },

    {
      img: "https://i.ibb.co/CsLGHy8/image-38.png",
      courseName: "Mern Stack",
      lecture: "120 Lecture",
      duration: "12hr duration",
    },
  ];
  return (
    <div>
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-[24px] text-[#F9F5FF] font-semibold mb-4">
            Recommended Courses
          </h1>
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
        <div className="bg-[#323133] w-full h-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-6">
        {recomendedCourseDetails.map((details, index) => (
          <div key={index} className="border border-[#4B494D] rounded-2xl">
            <img
              className="rounded-t-2xl mb-2 w-full"
              src={details?.img}
              alt=""
            />

            <div className="px-4 pb-[10px]">
              <h1 className="text-lg text-[#F9F5FF] font-bold font-roboto mb-3">
                {details?.courseName}
              </h1>

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecomendedCourse;
