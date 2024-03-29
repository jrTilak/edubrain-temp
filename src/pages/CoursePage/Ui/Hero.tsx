//@ts-nocheck
import Video from "./Video"

const Hero = ({title , subtitle ,subtitle1}) => {
    return (
        <div className='flex flex-col text-white pt-[60px] font-700 gap-6'>
            <div className='flex  justify-center'>
                <div className='flex flex-col gap-4'>
                    <span className='text-[48px] font-Lato font-900 flex justify-center max-lg text-center  max-sm:text-[26px]'>{title}</span>
                    <div className="flex flex-col">
                    <span className='text-[36px] font-Lato font-500 text-[#ABAEB2] max-sm:p-3 text-center max-sm:text-[22px] leading-none'> {subtitle}</span>
                        <span className='text-[36px] font-500 font-Lato text-[#ABAEB2] text-center pt-0 max-sm:text-[22px] leading-none'> {subtitle1}</span>
                    </div>
                     
                </div>
            </div>
            <div className="flex gap-3 py-6 justify-center">
                <button className="px-4 max-sm:px-2 bg-[#1A1A1F] m-2 text-white text-[16px] rounded-lg py-3">See the curriculum</button>
                <button className="px-8 bg-[#246BFD] max-sm:px-2 text-white m-2 rounded-lg py-3 text-[16px]">Enroll Now</button>
            </div>
            <div className="flex justify-center">
                <Video/>
            </div>
        </div>
    )
}

export default Hero