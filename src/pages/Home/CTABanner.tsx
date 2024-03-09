import ctaImg from "@/assets/images/cta-girl.png";

const CTABanner = () => {
  return (
    <div className="bg-[#246BFD] rounded-xl h-[211px] xs:h-[192px] sm:h-[220px] md:h-[300px] wrapper max-w-6xl xs:justify-between relative p-3 sm:px-6 md:p-8 flex flex-col gap-3">
      <h3 className="text-[#F5F8FF] font-bold text-xl xs:text-2xl md:text-3xl lg:text-4xl font-Montserrat">
        Take the Next Step in
        <br />
        Your Tech Journey.
      </h3>
      <p className="max-w-[60%] text-[12px] xs:text-sm sm:text-base md:text-xl lg:text-2xl text-[#F5F8FF]">
        Revolutionize Your Learning Journey with AI-Enhanced Courses!
      </p>
      <button className="text-[#F5F8FF] bg-[#0C0C0D] text-sm px-5 py-2 sm:py-3 lg:py-4 md:text-lg rounded-lg max-w-fit xs:max-w-none w-[180px] sm:w-[200px] md:w-[300px]">
        Explore Now!
      </button>
      <img
        src={ctaImg}
        className="absolute right-0 bottom-0 h-40 xs:h-[130%]"
      />
    </div>
  );
};
export default CTABanner;
