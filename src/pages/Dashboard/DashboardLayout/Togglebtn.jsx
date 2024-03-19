import { useState } from "react";


const Togglebtn = () => {
  const [isLightMode, setLightMode] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);

  const handleLightToggle = () => {
    setLightMode(!isLightMode);
    setDarkMode(false);
    setLightMode(true)
  };

  const handleDarkToggle = () => {
    setDarkMode(!isDarkMode);
    setLightMode(false);
    setDarkMode(true)
  };
  return (
    <div className="">
      <div className="border-[#4B494D] border-2 rounded-xl h-[45px] flex items-center justify-between px-1">
    {/* <button className="text-white">Light</button>
    <button className="text-white">Dark</button> */}
     <button
     data-tip="Make light mode"
          className={`${isLightMode ? "text-[#246BFD] rounded-lg bg-[#246BFD1A] px-9 py-1 tooltip" : "text-[#AEABB2] px-9 py-2"} focus:outline-none font-roboto font-normal tooltip`}
          onClick={handleLightToggle}
        >
          Light
        </button>
        <button
        data-tip="Make dark mode"
           className={`${isDarkMode ? "text-[#246BFD] rounded-lg bg-[#246BFD1A] px-9 py-1 tooltip" : "text-[#AEABB2] px-9 py-2"} focus:outline-none font-roboto font-normal tooltip`}
          onClick={handleDarkToggle}
        >
          Dark
        </button>
</div>
    </div>
  );
};

export default Togglebtn;
