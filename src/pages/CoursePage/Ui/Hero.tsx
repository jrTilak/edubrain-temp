import Video from "./Video"

const Hero = () => {
    return (
        <div className='flex flex-col text-white pt-[60px] font-700 gap-3'>
            <div className='flex  justify-center'>
                <div className='flex flex-col '>
                    <span className='text-[48px] font-Lato font-900'>Embark on a Creative Journey</span>
                    <div className='flex justify-center pt-4'>
                        <span className='text-[36px] font-Lato font-500 text-[#ABAEB2]'> Master UI/UX Design with Our </span>
                    </div>
                    <div className='flex justify-center'>
                        <span className='text-[36px] font-500 font-Lato text-[#ABAEB2]'> Dynamic Course </span>
                    </div>
                </div>
            </div>
            <div className="flex gap-3 py-2 justify-center">
                <button className="px-4 bg-[#1A1A1F] m-2 text-white text-[16px] rounded-lg py-3">See the curriculum</button>
                <button className="px-8 bg-[#246BFD] text-white m-2 rounded-lg py-3 text-[16px]">Enroll Now</button>
            </div>
            <div className="flex justify-center">
                <Video/>
            </div>
        </div>
    )
}

export default Hero