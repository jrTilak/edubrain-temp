import PROCESS from "@/assets/data/process";
import crown from "@/assets/images/Crown.png";
import emoji from "@/assets/images/🥳.png";
import { useInnerSize } from "@/hooks/useInnerSize";
import { cn } from "@/utils/cn";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Timeline = ({ card, img, isHighlighted, i }: any) => {
  const {width} = useInnerSize()
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    amount: width > 1024 ? 0.5 : 0.2,
  });
  return (
    <div
      ref={cardRef}
      className="flex gap-x-3 xs:gap-x-6 sm:gap-x-12 lg:even:flex-row-reverse"
    >
      {/* image for large devices*/}
      {/* the width of this image and the card must be same */}
      <div className="h-[329px] w-[400px] hidden lg:block xl:w-[500px]">
        <motion.img
          initial={{ x: i % 2 === 0 ? -300 : 300, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          src={img}
          alt=""
          className="object-contain object-center w-full h-full"
        />
      </div>
      {/* Icon */}
      <div
        className={cn(
          "translate-y-12 xl:translate-y-28",
          i !== PROCESS.length - 1
            ? "relative after:absolute after:top-0 after:-bottom-12 after:start-3.5 after:w-1 after:-translate-x-[0.5px] after:bg-[#252526]"
            : ""
        )}
      >
        <div className="relative z-10 flex items-center justify-center size-7 ">
          {/* insert 0 before 1 digit number */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            style={{
              backgroundImage:
                "linear-gradient(131.87deg, rgba(36, 107, 253, 0.16) -6.52%, rgba(36, 107, 253, 0) 86.32%)",
            }}
            className="min-w-[70px] p-[0.5px] rounded-xl"
          >
            <div className="font-Montserrat font-semibold text-2xl p-3 rounded-xl bg-[#121721] aspect-square flex items-center justify-center">
              {String(i + 1).padStart(2, "0")}
            </div>
          </motion.div>
        </div>
      </div>
      {/* End Icon */}
      {/* Right Content */}
      <div className="grow pt-0.5 pb-8 flex flex-col gap-4 sm:gap-6 items-start lg:w-[400px] xl:w-[500px]">
        {/* image  for smaller devices*/}
        <div className="h-[242px] w-[242px] sm:h-[236px] sm:w-[236px] lg:hidden">
          <motion.img
            initial={{ x: i % 2 === 0 ? 300 : -300, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            src={img}
            alt=""
            className="object-contain object-center w-full h-full"
          />
        </div>
        {/* card */}
        <motion.div
          initial={{ x: i % 2 === 0 ? 300 : -300, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className={cn(
            "bg-[#121721] border border-[#252526] px-8 py-6 rounded-3xl flex flex-col gap-4 lg:my-auto",
            isHighlighted ? "relative" : ""
          )}
        >
          <h3 className="font-Montserrat font-[600] text-[20px] sm:text-[28px] sm:leading-[33.6px] leading-[24px] xl:text-[32px] xl:leading-[38.4px]">
            {card.title}
          </h3>
          <p className="text-[#ABAEB2] text-xs sm:text-sm xl:text-base">
            {card.desc}
          </p>
          {card.button && (
            <button
              className="bg-[#246BFD] px-6 py-3 rounded-lg mt-4 xs:max-w-[200px]"
              onClick={card.button?.action}
            >
              {card.button?.label}
            </button>
          )}
          {/* highlight */}
          {isHighlighted && (
            <>
              <img
                src={crown}
                alt=""
                className="absolute -top-[45px] -right-[4px] lg:h-[70px] lg:w-[70px]"
              />
              <img
                src={emoji}
                alt=""
                className="absolute -bottom-[30px] right-12 lg:h-[70px] lg:w-[70px]"
              />
            </>
          )}
        </motion.div>
      </div>
      {/* End Right Content */}
    </div>
  );
};

export default Timeline;
