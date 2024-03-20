//@ts-nocheck

const CarouselBtn = ({btnpressprev, btnpressnext, slideName}) => {

    return (
        <div className="flex items-center gap-6 text-[#F9F5FF] text-[24px]">
      <svg
      onClick={() => {
        btnpressprev(slideName)
        
      }}
        
        className="cursor-pointer hover:bg-[#246BFD] rounded transition duration-300"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15 19.9201L8.48003 13.4001C7.71003 12.6301 7.71003 11.3701 8.48003 10.6001L15 4.08014"
          stroke="#F9F5FF"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
     onClick={() => {
      btnpressnext(slideName)
      
    }}
        className="cursor-pointer hover:bg-[#246BFD] rounded transition duration-300"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M8.90997 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.90997 4.08014"
          stroke="#F9F5FF"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    );
};

export default CarouselBtn;