import play from '@/assets/images/arrow-right.svg'


const Curriculum = () => {
    return (
        <div className='py-16'>
            <div className='flex  justify-center py-16'>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-center'>
                        <span className='font font-400 text-[#246BFD] font-Lato text-[24px]'>Curriculum</span>
                    </div>
                    <div className='flex justify-center'>
                        <span className='text-[48px] font-900 pt-0 text-white'> Your Learning Journey</span>
                    </div>
                    <div className='flex justify-center'>
                        <p className='text-[36px]  pt-0 text-white'>Navigating the UI/UX Design Curriculum</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-8 px-[140px]'>
                <div className='bg-[#246BFD1A] px-10 py-2 rounded-xl'>
                    <span className='text-[#246BFD] text-[24px]'>Part-1</span>
                </div>
                <div className='bg-[#246BFD1A] px-10 py-2 rounded-xl'>
                    <span className='text-[#246BFD] text-[24px]'>Part-1</span>
                </div>
                <div className='bg-[#246BFD1A] px-10 py-2 rounded-xl'>
                    <span className='text-[#246BFD] text-[24px]'>Part-1</span>
                </div>
                <div className='bg-[#246BFD1A] px-10 py-2 rounded-xl'>
                    <span className='text-[#246BFD] text-[24px]'>Part-1</span>
                </div>
            </div>
            <div className='flex justify-center py-10'>
                <div className='flex flex-col'>
                    <div className='text-white flex flex-col '>
                        <span className='text-[48px] font-Lato font-500'>Introduction to </span>
                        <span className='text-[48px] font-Lato font-500'>Design Principles</span>
                    </div>
                    <div className='w-[600px] text-white'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                    </div>
                    <div className='text-white py-6'>
                        <ul className='list-disc pl-4 text-[24px] flex flex-col gap-5'>
                            <li>Color</li>
                            <li>Typography</li>
                            <li>Button</li>
                            <li>Image</li>
                        </ul>
                    </div>
                </div>


                <div className='bg-[#121721] p-2 rounded-2xl'>
                    <div className='bg-[#121721] rounded-2xl w-[630px] h-[600px] py-8 px-4 flex flex-col gap-5  overflow-y-auto  scrollbar scrollbar-thumb-[#246BFD] scrollbar-track-white ' style={{ scrollbarWidth: 'thin', overflowY: 'auto', WebkitOverflowScrolling: 'touch', msOverflowStyle: '-ms-autohiding-scrollbar', scrollbarColor: '#246BFD transparent' }}>
                        <div>
                            <span className='text-white text-[24px]'>color</span>
                        </div>
                        <div className='flex justify-between gap-1'>
                            <div className='flex gap-1'>
                                <img src={play} alt="play" />
                                <span className='text-white'>UX Design vs UI Design</span>
                            </div>
                            <div className='flex gap-10'>
                                <div className='bg-[#246BFD1A] rounded-xl'>
                                    <span className='text-[#246BFD] p-4'>Perview</span>
                                </div>
                                <div>
                                    <span className='text-white'>9:52</span>
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
                            <div className='flex gap-10'>
                                <div className='bg-[#246BFD1A] rounded-xl'>
                                    <span className='text-[#246BFD] p-4'>Perview</span>
                                </div>
                                <div>
                                    <span className='text-white'>9:52</span>
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
                            <div className='flex gap-10'>
                                <div className='bg-[#246BFD1A] rounded-xl'>
                                    <span className='text-[#246BFD] p-4'>Perview</span>
                                </div>
                                <div>
                                    <span className='text-white'>9:52</span>
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
                            <div className='flex gap-10'>
                                <div className='bg-[#246BFD1A] rounded-xl'>
                                    <span className='text-[#246BFD] p-4'>Perview</span>
                                </div>
                                <div>
                                    <span className='text-white'>9:52</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr className='bg-white' />
                        </div>
                        {/* Repeat similar content for other videos */}
                        <span className='text-white'>Typography</span>
                        <div className='flex justify-between gap-1'>
                            <div className='flex gap-1'>
                                <img src={play} alt="play" />
                                <span className='text-white'>UX Design vs UI Design</span>
                            </div>
                            <div className='flex gap-10'>
                                <div className='bg-[#246BFD1A] rounded-xl'>
                                    <span className='text-[#246BFD] p-4'>Perview</span>
                                </div>
                                <div>
                                    <span className='text-white'>9:52</span>
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
                            <div className='flex gap-10'>
                                <div className='bg-[#246BFD1A] rounded-xl'>
                                    <span className='text-[#246BFD] p-4'>Perview</span>
                                </div>
                                <div>
                                    <span className='text-white'>9:52</span>
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
                            <div className='flex gap-10'>
                                <div className='bg-[#246BFD1A] rounded-xl'>
                                    <span className='text-[#246BFD] p-4'>Perview</span>
                                </div>
                                <div>
                                    <span className='text-white'>9:52</span>
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
                            <div className='flex gap-10'>
                                <div className='bg-[#246BFD1A] rounded-xl'>
                                    <span className='text-[#246BFD] p-4'>Perview</span>
                                </div>
                                <div>
                                    <span className='text-white'>9:52</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr className='bg-white' />
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex justify-center gap-10'>
                <div className='bg-[#121721]  p-8 px-16 flex flex-col rounded-xl border border-[#2D2E30] '>
                    <span className='text-[48px] text-white'>110+</span>
                    <span className='text-[#246BFD] flex justify-center'>Lecture</span>
                </div>
                <div className='bg-[#121721]  p-8 px-16 flex flex-col rounded-xl border border-[#2D2E30] '>
                    <span className='text-[48px] text-white'>30h +</span>
                    <span className='text-[#246BFD] flex justify-center'>Duration</span>
                </div>
                <div className='bg-[#121721]  p-8 px-16 flex flex-col rounded-xl border border-[#2D2E30] '>
                    <span className='text-[48px] text-white'>20+</span>
                    <span className='text-[#246BFD] flex justify-center'>Projects</span>
                </div>
                <div className='bg-[#121721]  p-8 px-16 flex flex-col rounded-xl border border-[#2D2E30] '>
                    <span className='text-[48px] text-white'>Life time</span>
                    <span className='text-[#246BFD] flex justify-center'>Access</span>
                </div>
            </div>
        </div>
    )
}

export default Curriculum