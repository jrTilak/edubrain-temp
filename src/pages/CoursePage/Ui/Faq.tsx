import { useState } from 'react';
import add from '@/assets/images/add-square.svg';

interface FAQItemProps {
  question: string;
  answer: string; // Add answer prop
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => { // Receive answer prop
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div  onClick={toggleExpanded} className='flex flex-col border w-[845px] max-lg:w-[625px] max-sm:w-[300px] border-[#313233] p-3 rounded-xl'>
      <div className='faq-item  flex justify-between'>
        <span className='text-[24px] font-Roboto font-400 max-sm:text-[16px]'>{question}</span>
        <img src={add} alt="Add" onClick={toggleExpanded} className={expanded ? 'rotate-45' : ''} />
      </div>
      {expanded && (
        <div className="text-[16px] text-[#7A7C80] py-6 font-Roboto ">
          {answer} {/* Display answer content */}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div>
      <div className='flex justify-center pt-[80px] '>
        <div className='flex flex-col text-center gap-2'>
          <span className='font font-400 text-[#246BFD] text-[20px]'>FAQ</span>
          <span className='text-[48px] font-bold text-white max-sm:text-[36px] font-Roboto leading-none'>Frequently Asked Questions</span>
          <div className='flex justify-center'>
            <p className='text-[16px] text-[#7A7C80] max-sm:text-[12px] w-[652px] text-center max-sm:w-[320px] max-md:w-[400px] px-4 max-lg:px-1 py-5 font-Roboto'>Uncover quick insights about Edubraining. Get ready for your tech journey by exploring our FAQs. Dive in now!</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center py-4'>
        <div className=' flex flex-col text-white gap-3 '>
          <FAQItem question="How can I get Internship ?" answer="To get an internship, you can apply through various job portals, company websites, or directly contact companies you're interested in. It's also helpful to network with professionals in your field and attend career fairs." />
          <FAQItem question="How can I improve my coding skills?" answer="To improve your coding skills, you can practice regularly, work on projects, participate in coding challenges, and seek feedback from peers or mentors. Additionally, you can take online courses or tutorials to learn new concepts and technologies." />
          <FAQItem question="What resources do you recommend for learning web development?" answer="There are many resources available for learning web development, including online courses, tutorials, documentation, and community forums. Some popular platforms for learning web development include Udemy, Coursera, freeCodeCamp, and MDN Web Docs." />
          <FAQItem question="How do I reset my password?" answer="To reset your password, you can usually do so through the login page of the website or application. Look for an option like 'Forgot Password' or 'Reset Password,' and follow the instructions provided. You may need to verify your identity through email or other means." />
        </div>
      </div>
      <div className='py-[100px]'>
        <div className='flex flex-col items-center'>
          <span className='text-[48px] font-700 font-Roboto text-white max-sm:text-[24px] '>Are you Ready to become</span>
          <span className='text-[48px] font-700 font-Roboto text-white max-sm:text-[24px]'>Master in UI/UX design ?</span>
          <div className="flex gap-3 py-6">
            <button className="px-4 bg-[#1A1A1F] m-2 text-white text-[16px] rounded-lg py-3">Read More</button>
            <button className="px-8 bg-[#246BFD] text-white m-2 rounded-lg py-3 text-[16px]">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
