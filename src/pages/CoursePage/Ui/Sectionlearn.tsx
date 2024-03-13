import tick from '@/assets/images/tick-circle.svg'


const Learn = () => {
    return (
        <div className=''>
            <div className='flex  justify-center'>
                <span className='text-[48px] font-900 pt-0 text-white'> What Our UI/UX Design</span>
            </div>
            <div className='flex justify-center py-10 gap-10'>
                <div className='w-[700px] flex flex-col gap-5'>
                    <div>
                        <p className='text-white text-[14px]'>At Edubraining, we go beyond teaching design—we cultivate problem-solving expertise.  Our hands-on projects immerse you in real-world challenges, shaping a comprehensive skill set in UI/UX design. With our unique learning approach, you'll craft a dynamic portfolio, readying yourself for internships and rewarding career paths. Join us to turn your design skills into a powerful tool for success!</p>
                    </div>
                    <div>
                        <img className='rounded-xl' src="https://s3-alpha-sig.figma.com/img/b84e/5ed4/fd8876006d6a2dbd55bcf7011b696dca?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OYpUHc~lkvZdPAk43cNu7Zz7Lsqifa5kJ-XpX3V~V1lLt6lAY-J8cFyBVwdp7dLfijHx50DC8ARTq28ugmhhHPVPjLZEZrNDEK~SsEGL34zovF81JpcJ09BVWuVdb9E1D35-SBAD5zo--bLcWIOgUtx8rl7wVLEysXy-tE4vXD3o0~vYzjW~e3~1NjZ6JxKA~Yr6TL9QyMazp5WWY6csngsBymkcPjKZGjG79Orcwo7QXVEnClfaX15byFu0zd~iyZqTFh40YEOpncTLQaSSV4VGPUzXGicG2NwqfmR817HHPWmH4mW2cBJDsWNLYtGOK3N99W1EmxI-FynbD3XcDA__" alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='bg-[#121721] w-[500px] p-6 flex flex-col rounded-xl border border-[#2D2E30] '>
                        <div className='flex  gap-4'>
                            <img src={tick} alt="" />
                            <p className='text-[20px] text-white'> Practical Problem-Solving</p>
                        </div>
                        <p className='text-white pl-10'>Tackle real-world challenges, honing your problem-solving expertise.</p>
                    </div>
                    <div className='bg-[#121721] w-[500px] p-6 flex flex-col rounded-xl border border-[#2D2E30] '>
                        <div className='flex  gap-4'>
                            <img src={tick} alt="" />
                            <p className='text-[20px] text-white'> Practical Problem-Solving</p>
                        </div>
                        <p className='text-white pl-10'>Tackle real-world challenges, honing your problem-solving expertise.</p>
                    </div>
                    <div className='bg-[#121721] w-[500px] p-6 flex flex-col rounded-xl border border-[#2D2E30] '>
                        <div className='flex  gap-4'>
                            <img src={tick} alt="" />
                            <p className='text-[20px] text-white'> Practical Problem-Solving</p>
                        </div>
                        <p className='text-white pl-10'>Tackle real-world challenges, honing your problem-solving expertise.</p>
                    </div>
                    <div className='bg-[#121721] w-[500px] p-6 flex flex-col rounded-xl border border-[#2D2E30] '>
                        <div className='flex  gap-4'>
                            <img src={tick} alt="" />
                            <p className='text-[20px] text-white'> Practical Problem-Solving</p>
                        </div>
                        <p className='text-white pl-10'>Tackle real-world challenges, honing your problem-solving expertise.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Learn