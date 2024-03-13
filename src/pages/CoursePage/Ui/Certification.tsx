import tick from '@/assets/images/tick-circle.svg'

const Certification = () => {
    return (
        <div className='p-16'>
            <div className='flex  justify-center '>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <span className='font font-400 text-[#246BFD] font-Lato text-[24px]'>Certification</span>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <span className='text-[48px] font-900 pt-0 text-white'>Earn Your Certification</span>
                    </div>
                </div>
            </div>
            <div className='flex gap-6 justify-center py-16 '>
                <div className= ' bg-gray-500 w-[600px] h-[400px] flex justify-center rounded-xl relative'>
                    <span className='text-[36px] font-Lato font-500 text-white absolute '> </span>
                </div>
                <div className='flex flex-col w-[600px]'>
                    <div className='text-white '>
                        <p>Embark on a certification journey that not only validates your skills but also prepares you for the challenges of the professional landscape. Your certification project at Edubraining is a testament to your practical expertise and commitment to mastering the subject matter.</p>
                    </div>
                    <div className='text-white flex gap-4 flex-col py-4'>
                        <div className='flex gap-4'>
                            <img src={tick} alt="" />
                            <p className='text-[20px]'>Immerse yourself in a hands-on project mirroring real-world scenarios.</p>
                        </div>
                        <div className='flex gap-4'>
                            <img src={tick} alt="" />
                            <p className='text-[20px]'>Immerse yourself in a hands-on project mirroring real-world scenarios.</p>
                        </div>
                        <div className='flex gap-4'>
                            <img src={tick} alt="" />
                            <p className='text-[20px]'>Immerse yourself in a hands-on project mirroring real-world scenarios.</p>
                        </div>
                        <div className='flex gap-4'>
                            <img src={tick} alt="" />
                            <p className='text-[20px]'>Immerse yourself in a hands-on project mirroring real-world scenarios.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certification