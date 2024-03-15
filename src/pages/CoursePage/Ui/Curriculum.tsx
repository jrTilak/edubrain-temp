import play from '@/assets/images/arrow-right.svg'
import { useState } from 'react';


const Curriculum = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const [activeIndex1, setActiveIndex1] = useState(null);

    // Function to handle clicking on a list item
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    // Function to determine if a list item is active
    const isActive = (index) => {
        return index === activeIndex ? "text-[36px] text-[#246BFD]" : "text-[24px]";
    };


    // Function to handle clicking on a part
    const handlePartClick = (index) => {
        setActiveIndex1(index === activeIndex1 ? null : index);
    };

    // Function to determine if a part is active
    const isActivePart1 = (index) => {
        return index === activeIndex1 ? "border-[#246BFD] text-[16px] text-[#246BFD]" : "border-[#252526] text-[16px]";
    };

    return (
        <div className='py-16 p-2'>
            <div className='flex  justify-center py-16'>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-center'>
                        <span className='font font-400 text-[#246BFD] font-Lato text-[24px]'>Curriculum</span>
                    </div>
                    <div className='flex justify-center'>
                        <span className='text-[48px] font-900 pt-0 text-white text-center max-sm:text-[24px]'> Your Learning Journey</span>
                    </div>
                    <div className='flex justify-center'>
                        <p className='text-[36px]  pt-0 text-white text-center max-sm:text-[24px]'>Navigating the UI/UX Design Curriculum</p>
                    </div>
                </div>
            </div>
            <div className='flex  max-lg:pl-0 max-md:pl-0 max-lg:justify-center gap-8 max-sm:gap-2 '>
                <div className='flex pl-[110px] max-lg:pl-0 max-md:pl-0 max-lg:justify-center gap-8 max-sm:gap-2 '>
                    <div className={`border px-10 max-sm:px-3 py-2 rounded-xl ${isActivePart1(0)}`} onClick={() => handlePartClick(0)}>
                        <span className='text-[24px] max-sm:text-[14px]'>Part-1</span>
                    </div>
                    <div className={`border px-10 max-sm:px-3 py-2 rounded-xl ${isActivePart1(1)}`} onClick={() => handlePartClick(1)}>
                        <span className='text-[24px] max-sm:text-[14px]'>Part-2</span>
                    </div>
                    <div className={`border px-10 max-sm:px-3 py-2 rounded-xl ${isActivePart1(2)}`} onClick={() => handlePartClick(2)}>
                        <span className='text-[24px] max-sm:text-[14px]'>Part-3</span>
                    </div>
                    <div className={`border px-10 max-sm:px-3 py-2 rounded-xl ${isActivePart1(3)}`} onClick={() => handlePartClick(3)}>
                        <span className='text-[24px] max-sm:text-[14px]'>Part-4</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='flex justify-center py-10 px-6 max-sm:px-0 max-lg:flex-col'>
                    <div className='flex flex-col gap-4 p-4 max-sm:p-0  w-[650px] max-lg:w-[730px] max-sm:w-[320px]'>
                        <div className='text-white flex flex-col '>
                            <span className='text-[48px] font-Lato font-500 max-sm:text-[24px] max-sm:text-center'>Introduction to Design Principles </span>
                        </div>
                        <div className=' text-white '>
                            <p className='flex max-lg:justify-center max-sm:text-[16px] max-sm:ml-3 max-sm:pb-10 p-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                        </div>
                        <div className='text-white py-6 max-lg:hidden'>
                            <ul className='list-disc pl-4 text-[24px] flex flex-col gap-5'>
                                <li className={isActive(0)} onClick={() => handleClick(0)}>Color</li>
                                <li className={isActive(1)} onClick={() => handleClick(1)}>Typography</li>
                                <li className={isActive(2)} onClick={() => handleClick(2)}>Button</li>
                                <li className={isActive(3)} onClick={() => handleClick(3)}>Image</li>
                            </ul>
                        </div>
                    </div>
                    <div className='bg-[#121721] rounded-2xl justify-center w-[630px]  max-sm:w-[300px] max-sm:mx-0 max-sm:ml-3 max-sm:m-3 max-sm:p-2  max-sm:my-2 h-[600px] py-16 px-4 max-sm:px-0 mx-10 flex flex-col gap-5  overflow-y-auto  scrollbar scrollbar-thumb-[#246BFD] scrollbar-track-white ' style={{ scrollbarWidth: 'thin', overflowY: 'auto', WebkitOverflowScrolling: 'touch', msOverflowStyle: '-ms-autohiding-scrollbar', scrollbarColor: '#246BFD transparent' }}>
                        <div>
                            <span className='text-white text-[24px] p-1'>color</span>
                        </div>
                        <div className='flex justify-between gap-1'>
                            <div className='flex gap-1'>
                                <img src={play} alt="play" />
                                <span className='text-white '>UX Design vs UI Design</span>
                            </div>
                            <div className='flex gap-10 max-sm:gap-0'>
                                <div className='bg-[#246BFD1A] rounded-xl'>
                                    <span className='text-[#246BFD] p-4'>Perview</span>
                                </div>
                                <div>
                                    <span className='text-white max-sm:hidden'>9:52</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr className='bg-white' />
                        </div>
                        <div className='flex justify-between gap-1'>
                            <div className='flex gap-1'>
                                <img src={play} alt="play" />
                                <span className='text-white'>UX Design vs UI Design</span>
                            </div>
                            <div className='flex gap-10 max-sm:gap-1'>
                                <div className='bg-[#246BFD1A] rounded-xl'>
                                    <span className='text-[#246BFD] p-4'>Perview</span>
                                </div>
                                <div>
                                    <span className='text-white max-sm:hidden'>9:52</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr className='bg-white' />
                        </div>
                        <div className='flex justify-between gap-1'>
                            <div className='flex gap-1'>
                                <img src={play} alt="play" />
                                <span className='text-white'>UX Design vs UI Design</span>
                            </div>
                            <div className='flex gap-10 max-sm:gap-1'>
                                <div className='bg-[#246BFD1A] rounded-xl'>
                                    <span className='text-[#246BFD] p-4'>Perview</span>
                                </div>
                                <div>
                                    <span className='text-white max-sm:hidden'>9:52</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr className='bg-white' />
                        </div>
                        <div className='flex justify-between gap-1'>
                            <div className='flex gap-1'>
                                <img src={play} alt="play" />
                                <span className='text-white'>UX Design vs UI Design</span>
                            </div>
                            <div className='flex gap-10 max-sm:gap-1'>
                                <div className='bg-[#246BFD1A] rounded-xl'>
                                    <span className='text-[#246BFD] p-4'>Perview</span>
                                </div>
                                <div>
                                    <span className='text-white max-sm:hidden'>9:52</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr className='bg-white' />
                        </div>
                        {/* Repeat similar content for other videos */}
                        <span className='text-white text-[24px]'>Typography</span>
                        <div className='flex justify-between gap-1'>
                            <div className='flex gap-1'>
                                <img src={play} alt="play" />
                                <span className='text-white'>UX Design vs UI Design</span>
                            </div>
                            <div className='flex gap-10 max-sm:gap-1'>
                                <div className='bg-[#246BFD1A] rounded-xl'>
                                    <span className='text-[#246BFD] p-4'>Perview</span>
                                </div>
                                <div>
                                    <span className='text-white max-sm:hidden'>9:52</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr className='bg-white' />
                        </div>
                        <div className='flex justify-between gap-1'>
                            <div className='flex gap-1'>
                                <img src={play} alt="play" />
                                <span className='text-white'>UX Design vs UI Design</span>
                            </div>
                            <div className='flex gap-10 max-sm:gap-1'>
                                <div className='bg-[#246BFD1A] rounded-xl'>
                                    <span className='text-[#246BFD] p-4'>Perview</span>
                                </div>
                                <div>
                                    <span className='text-white max-sm:hidden'>9:52</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr className='bg-white' />
                        </div>
                        <div className='flex justify-between gap-1'>
                            <div className='flex gap-1'>
                                <img src={play} alt="play" />
                                <span className='text-white'>UX Design vs UI Design</span>
                            </div>
                            <div className='flex gap-10 max-sm:gap-1'>
                                <div className='bg-[#246BFD1A] rounded-xl'>
                                    <span className='text-[#246BFD] p-4'>Perview</span>
                                </div>
                                <div>
                                    <span className='text-white max-sm:hidden'>9:52</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr className='bg-white' />
                        </div>
                        <div className='flex justify-between gap-1'>
                            <div className='flex gap-1'>
                                <img src={play} alt="play" />
                                <span className='text-white'>UX Design vs UI Design</span>
                            </div>
                            <div className='flex gap-10 max-sm:gap-1'>
                                <div className='bg-[#246BFD1A] rounded-xl'>
                                    <span className='text-[#246BFD] p-4'>Perview</span>
                                </div>
                                <div>
                                    <span className='text-white max-sm:hidden'>9:52</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr className='bg-white' />
                        </div>
                    </div>
                </div>



            </div>
            <div className='flex justify-center max-sm:hidden '>
                <div className='grid grid-cols-4 max-lg:grid-cols-2 gap-4'>
                    <div className='bg-[#121721]  p-8 px-16 flex flex-col rounded-xl border max-sm:px-10 max-sm:p-4 border-[#2D2E30] '>
                        <span className='text-[48px] text-white flex justify-center max-sm:text-[24px]'>110+</span>
                        <span className='text-[#246BFD] flex justify-center'>Lecture</span>
                    </div>
                    <div className='bg-[#121721]  p-8 px-16 flex flex-col rounded-xl border border-[#2D2E30] '>
                        <span className='text-[48px] text-white flex justify-center'>30h +</span>
                        <span className='text-[#246BFD] flex justify-center'>Duration</span>
                    </div>
                    <div className='bg-[#121721]  p-8 px-16 flex flex-col rounded-xl border border-[#2D2E30] '>
                        <span className='text-[48px] text-white flex justify-center'>20+</span>
                        <span className='text-[#246BFD] flex justify-center'>Projects</span>
                    </div>
                    <div className='bg-[#121721]  p-8 px-16 flex flex-col rounded-xl border border-[#2D2E30] '>
                        <span className='text-[48px] text-white'>Life time</span>
                        <span className='text-[#246BFD] flex justify-center'>Access</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Curriculum