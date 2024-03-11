import heroImage from "@/assets/images/Hero Image.svg";
import aboutUsImage from "@/assets/images/image 45.png";
import { Link } from "react-router-dom";
import DescriptionCard from "./DescriptionCard";
import RaysLine1 from "@/assets/icons/rays-line-1.svg";
import RaysLine2 from "@/assets/icons/rays-line-2.svg";
import RaysLine3 from "@/assets/icons/rays-line-3.svg";
// import RaysLine4 from "@/assets/icons/rays-line-4.svg";
import heroImageOverlay from "@/assets/images/hero image overlay.svg";
import hearGlow from "@/assets/images/heart-glow.svg";
import ABOUT_US from "@/assets/data/aboutUs";
import CourseSection from "./CourseSection";
import SectionHeader from "./SectionHeader";
import CERTIFICATION_AND_ACHIEVEMENT from "@/assets/data/certificationAndAchievement";
import InternshipOpportunities from "./InternshipOpportunities";
import CTABanner from "./CTABanner";
import FAQSection from "./FAQSection";
import Timeline from "./Timeline";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Home = () => {
  const aboutUsRef = useRef(null);
  const aboutUsInView = useInView(aboutUsRef, {
    once: true,
  });
  const aboutUsImgRef = useRef(null);
  const aboutUsImgInView = useInView(aboutUsImgRef, {
    once: true,
  });

  return (
    <div className=" flex flex-col gap-24 xl:gap-48 overflow-hidden">
      {/* rays */}
      <img
        src={RaysLine1}
        className="absolute top-[550px] h-[79.38px] sm:h-[132px] lg:h-[150px] xl:h-[189px] w-fit xl:top-[700px] left-0"
        alt=""
      />
      <img
        src={RaysLine2}
        className="absolute top-[580px] sm:top-[500px] h-[79.38px] sm:h-[132px] lg:h-[150px] xl:h-[189px] w-fit xl:top-[220px] right-0"
        alt=""
      />
      <img
        src={RaysLine3}
        className="absolute top-[820px] sm:top-[900px] lg:top[950px] h-[79.38px] sm:h-[132px] lg:h-[150px] xl:h-[189px] w-fit xl:top-[750px] right-0"
        alt=""
      />
      {/* <img
        src={RaysLine4}
        className="absolute w-[200px] sm:w-[500px] top-[2300px] sm:top-[2200px] h-[79.38px] sm:h-[132px] lg:h-[150px] xl:h-[189px] left-0"
        alt=""
      /> */}

      {/* // Hero Section */}
      <section className="flex flex-col pt-[120px] justify-center items-center wrapper my-auto gap-12 xl:flex-row xl:gap-28">
        <div className="gap-8 flex flex-col items-center xl:items-start">
          <div className="flex flex-col gap-5 items-center justify-center text-center xl:text-start xl:items-start">
            <h1 className="heading">
              Discover the future
              <br />
              learning
            </h1>
            <span className="text-2xl text-[#F5F8FF] leading-[20.8px]">
              AI Enhance courses for high paying job
            </span>
          </div>
          <p className="p text-center xl:text-start max-w-[492px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatu
          </p>
          <Link
            to="/courses"
            className="text-center bg-blue font-Roboto rounded-lg px-6 py-3 text-white w-full sm:max-w-[323px] xl:w-[250px] xl:max-w-none"
          >
            Explore Courses
          </Link>
        </div>
        <div className="w-full aspect-[1.1/1] max-w-[650px] relative overflow-hidden">
          <img
            src={heroImage}
            className="w-full z-10 object-contain object-center"
            alt=""
          />
          {/* // overlay */}
          <img
            src={heroImageOverlay}
            className="absolute -top-14 sm:inset-1/4 w-fit aspect-square h-[500px] object-contain object-center mix-blend-color-dodge z-20"
            alt=""
          />
        </div>
      </section>

      {/* //about us */}
      <section className="flex flex-col items-center justify-center gap-12 wrapper">
        <SectionHeader
          header="About us"
          title={ABOUT_US.title}
          desc={ABOUT_US.desc}
        />
        <div className="flex items-center justify-center w-full xl:relative xl:min-h-[800px]">
          <motion.div
            ref={aboutUsRef}
            initial={{ opacity: 0, scale: 0 }}
            animate={aboutUsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col px-4 gap-4 items-center xl:absolute xl:gap-[80px]"
          >
            <div className="flex flex-col gap-4 md:flex-row xl:gap-[150px]">
              <DescriptionCard {...ABOUT_US.cards[0]} />
              <DescriptionCard {...ABOUT_US.cards[1]} />
            </div>
            <div className="flex flex-col gap-4 md:flex-row xl:gap-[400px]">
              <DescriptionCard {...ABOUT_US.cards[2]} />
              <DescriptionCard {...ABOUT_US.cards[3]} />
            </div>
            <DescriptionCard {...ABOUT_US.cards[4]} />
          </motion.div>
          <motion.img
            ref={aboutUsImgRef}
            initial={{ opacity: 0, scale: 0 }}
            animate={aboutUsImgInView ? { opacity: 1, scale: 1 } : {}}
            src={aboutUsImage}
            className="hidden xl:block z-40"
          />
          {/* // hear glow at center  */}
          <img
            src={hearGlow}
            className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
        </div>
      </section>

      {/* Our Courses */}
      <section className="flex flex-col items-center justify-center wrapper overflow-hidden sm:overflow-visible">
        <SectionHeader
          header="Our Courses"
          title="Unlock Your Potential by our <br/> Tech Courses"
          desc="Explore tech excellence with Edubraining courses. Transformative learning for a future of possibilities."
        />
        <CourseSection />
      </section>

      {/* Process  todo */}
      <section className="flex flex-col items-center justify-center wrapper overflow-hidden sm:overflow-visible">
        <SectionHeader header="Process" title="Your path to success" />
        <Timeline />
      </section>

      {/* Certification  */}
      <section className="flex flex-col items-center justify-center wrapper overflow-hidden sm:overflow-visible">
        <SectionHeader {...CERTIFICATION_AND_ACHIEVEMENT} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mt-6">
          {CERTIFICATION_AND_ACHIEVEMENT.cards.map((card, i) => (
            <DescriptionCard key={i} {...card} />
          ))}
        </div>
      </section>

      {/* internship opportunities6 */}
      <InternshipOpportunities />

      {/* cta banner */}
      <CTABanner />

      {/* faq */}
      <FAQSection />

      {/* // for margin */}
      <section className="h-[30vh]"></section>
    </div>
  );
};
export default Home;
