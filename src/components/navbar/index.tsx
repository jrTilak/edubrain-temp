import { Link } from "react-router-dom";
import logo from "@/assets/svg/LOGO.svg";
import menu from "@/assets/icons/menu.svg";
import NAV_LINKS from "./navlinks";
const Navbar = () => {
  return (
    <header className="absolute inset-0 w-full bg-background py-4 h-fit">
      <nav className="flex justify-between items-center wrapper">
        {/* logo */}
        <Link to="/" className="2xl:w-[250px]">
          <img src={logo} className="w-[100px]" />
        </Link>
        {/* links */}
        <ul className="gap-8 text-[#F5F8FF] hidden xl:flex">
          {NAV_LINKS.map((link, index) => (
            <li key={index} className="text-[18px]">
              <Link to={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
        {/* cta buttons */}
        <div className="gap-4 hidden xl:flex">
          <Link
            to="#"
            className="text-center bg-dark font-Roboto rounded-lg px-6 py-3 text-white"
          >
            Login
          </Link>
          <Link
            to="#"
            className="text-center bg-blue font-Roboto rounded-lg px-6 py-3 text-white w-48"
          >
            Enroll Now
          </Link>
        </div>
        <button className="xl:hidden">
          <img src={menu} alt=""  className="h-8 w-8"/>
        </button>
      </nav>
    </header>
  );
};
export default Navbar;
