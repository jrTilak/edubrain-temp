import FAQ from "@/assets/data/faq";
import SectionHeader from "./SectionHeader";
import plus from "@/assets/icons/add-square.svg";
import minus from "@/assets/icons/minus-square.svg";
import { useState } from "react";

const FAQSection = () => {
  const [activeFaq, setActiveFaq] = useState(null as null | number);
  return (
    <section className="flex flex-col items-center justify-center wrapper overflow-hidden sm:overflow-visible">
      <SectionHeader {...FAQ} />
      <div className="flex flex-col gap-3 sm:gap-6 mt-6 w-full max-w-3xl">
        {FAQ.faqs.map((faq, i) => (
          <div className="flex flex-col gap-4 p-4 sm:px-6 rounded-xl border-2 border-[#313233] w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-[#F5F8FF] text-lg">{faq.question}</h3>
              <button onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <img src={activeFaq === i ? minus : plus} 
                className="h-7 w-7"
                />
              </button>
            </div>
            {activeFaq === i && <p className="text-[#AEABB2] pr-1 sm:pr-3">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};
export default FAQSection;
