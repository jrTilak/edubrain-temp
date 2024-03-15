import dollar from '@/assets/images/dollar-circle.svg'
import briefcase from '@/assets/icons/briefcase.svg'
import teacher from '@/assets/icons/teacher.svg'
import house from '@/assets/icons/house.svg'
import proflie from '@/assets/icons/profile-2user.svg'
import status from '@/assets/icons/status-up.svg'

const Allsection = () => {
    return (
        <>
            <div className='flex  justify-center pt-[100px]'>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <span className='font font-400 text-[#246BFD] font-Lato text-[24px]'>Introduction</span>
                    </div>
                    <div className='flex justify-center'>
                        <span className='text-[48px] font-900 pt-0 text-white text-center max-sm:text-[24px]'> What Our UI/UX Design </span>
                    </div>
                    <div className='flex justify-center'>
                        <span className='text-[48px] font-900 pt-0 text-white max-sm:text-[24px]'>Course Encompasses ?</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center m-2 py-[40px]">
                <div className='flex justify-center'>
                    <div className="grid grid-cols-3 py-4 px-8 max-sm:px-0 gap-4 max-sm:grid-cols-1 max-lg:grid-cols-2">
                        <div className='bg-[#121721] flex justify-center flex-col rounded-xl w-[410px] h-[224px] max-lg:w-[322px] max-sm:w-[300px] gap-3 border border-[#2D2E30]'>
                            <div className='flex justify-center'>
                                <img src={dollar} alt="" />
                            </div>
                            <div className='flex justify-center text-white text-[24px]'>
                                <span>High Earning Potential</span>
                            </div>
                            <div className='flex justify-center'>
                                <span className=' text-[#ABAEB2] text-[16px] px-10 max-sm:px-4 text-center'> Tap into high-paying opportunities with your design expertise.</span>
                            </div>
                        </div>
                        <div className='bg-[#121721] flex justify-center flex-col rounded-xl  w-[410px] h-[224px] max-lg:w-[322px] max-sm:w-[300px] gap-3 border border-[#2D2E30]'>
                            <div className='flex justify-center'>
                                <img src={briefcase} alt="" />
                            </div>
                            <div className='flex justify-center text-white text-[24px]'>
                                <span>Job Market Demand</span>
                            </div>
                            <div className='flex justify-center'>
                                <span className=' text-[#ABAEB2] text-[16px] px-10 max-sm:px-4 text-center'>Essential for Digital Success in High Demand Roles.</span>
                            </div>
                        </div>
                        <div className='bg-[#121721] flex justify-center flex-col rounded-xl w-[410px] h-[224px] max-lg:w-[322px] max-sm:w-[300px] gap-3 border border-[#2D2E30]'>
                            <div className='flex justify-center'>
                                <img src={teacher} alt="" />
                            </div>
                            <div className='flex justify-center text-white text-[24px]'>
                                <span>Degree-Free Excellence</span>
                            </div>
                            <div className='flex justify-center'>
                                <span className=' text-[#ABAEB2] text-[16px] px-10  max-sm:px-4 text-center'>Excel in UI/UX Design without the constraints of a degree.</span>
                            </div>
                        </div>
                        <div className='bg-[#121721] flex justify-center flex-col rounded-xl  w-[410px] h-[224px] max-lg:w-[322px] max-sm:w-[300px] gap-3 border border-[#2D2E30]'>
                            <div className='flex justify-center'>
                                <img src={house} alt="" />
                            </div>
                            <div className='flex justify-center text-white text-[24px]'>
                                <span>Work-From-Home Ready</span>
                            </div>
                            <div className='flex justify-center'>
                                <span className=' text-[#ABAEB2] text-[16px] px-10 max-sm:px-4 text-center'> Unlock career flexibility with the freedom to work from home.</span>
                            </div>
                        </div>
                        <div className='bg-[#121721] flex justify-center flex-col rounded-xl w-[410px] h-[224px] max-lg:w-[322px] max-sm:w-[300px] gap-3 border border-[#2D2E30]'>
                            <div className='flex justify-center'>
                                <img src={proflie} alt="" />
                            </div>
                            <div className='flex justify-center text-white text-[24px]'>
                                <span>Creative Community</span>
                            </div>
                            <div className='flex justify-center'>
                                <span className=' text-[#ABAEB2] text-[16px] px-10 max-sm:px-4 text-center'>Join a creative community for growth and enrichment.</span>
                            </div>
                        </div>
                        <div className='bg-[#121721] flex justify-center flex-col rounded-xl  w-[410px] h-[224px] max-sm:w-[300px] max-lg:w-[322px] gap-3 border border-[#2D2E30]'>
                            <div className='flex justify-center'>
                                <img src={status} alt="" />
                            </div>
                            <div className='flex justify-center text-white text-[24px]'>
                                <span>Continuous Innovation</span>
                            </div>
                            <div className='flex justify-center'>
                                <span className=' text-[#ABAEB2] text-[16px] px-10 max-sm:px-4 text-center'> UI/UX design: Constant learning, innovation in a dynamic field.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 justify-center">
                <button className="px-4 max-sm:px-2 bg-[#1A1A1F] m-2 text-white text-[16px] rounded-lg py-3">See the curriculum</button>
                <button className="px-8 max-sm:px-2 bg-[#246BFD] text-white m-2 rounded-lg py-3 text-[16px]">Enroll Now</button>
            </div>
        </>
    )
}
export default Allsection
