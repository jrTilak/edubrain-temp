import dollar from '@/assets/images/dollar-circle.svg'
const Card = () => {
    return (
        <>
            <div className='flex  justify-center'>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <span className='font font-400 text-[#246BFD] font-Lato text-[24px]'>Benefits</span>
                    </div>
                    <div className='flex justify-center'>
                        <span className='text-[48px] font-900 pt-0 text-white'> Why you should become</span>
                    </div>
                    <div className='flex justify-center'>
                        <span className='text-[48px] font-900 pt-0 text-white'> UI/UX Designer ? </span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center m-2 py-[40px]">
                <div className='flex justify-center gap-3'>
                    <div className="grid grid-cols-3 py-4 gap-4">
                        <div className='bg-[#121721] flex justify-center flex-col rounded-xl p-10 m-2 w-[410px] h-[224px] gap-3 border border-[#2D2E30]'>
                            <div className='flex justify-center'>
                                <img src={dollar} alt="" />
                            </div>
                            <div className='flex justify-center text-white text-[24px]'>
                                <span>High Earning Potential</span>
                            </div>
                            <div className='flex justify-center'>
                                <span className=' text-[#ABAEB2] text-[16px] px-10 text-center'> Tap into high-paying opportunities with your design expertise.</span>
                            </div>
                        </div>
                        <div className='bg-[#121721] flex justify-center flex-col rounded-xl p-10 m-2 w-[410px] h-[224px] gap-3 border border-[#2D2E30]'>
                            <div className='flex justify-center'>
                                <img src={dollar} alt="" />
                            </div>
                            <div className='flex justify-center text-white text-[24px]'>
                                <span>High Earning Potential</span>
                            </div>
                            <div className='flex justify-center'>
                                <span className=' text-[#ABAEB2] text-[16px] px-10 text-center'> Tap into high-paying opportunities with your design expertise.</span>
                            </div>
                        </div>
                        <div className='bg-[#121721] flex justify-center flex-col rounded-xl p-10 m-2 w-[410px] h-[224px] gap-3 border border-[#2D2E30]'>
                            <div className='flex justify-center'>
                                <img src={dollar} alt="" />
                            </div>
                            <div className='flex justify-center text-white text-[24px]'>
                                <span>High Earning Potential</span>
                            </div>
                            <div className='flex justify-center'>
                                <span className=' text-[#ABAEB2] text-[16px] px-10 text-center'> Tap into high-paying opportunities with your design expertise.</span>
                            </div>
                        </div>
                        <div className='bg-[#121721] flex justify-center flex-col rounded-xl p-10 m-2 w-[410px] h-[224px] gap-3 border border-[#2D2E30]'>
                            <div className='flex justify-center'>
                                <img src={dollar} alt="" />
                            </div>
                            <div className='flex justify-center text-white text-[24px]'>
                                <span>High Earning Potential</span>
                            </div>
                            <div className='flex justify-center'>
                                <span className=' text-[#ABAEB2] text-[16px] px-10 text-center'> Tap into high-paying opportunities with your design expertise.</span>
                            </div>
                        </div>
                        <div className='bg-[#121721] flex justify-center flex-col rounded-xl p-10 m-2 w-[410px] h-[224px] gap-3 border border-[#2D2E30]'>
                            <div className='flex justify-center'>
                                <img src={dollar} alt="" />
                            </div>
                            <div className='flex justify-center text-white text-[24px]'>
                                <span>High Earning Potential</span>
                            </div>
                            <div className='flex justify-center'>
                                <span className=' text-[#ABAEB2] text-[16px] px-10 text-center'> Tap into high-paying opportunities with your design expertise.</span>
                            </div>
                        </div>
                        <div className='bg-[#121721] flex justify-center flex-col rounded-xl p-10 m-2 w-[410px] h-[224px] gap-3 border border-[#2D2E30]'>
                            <div className='flex justify-center'>
                                <img src={dollar} alt="" />
                            </div>
                            <div className='flex justify-center text-white text-[24px]'>
                                <span>High Earning Potential</span>
                            </div>
                            <div className='flex justify-center'>
                                <span className=' text-[#ABAEB2] text-[16px] px-10 text-center'> Tap into high-paying opportunities with your design expertise.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-3 py-2 justify-center">
                <button className="px-4 bg-[#1A1A1F] m-2 text-white text-[16px] rounded-lg py-3">See the curriculum</button>
                <button className="px-8 bg-[#246BFD] text-white m-2 rounded-lg py-3 text-[16px]">Enroll Now</button>
            </div>
        </>
    )
}
export default Card
