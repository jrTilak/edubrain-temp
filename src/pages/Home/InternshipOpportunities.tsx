import { INTERNSHIP_OPPORTUNITIES } from "@/assets/data/internshipOpportunites";
import SectionHeader from "./SectionHeader";
import { useState } from "react";
import { cn } from "@/utils/cn";

const InternshipOpportunities = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="flex flex-col items-start justify-start wrapper overflow-hidden sm:overflow-visible">
      <SectionHeader {...INTERNSHIP_OPPORTUNITIES} align="left" />
      <div className="flex gap-12 mt-6 flex-col md:flex-row max-w-7xl">
        <img
          src={INTERNSHIP_OPPORTUNITIES.img}
          className="object-cover object-center rounded-2xl w-full md:w-1/3  lg:w-2/5 lg:max-w-1/2"
          alt=""
        />
        <div className="flex flex-col gap-4 sm:gap-6 max-w-5xl">
          {INTERNSHIP_OPPORTUNITIES.qna.map((qna, i) => (
            <button
              onClick={() => setActiveIndex(i)}
              disabled={activeIndex === i}
              key={i}
              className={cn("w-full flex flex-col gap-2")}
            >
              <h3
                className={cn(
                  "text-xl sm:text-2xl font-semibold",
                  activeIndex === i ? "text-[#246BFD]" : "text-[#7A7C80]"
                )}
              >
                {qna.question}
              </h3>
              <p
                className="text-sm sm:text-base text-[#ABAEB2] text-start overflow-hidden"
                style={{
                  height: activeIndex === i ? "auto" : "0px",
                }}
              >
                {qna.answer}
              </p>
              <span
                className={cn(
                  "w-full h-[1.5px]",
                  activeIndex === i ? "bg-[#246BFD]" : "bg-[#313233]"
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
export default InternshipOpportunities;
