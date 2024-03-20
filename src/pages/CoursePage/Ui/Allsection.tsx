
import dollar from '@/assets/images/dollar-circle.svg';
import briefcase from '@/assets/icons/briefcase.svg';
import teacher from '@/assets/icons/teacher.svg';
import house from '@/assets/icons/house.svg';
import proflie from '@/assets/icons/profile-2user.svg';
import status from '@/assets/icons/status-up.svg';

const sections = [
    {
        icon: dollar,
        title: "High Earning Potential",
        description: "Tap into high-paying opportunities with your design expertise."
    },
    {
        icon: briefcase,
        title: "Job Market Demand",
        description: "Essential for Digital Success in High Demand Roles."
    },
    {
        icon: teacher,
        title: "Degree-Free Excellence",
        description: "Excel in UI/UX Design without the constraints of a degree."
    },
    {
        icon: house,
        title: "Work-From-Home Ready",
        description: "Unlock career flexibility with the freedom to work from home."
    },
    {
        icon: proflie,
        title: "Creative Community",
        description: "Join a creative community for growth and enrichment."
    },
    {
        icon: proflie,
        title: "Creative Community",
        description: "Join a creative community for growth and enrichment."
    }
];

const Allsection = () => {
    return (
        <>
            <div className='flex justify-center pt-[100px]'>
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
                <div className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 justify-center gap-3">
                    {sections.map((section, index) => (
                        <div key={index} className="bg-[#121721] flex justify-center max-xl:w-[300px] flex-col rounded-xl w-[410px] h-[224px] max-lg:w-[322px] max-sm:w-[300px] gap-3 border border-[#2D2E30]">
                            <div className="flex justify-center">
                                <img src={section.icon} alt="" />
                            </div>
                            <div className="flex justify-center text-white text-[24px]">
                                <span>{section.title}</span>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-[#ABAEB2] text-[16px] px-10 max-sm:px-4 text-center">{section.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex gap-2 justify-center">
                <button className="px-4 max-sm:px-2 bg-[#1A1A1F] m-2 text-white text-[16px] rounded-lg py-3">See the curriculum</button>
                <button className="px-8 max-sm:px-2 bg-[#246BFD] text-white m-2 rounded-lg py-3 text-[16px]">Enroll Now</button>
            </div>
        </>
    );
};

export default Allsection;


// grid grid-cols-3 py-4 px-8 max-sm:px-0 gap-4 max-sm:grid-cols-1 max-lg:grid-cols-2