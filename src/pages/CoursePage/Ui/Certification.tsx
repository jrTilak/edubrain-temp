import tick from '@/assets/images/tick-circle.svg';

const Certification = () => {
    // Array of certification points
    const certificationPoints = [
        "Immerse yourself in a hands-on project mirroring real-world scenarios.",
        "Demonstrate your skills through our meticulously designed certification project.",
        "Receive valuable insights and guidance from industry experts to elevate your work.",
        "Earn your Edubraining certificate by successfully completing a practical, skill-based project."
    ];

    return (
        <div className='p-10 max-sm:p-3 max-lg:p-2'>
            <div className='flex justify-center'>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <span className='font font-400 text-[#246BFD] font-Lato text-[24px]'>Certification</span>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <span className='text-[48px] font-900 pt-0 text-white text-center max-sm:text-[24px]'>Earn Your Certification</span>
                    </div>
                </div>
            </div>
            <div className='flex gap-6 justify-center py-10 max-lg:flex-col'>
                <div className='flex justify-center'>
                    <div className='bg-gray-500 h-[400px] w-[644px] max-sm:w-[320px] max-sm:h-[240px] flex justify-center rounded-xl'></div>
                </div>
                <div className='flex justify-center'>
                    <div className='flex flex-col w-[600px] max-sm:w-[320px]'>
                        <div className='text-#ABAEB2 flex justify-center text-[16px]'>
                            <p>Embark on a certification journey that not only validates your skills but also prepares you for the challenges of the professional landscape. Your certification project at Edubraining is a testament to your practical expertise and commitment to mastering the subject matter.</p>
                        </div>
                        <div className='text-white flex gap-2 flex-col py-10 max-sm:py-4'>
                            {/* Mapping through certification points */}
                            {certificationPoints.map((point, index) => (
                                <div key={index} className='flex gap-4'>
                                    <img src={tick} className='w-[50px]' alt="" />
                                    <p className='text-[20px] max-sm:text-[16px]'>{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certification;
