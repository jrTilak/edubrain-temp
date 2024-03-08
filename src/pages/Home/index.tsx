import heroImage from "@/assets/images/Hero Image.svg";
import aboutUsImage from "@/assets/images/image 45.png";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Link } from "react-router-dom";
import AboutUsCard from "./AboutUsCard";
import buttons from "@/assets/images/buttons.svg";
import uxDesign from "@/assets/images/UX design.png";
import userSquare2 from "@/assets/images/user-square2.svg";
import ClockIMg from "@/assets/images/clock.svg";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import RaysLine1 from "@/assets/icons/rays-line-1.svg";
import RaysLine2 from "@/assets/icons/rays-line-2.svg";
import RaysLine3 from "@/assets/icons/rays-line-3.svg";
import heroImageOverlay from "@/assets/images/hero image overlay.svg";
import hearGlow from "@/assets/images/heart-glow.svg";
const Home = () => {
  return (
    <div className=" flex flex-col gap-32 sm:gap-48">
      {/* rays */}
      <img
        src={RaysLine1}
        className="absolute top-[550px] h-[79.38px] sm:h-[132px] lg:h-[150px] xl:h-[189px] xl:top-[700px] left-0"
        alt=""
      />
      <img
        src={RaysLine2}
        className="absolute top-[580px] sm:top-[500px] h-[79.38px] sm:h-[132px] lg:h-[150px] xl:h-[189px] xl:top-[220px] right-0"
        alt=""
      />
      <img
        src={RaysLine3}
        className="absolute top-[820px] sm:top-[900px] lg:top[950px] h-[79.38px] sm:h-[132px] lg:h-[150px] xl:h-[189px] xl:top-[750px] right-0"
        alt=""
      />

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
            className="absolute inset-1/4 w-fit aspect-square h-[500px] object-contain object-center"
            alt=""
          />
        </div>
      </section>
      {/* //about us */}
      <section className="min-h-screen flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col gap-6 max-w-[820px] items-center justify-center text-center">
          <div>
            <span className="text-blue text-2xl">About us</span>
            <h2 className="heading">Welcome to Edubraining</h2>
          </div>
          <p className="p px-6">
            Welcome to Edubraining, Your Gateway to Future Tech Excellence! At
            Edubraining, we believe in empowering aspiring minds to become the
            tech leaders of tomorrow.
          </p>
        </div>
        <div className="flex items-center justify-center w-full xl:relative min-h-[800px]">
          <div className="flex flex-col px-4 gap-4 items-center xl:absolute xl:gap-[80px]">
            <div className="flex flex-col gap-4 md:flex-row xl:gap-[150px]">
              <AboutUsCard />
              <AboutUsCard />
            </div>
            <div className="flex flex-col gap-4 md:flex-row xl:gap-[350px]">
              <AboutUsCard />
              <AboutUsCard />
            </div>
            <AboutUsCard />
          </div>
          <img src={aboutUsImage} className="hidden xl:block" />
          {/* // hear glow at center  */}
          <img
            src={hearGlow}
            className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
            alt=""
            
        </div>
      </section>

      {/* Our Courses */}
      <section className="min-h-screen flex flex-col items-center justify-center hidden">
        <div className="flex flex-col gap-6 max-w-[820px] items-center justify-center text-center">
          <div>
            <span className="text-blue text-2xl">Our Courses</span>
            <h2 className="heading">
              Unlock Your Potential by our Tech Courses
            </h2>
          </div>
          <p className="p">
            Explore tech excellence with Edubraining courses. Transformative
            learning for a future of possibilities.
          </p>
        </div>
        <div className="flex items-center justify-between h-max gap-40">
          <div className="flex flex-col gap-6 max-w-[515px]">
            <div>
              <span className="text-blue text-2xl">Visual Art based</span>
              <h2 className="heading">UI/UX Design</h2>
            </div>
            <p className="p">
              Embark on a creative journey with our UI/UX design course, where
              you'll craft exceptional user experiences. Through hands-on
              learning, translate theory into real-world impact, building a
              portfolio that catapults your career in design. Join us and shape
              the future of user-centric innovation.
            </p>
            <div className="flex gap-3 items-end">
              <span className="text-white text-3xl font-semibold">₹4500</span>
              <span className="text-[#AEABB2] text-lg line-through">₹5000</span>
              <span className="text-lg text-blue">(10%)</span>
            </div>
            <div className="flex gap-6">
              <div className="flex gap-1.5 items-center justify-center">
                <img src={userSquare2} className="w-6 h-6 mr-1" />
                <span className="text-white text-2xl font-semibold">67</span>
                <span className="text-[#E0DCE5] text-base self-end">
                  Lectures
                </span>
              </div>
              <div className="flex gap-1.5 items-center justify-center">
                <img src={ClockIMg} className="w-6 h-6 mr-1" />
                <span className="text-white text-2xl font-semibold">
                  31h 46m
                </span>
                <span className="text-[#E0DCE5] text-base self-end">Time</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 max-w-[414px]">
              <SecondaryButton>Let’s explore it!</SecondaryButton>
              <PrimaryButton>Enroll Now</PrimaryButton>
              <PrimaryButton className="col-span-2 bg-[#FF9300]">
                Get more discount!
              </PrimaryButton>
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            {/* buttons */}
            <img src={buttons} alt="" className="h-[40px]" />
            {/* images */}
            <img src={uxDesign} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
