import { Link } from "react-router-dom";
import logo from "@/assets/svg/LOGO.svg";
import menu from "@/assets/icons/menu.svg";
import close from "@/assets/images/close.svg";
import NAV_LINKS from "./navlinks";
import { useRef } from "react";
const Navbar = () => {
  const asideBarRef = useRef(null as any);
  return (
    <>
      <header className="absolute inset-0 w-full bg-background py-4 h-fit z-40">
        <nav className="flex justify-between items-center wrapper">
          {/* logo */}
          <Link to="/" className="2xl:w-[250px]">
            <img src={logo} className="w-[100px]" />
          </Link>
          {/* links */}
          <ul className="gap-8 text-[#F5F8FF] hidden xl:flex">
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="text-[18px]">
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
          {/* cta buttons */}
          <div className="gap-4 hidden xl:flex">
            <Link
              to="/dashboard/myCourse"
              className="text-center bg-dark font-Roboto rounded-lg px-6 py-3 text-white"
            >
              Rahul
            </Link>
            <Link
              to="#"
              className="text-center bg-blue font-Roboto rounded-lg px-6 py-3 text-white w-48"
            >
              Enroll Now
            </Link>
          </div>
          <button
            onClick={() => {
              asideBarRef?.current?.classList.add("translate-x-0");
              asideBarRef?.current?.classList.remove("translate-x-full");
            }}
            className="xl:hidden"
          >
            <img src={menu} alt="" className="h-8 w-8" />
          </button>
        </nav>
      </header>
      {/* for mobile devices */}
      <aside
        ref={asideBarRef}
        className="fixed top-0 left-0 right-0 bottom-0 z-50 w-screen h-dvh bg-background px-6 sm:px-12 py-9 xl:hidden translate-x-full transition-all"
      >
        <nav className="flex justify-between flex-col h-full">
          {/* logo */}
          <div className="flex justify-between items-center w-full gap-4">
            <Link to="/" className="2xl:w-[250px]">
              <img src={logo} className="w-[100px]" />
            </Link>
            <button
              onClick={() => {
                asideBarRef?.current?.classList.remove("translate-x-0");
                asideBarRef?.current?.classList.add("translate-x-full");
              }}
            >
              <img src={close} alt="" className="h-8 w-8" />
            </button>
          </div>

          {/* links */}
          <ul className="gap-8 text-[#F5F8FF] flex flex-col">
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="text-[18px]">
                <Link to={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
          {/* cta buttons */}
          <div className="flex gap-4">
            <Link
              to="#"
              className="text-center bg-dark w-full font-Roboto rounded-lg px-6 py-3 text-white"
            >
              Login
            </Link>
            <Link
              to="#"
              className="text-center bg-blue w-full font-Roboto rounded-lg px-6 py-3 text-white"
            >
              Enroll Now
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
};
export default Navbar;
