import Image from "next/image";
import "./header.scss";

const Header = ({ active, setActive }) => {
  
  return (
    <div className="header">
      <div className="header__content">
        <div className="logo flex items-center justify-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain mt-12"
          />
        </div>
        <div className=" p-0.5">
          <div
            className={`hamburger-menu  ${active ? "active" : ""}  `}
            onClick={() => setActive(!active)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
