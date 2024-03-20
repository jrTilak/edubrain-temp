import React, { useState } from 'react';
import tick from '@/assets/images/tick-circle.svg';

interface Advantage {
    title: string;
    description: string;
}

const Learn: React.FC = () => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const paragraphContent: string = expanded
        ? "At Edubraining, we go beyond teaching design—we cultivate problem-solving expertise. Our hands-on projects immerse you in real-world challenges, shaping a comprehensive skill set in UI/UX design. With our unique learning approach, you'll craft a dynamic portfolio, readying yourself for internships and rewarding career paths. Join us to turn your design skills into a powerful tool for success!....Join us to turn your design skills into a powerful tool for success!...."
        : "At Edubraining, we go beyond teaching design—we cultivate problem-solving expertise. Our hands-on projects immerse you in real-world challenges, shaping a comprehensive skill set in UI/UX design. With our unique learning approach, you'll craft a dynamic portfolio, readying yourself for internships and rewarding career paths.";

    return (
        <div className='py-16'>
            <div className='flex justify-center'>
                <span className='text-[48px] font-900 text-white text-center max-sm:text-[36px]'>Why you should learn with us?</span>
            </div>
            <div className='flex justify-center gap-6 max-lg:flex-col m-4 max-sm:m-2 max-lg:m-2'>
                <div className='flex justify-center'>
                    <div className='flex flex-col gap-5 w-[737px] max-lg:w-[664px] max-sm:w-[320px]'>
                        <p className=' text-[16px] max-sm:text-[12px]  text-[#ABAEB2] '>
                            {paragraphContent}
                            <span className='lg:hidden'>
                                <a className="text-white cursor-pointer" onClick={toggleExpand}>
                                    {expanded ? "Read Less" : "Read More"}
                                </a>
                            </span>
                        </p>
                        <div>
                            <img className='rounded-xl' src="https://s3-alpha-sig.figma.com/img/b84e/5ed4/fd8876006d6a2dbd55bcf7011b696dca?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OYpUHc~lkvZdPAk43cNu7Zz7Lsqifa5kJ-XpX3V~V1lLt6lAY-J8cFyBVwdp7dLfijHx50DC8ARTq28ugmhhHPVPjLZEZrNDEK~SsEGL34zovF81JpcJ09BVWuVdb9E1D35-SBAD5zo--bLcWIOgUtx8rl7wVLEysXy-tE4vXD3o0~vYzjW~e3~1NjZ6JxKA~Yr6TL9QyMazp5WWY6csngsBymkcPjKZGjG79Orcwo7QXVEnClfaX15byFu0zd~iyZqTFh40YEOpncTLQaSSV4VGPUzXGicG2NwqfmR817HHPWmH4mW2cBJDsWNLYtGOK3N99W1EmxI-FynbD3XcDA__" alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='flex flex-col max-sm:w-[300px] max-lg:w-[700px] gap-10 max-lg:gap-3 max-sm:gap-4'>
                        {advantages.map((advantage: Advantage, index: number) => (
                            <div key={index} className='bg-[#121721] p-6 flex gap-4 flex-col rounded-xl border border-[#2D2E30]'>
                                <div className='flex gap-4'>
                                    <img src={tick} alt="" />
                                    <p className='text-[20px] text-white'>{advantage.title}</p>
                                </div>
                                <p className='text-[#ABAEB2] pl-10'>{advantage.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const advantages: Advantage[] = [
    {
        title: 'Practical Problem-Solving',
        description: 'Tackle real-world challenges, honing your problem-solving expertise.'
    },
    {
        title: 'Comprehensive Learning Journey',
        description: 'Navigate a holistic learning path for a well-rounded education.'
    },
    {
        title: 'Portfolio Powerhouse',
        description: 'Craft a robust portfolio showcasing your diverse design capabilities.'
    },
    {
        title: 'Internship and Career Readiness',
        description: 'Prepare for internships and high-paying careers with confidence.'
    },
];

export default Learn;
