import silder from '@/assets/images/slider.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const SliderCard = () => {
  const [slides, setSlides] = useState([1, 2, 3, 4]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Shift the slides to create the infinite scroll effect
      setSlides((prevSlides) => [...prevSlides.slice(1), prevSlides[0]]);
    }, 10000); // Adjust the interval time as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='py-16 overflow-hidden'>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-center'>
          <span className='text-[48px] font-900 pt-0 text-white'>Course Mastery Achievements</span>
        </div>
        <div className='flex justify-center'>
          <p className='text-[16px]  pt-0 text-white'>Uncover quick insights about Edubraining. Get ready for your tech journey by exploring our FAQs. Dive in now!</p>
        </div>
      </div>

      <div className='flex justify-center py-[100px] m-2 gap-10'>
        <AnimatePresence initial={false}>
          {slides.map((slide) => (
            <motion.div
              key={slide}
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '-100%' }}
              transition={{ duration: 10, ease: 'linear' }}
              className='bg-[#121721] w-[300px] pt-[60px] overflow-visible rounded-xl border border-[#2D2E30] relative'>
              <img src={silder} alt='' className='flex justify-center absolute inset-x-0 top-[-50px] left-[20px] -mt-4' />
              <div className='flex flex-col pt-[100px] p-10'>
                <span className='flex justify-center text-white text-[24px] font-700'>Seamless Journeys</span>
                <p className='text-white flex justify-center text-center'>Tackle real-world challenges, honing your problem-solving expertise.</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className='flex gap-3 py-16 justify-center'>
        <button className='px-4 bg-[#1A1A1F] m-2 text-white text-[16px] rounded-lg py-3'>Read More</button>
        <button className='px-8 bg-[#246BFD] text-white m-2 rounded-lg py-3 text-[16px]'>Enroll Now</button>
      </div>
    </div>
  );
};

export default SliderCard;
