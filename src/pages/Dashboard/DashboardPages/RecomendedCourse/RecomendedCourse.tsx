//@ts-nocheck
// import clock from "../../../../../src/assets/clock.png";
// import userIcon from "../../../../../src/assets/user-square.png";
import CourseCard from "../../ReusableComponents/CourseCard";
import CarouselBtn from "../../ReusableComponents/CourseCardCaurosel/CarouselBtn";

const RecomendedCourse = ({currentSlider, btnpressprev, btnpressnext, recomendedCourseDetails}) => {
  // const courseDetails = [
  //   {
  //     img: "https://i.ibb.co/CsLGHy8/image-38.png",
  //     courseName: "UI/UX design",
  //     lecture: "120 Lecture",
  //     duration: "12hr duration",
  //   },

  //   {
  //     img: "https://i.ibb.co/CsLGHy8/image-38.png",
  //     courseName: "Data Science",
  //     lecture: "120 Lecture",
  //     duration: "12hr duration",
  //   },

  //   {
  //     img: "https://i.ibb.co/CsLGHy8/image-38.png",
  //     courseName: "Mern Stack",
  //     lecture: "120 Lecture",
  //     duration: "12hr duration",
  //   },
  //   {
  //     img: "https://i.ibb.co/CsLGHy8/image-38.png",
  //     courseName: "Mern Stack",
  //     lecture: "120 Lecture",
  //     duration: "12hr duration",
  //   },
  //   {
  //     img: "https://i.ibb.co/CsLGHy8/image-38.png",
  //     courseName: "Mern Stack",
  //     lecture: "120 Lecture",
  //     duration: "12hr duration",
  //   }
  // ];
  return (
    <div>
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-[24px] text-[#F9F5FF] font-semibold mb-4">
            Recommended Courses
          </h1>

         <CarouselBtn slideName={"recomended"} btnpressprev={btnpressprev} btnpressnext={btnpressnext}></CarouselBtn>

        </div>
        <div className="bg-[#323133] w-full h-1"></div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-6">
        {courseDetails.map((details, index) => (
          <div key={index} className="border border-[#4B494D] rounded-2xl">
            <img className="rounded-t-2xl mb-2 w-full" src={details?.img} alt="" />

            <div className="px-4 pb-[10px]">
              <h1 className="text-lg text-[#F9F5FF] font-bold font-roboto mb-3">
                {details?.courseName}
              </h1>

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


            </div>
          </div>
        ))}
      </div> */}

      <div className="flex ">

      <CourseCard currentSlider={currentSlider} courseDetails={recomendedCourseDetails}></CourseCard>
      </div>
    </div>
  );
};

export default RecomendedCourse;
