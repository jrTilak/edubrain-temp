//@ts-nocheck
import calender from "../../../../assets/calendar.svg";
import clock from "../../../../../src/assets/clock.png";

const WorkshopAllCard = () => {
  const workshopDetails = [
    {
      img: "https://i.ibb.co/sH2NrNp/image-112.png",
      courseName: "The Basics of UI/UX design principals",
      enrollDate: "12 May, 2024",
      time: "12 pm to 2 pm",
      startIn: "02hr :01min",
    },

    {
      img: "https://i.ibb.co/S08f1yk/image-113.png",
      courseName: "The Basics of UI/UX design principals",
      enrollDate: "12 May, 2024",
      time: "12 pm to 2 pm",
      startIn: "02hr :01min",
    },

    {
      img: "https://i.ibb.co/BGGkVfx/image-114.png",
      courseName: "The Basics of UI/UX design principals",
      enrollDate: "12 May, 2024",
      time: "12 pm to 2 pm",
      startIn: "02hr :01min",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-6">
        {workshopDetails.map((details, index) => (
          <div key={index} className="border border-[#4B494D] rounded-2xl">
            <img
              className="rounded-t-2xl mb-2 w-full"
              src={details?.img}
              alt=""
            />

            <div className="px-4 pb-2">
              <h1 className="text-lg text-[#F9F5FF] font-bold font-roboto mb-4">
                {details?.courseName}
              </h1>

              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
                  <img className="w-6" src={calender} alt="" />
                  <p className="text-base text-[#C7C4CC] font-light font-roboto">
                    {details?.enrollDate}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <img src={clock} alt="" />
                  <p className="text-base text-[#C7C4CC] font-light font-roboto">
                    {details.time}
                  </p>
                </div>
              </div>

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkshopAllCard;
