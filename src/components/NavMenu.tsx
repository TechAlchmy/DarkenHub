import { FaUser, FaUserCircle } from "react-icons/fa";
import { IoCube, IoKeySharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "./common/Logo";

const NavMenu = () => {
  return (
    <div className="max-w-[987.5px] w-full mx-auto h-[70px] nav-menu rounded-xl element-with-border flex justify-between items-center px-4 my-10">
      <Link to="/">
        <Logo />
      </Link>
      <ul className="flex items-center gap-10">
        <li>
          <Link
            to="#"
            className="inline-flex uppercase text-white text-xs font-bold font-jakarta items-center gap-1"
          >
            <IoCube /> DASHBOARD
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="inline-flex uppercase text-white text-xs font-bold font-jakarta gap-1 items-center"
          >
            <FaUser /> Profile
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="inline-flex uppercase text-white text-xs font-bold font-jakarta items-center gap-1"
          >
            <FaUserCircle /> SIGN UP
          </Link>
        </li>
      </ul>
      <Link
        to="/signin"
        className="flex items-center justify-center bg-[#0075FF] text-white rounded-xl w-[149.3px] h-[34.97px] font-bold text-xs font-jakarta gap-1"
      >
        <IoKeySharp /> SIGN IN
      </Link>
    </div>
  );
};

export default NavMenu;
