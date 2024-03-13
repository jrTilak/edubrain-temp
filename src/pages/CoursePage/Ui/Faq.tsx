import add from '@/assets/images/add-square.svg'

const Faq = () => {
  return (
    <div>
      <div className='flex  justify-center py-16'>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-center'>
            <span className='font font-400 text-[#246BFD] font-Lato text-[24px]'>FAQ</span>
          </div>
          <div className='flex justify-center'>
            <span className='text-[48px] font-900 pt-0 text-white'> Why you should become</span>
          </div>
          <div className='flex justify-center'>
            <p className='text-[16px]  pt-0 text-white'>Uncover quick insights about Edubraining. Get ready for your tech journey by exploring our FAQs. Dive in now!</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col text-white gap-6 py-16'>
          <div className='flex justify-between border border-[#313233] w-[800px] p-3 rounded-xl'>
            <span className='px-16 text-[24px] font-Lato font-400'>How can I get Internship ?</span>
            <img src={add} alt="" />
          </div> 
          <div className='flex justify-between border border-[#313233] w-[800px] p-3 rounded-xl'>
            <span className='px-16 text-[24px] font-Lato font-400'>How can I get Internship ?</span>
            <img src={add} alt="" />
          </div> 
          <div className='flex justify-between border border-[#313233] w-[800px] p-3 rounded-xl'>
            <span className='px-16 text-[24px] font-Lato font-400'>How can I get Internship ?</span>
            <img src={add} alt="" />
          </div> 
          <div className='flex justify-between border border-[#313233] w-[800px] p-3 rounded-xl'>
            <span className='px-16 text-[24px] font-Lato font-400'>How can I get Internship ?</span>
            <img src={add} alt="" />
          </div> 
        </div>
      </div>
      <div className='flex justify-center'>
        <span className='text-[60px] font-500 pt-0 text-white'>Are you Ready to become</span>
      </div>
      <div className='flex justify-center'>
        <span className='text-[60px] font-500 pt-0 text-white'>Master in UI/UX design ?</span>
      </div>
      <div className="flex gap-3 py-2 justify-center">
        <button className="px-4 bg-[#1A1A1F] m-2 text-white text-[16px] rounded-lg py-3">Read More</button>
        <button className="px-8 bg-[#246BFD] text-white m-2 rounded-lg py-3 text-[16px]">Enroll Now</button>
      </div>
    </div>
  )
}

export default Faq