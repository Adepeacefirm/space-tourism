import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/sharedd/logo.svg";
import icon_hamburger from "../assets/sharedd/icon-hamburger.svg";
import icon_close from "../assets/sharedd/icon-close.svg";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const Navbar = () => {
  const { activePage, setActivePage } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setShowMenu(false);
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("resize", handleResize);

    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);
  return (
    <header className="flex justify-between sm:justify-start lg:justify-between sm:gap-5 px-5 lg:pl-10 sm:pr-0 sm:pt-0 lg:pt-5 py-7">
      <img
        className="w-[clamp(2rem,8%,2.5rem)] sm:py-5"
        src={logo}
        alt="logo"
      />
      <img
        onClick={() => setShowMenu(true)}
        className="w-[8%] h-5 mt-1 sm:hidden"
        src={icon_hamburger}
        alt="menu icon"
      />
      <div className="hidden lg:flex items-center h-[1px] w-[40%] mt-10 -mr-35 bg-white/50"></div>
      <nav className="hidden sm:flex justify-end pr-5 gap-10 sm:pr-10 text-white items-center bg-white/8 w-full lg:w-[50%]">
        <NavLink
          onClick={() => setActivePage("home")}
          to={"/"}
          className={({ isActive }) =>
            `flex gap-2 pb-2 border-b-2 border-transparent transition duration-500 ease-in-out hover:border-b-white/50 ${
              isActive && "border-b-white"
            }`
          }
        >
          <span className="lg:inline-block font-bold">00</span>HOME
        </NavLink>
        <NavLink
          onClick={() => setActivePage("destination")}
          to={"/destination"}
          className={({ isActive }) =>
            `flex gap-2 pb-2 border-b-2 border-transparent transition duration-500 ease-in-out hover:border-b-white/50 ${
              isActive && "border-b-white"
            }`
          }
        >
          <span className="font-bold">01</span>DESTINATION
        </NavLink>
        <NavLink
          onClick={() => setActivePage("crew")}
          to={"/crew"}
          className={({ isActive }) =>
            `flex gap-2 pb-2 border-b-2 border-transparent transition duration-500 ease-in-out hover:border-b-white/50 ${
              isActive && "border-b-white"
            }`
          }
        >
          <span className="font-bold">02</span>CREW
        </NavLink>
        <NavLink
          onClick={() => setActivePage("technology")}
          to={"/technology"}
          className={({ isActive }) =>
            `flex gap-2 pb-2 border-b-2 border-transparent transition duration-500 ease-in-out hover:border-b-white/50 ${
              isActive && "border-b-white"
            }`
          }
        >
          <span className="font-bold">03</span>TECHNOLOGY
        </NavLink>
      </nav>
      {showMenu && (
        <nav className="sm:hidden fixed top-0 right-0 w-[70%] text-white bg-white/5 backdrop-blur-lg flex flex-col p-7 gap-5 h-screen z-50">
          <img
            onClick={() => setShowMenu(false)}
            className="w-[12%] ml-auto mb-10"
            src={icon_close}
            alt="Menu Close"
          />
          <NavLink
            onClick={() => {
              setShowMenu(false);
              setActivePage("home");
            }}
            to={"/"}
            className={({ isActive }) =>
              `flex gap-3 ${isActive && "border-r-2 border-r-white"}`
            }
          >
            <span className="font-bold">00</span> HOME
          </NavLink>
          <NavLink
            onClick={() => {
              setShowMenu(false);
              setActivePage("destination");
            }}
            to={"/destination"}
            className={({ isActive }) =>
              `flex gap-3 ${isActive && "border-r-2 border-r-white"}`
            }
          >
            <span className="font-bold">01</span> DESTINATION
          </NavLink>
          <NavLink
            onClick={() => {
              setShowMenu(false);
              setActivePage("crew");
            }}
            to={"/crew"}
            className={({ isActive }) =>
              `flex gap-3 ${isActive && "border-r-2 border-r-white"}`
            }
          >
            <span className="font-bold">02</span> CREW
          </NavLink>
          <NavLink
            onClick={() => {
              setShowMenu(false);
              setActivePage("technology");
            }}
            to={"/technology"}
            className={({ isActive }) =>
              `flex gap-3 ${isActive && "border-r-2 border-r-white"}`
            }
          >
            <span className="font-bold">03</span> TECHNOLOGY
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
