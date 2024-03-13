import tick from '@/assets/images/tick-circle.svg'
import refer from '@/assets/images/refer.svg'
const Payment = () => {
    return (
        <div>
            <div className='flex justify-center py-16 '>
                <span className=' text-white text-[36px] font-900 px-10 text-center'>Affordable Course Packages</span>
            </div>
            <div className='flex gap-8 justify-center py-10'>
                <div className='flex flex-col gap-4 bg-[#121721] p-10 w-[600px] rounded-xl'>
                    <div className='bg-[#246BFD1A] w-[90px] px-2 py-1 rounded-xl'>
                        <span className='text-[#246BFD]'>Self-Paced</span>
                    </div>
                    <span className='text-white text-[24px] font-Lato font-400 line-through'>$1299</span>
                    <span className='text-white text-[48px] font-Lato font-600'>$999</span>
                    <p className='text-white pr-16'>Unlock foundational knowledge with our Basic Plan. Ideal for self-paced learners</p>
                    <hr className='bg-white'/>
                    <div className='flex  gap-4'>
                        <img src={tick} alt="" />
                        <p className='text-[20px] text-white'> Practical Problem-Solving</p>
                    </div>
                    <div className='flex  gap-4'>
                        <img src={tick} alt="" />
                        <p className='text-[20px] text-white'> Practical Problem-Solving</p>
                    </div>
                    <div className='flex  gap-4'>
                        <img src={tick} alt="" />
                        <p className='text-[20px] text-white'> Practical Problem-Solving</p>
                    </div>
                    <button className='bg-[#246BFD] text-white px-10 py-4 rounded-xl'>Start Learning Today</button>
                </div>
                <div className='flex flex-col gap-4 bg-[#121721] p-10 w-[600px] rounded-xl border border-[#FF9300]'>
                    <div className='bg-[#FF93001A] w-[140px] px-2 py-1 rounded-xl'>
                        <span className='text-[#FF9300]'>Mentor Support</span>
                    </div>
                    <span className='text-white text-[24px] font-Lato font-400 line-through'>$1999</span>
                    <span className='text-white text-[48px] font-Lato font-600'>$999</span>
                    <p className='text-white pr-16'>Unlock foundational knowledge with our Basic Plan. Ideal for self-paced learners</p>
                    <hr className='bg-white'/>
                    <div className='flex  gap-4'>
                        <img src={tick} alt="" />
                        <p className='text-[20px] text-white'> Practical Problem-Solving</p>
                    </div>
                    <div className='flex  gap-4'>
                        <img src={tick} alt="" />
                        <p className='text-[20px] text-white'> Practical Problem-Solving</p>
                    </div>
                    <div className='flex  gap-4'>
                        <img src={tick} alt="" />
                        <p className='text-[20px] text-white'> Practical Problem-Solving</p>
                    </div>
                    <button className='bg-[#FF9300] text-white px-10 py-4 rounded-xl'>Upgrade to Premium Excellence</button>
                </div>
            </div>
            <div className='py-10 flex justify-center'>
                <img src={refer} alt="" />
            </div>
        </div>
    )
}
export default Payment