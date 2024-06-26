import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  acLogo,
  accLogoMobile,
  bNav,
  downArr,
  gNav,
  hamIcon,
  mNav,
  smallLinkIcon,
  smallXicon,
  xNav,
  closeIcon,
} from "../assets/Images"; // Ensure these are correctly imported

const Navbar = ({ navColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const menuPhoneRef = useRef(null);
  const mainRef = useRef(null);

  const hamIconRef = useRef(null); // Ref for hamburger icon
  const closeIconRef = useRef(null); // Ref for close icon

  const toggleMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // const handleClickOutside = (event) => {
  //   if (menuRef.current && !menuRef.current.contains(event.target)) {
  //     closeMenu();
  //   }
  // };

  const handleClickOutside = (event) => {
    // Check if the click is outside the menu and not on hamIcon or closeIcon
    // if (
    //   menuRef.current &&
    //   !menuRef.current.contains(event.target) &&
    //   !hamIconRef.current.contains(event.target) &&
    //   !closeIconRef.current.contains(event.target)
    // )
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      menuPhoneRef.current &&
      !menuPhoneRef.current.contains(event.target) &&
      mainRef.current &&
      !mainRef.current.contains(event.target)
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={`border-b border-gray-300 z-50 ${navColor}`}>
      <div className="max-container relative lg:px-20 px-5 w-full lg:min-h-[16vh] h-[70px] flex items-center justify-between">
        <div>
          <Link to="/">
            <img
              src={accLogoMobile}
              alt="Logo"
              className="w-[200px] mt-0 lg:block hidden"
            />
          </Link>
          <Link to="/">
            <img
              src={accLogoMobile}
              alt="Logo"
              className="w-[160px] mt-0 lg:hidden block"
            />
          </Link>
        </div>

        <div className="ml-20 lg:flex hidden space-x-24 font-poppins font-medium text-[15px]">
          <NavLink
            to="/about"
            className="list-none cursor-pointer hover:text-[#244896]"
            activeClassName="active"
          >
            About
          </NavLink>
          <div className="relative">
            <NavLink
              to="/product"
              className="list-none cursor-pointer flex items-center hover:text-[#244896]"
              activeClassName="active"
            >
              Products
              {/* <img src={downArr} alt="Dropdown Arrow" className="ml-1 w-4 h-4" /> */}
            </NavLink>
          </div>
          <NavLink
            to="/pricing"
            className="list-none cursor-pointer hover:text-[#244896]"
            activeClassName="active"
          >
            Pricing
          </NavLink>
          <NavLink
            to="/support"
            className="list-none cursor-pointer hover:text-[#244896]"
            activeClassName="active"
          >
            Support
          </NavLink>
          <div
            className="lg:flex hidden items-center space-x-9 w-[30px]"
            ref={menuRef}
          >
            {isMenuOpen ? (
              <img
                src={closeIcon}
                alt="close"
                onClick={closeMenu}
                className="cursor-pointer w-[20px]"
                ref={closeIconRef}
              />
            ) : (
              <img
                src={hamIcon}
                alt="ham"
                onClick={toggleMenu}
                className="cursor-pointer"
                ref={hamIconRef}
              />
            )}
          </div>
        </div>

        <div className="lg:hidden block" ref={menuPhoneRef}>
          {isMenuOpen ? (
            <img
              src={closeIcon}
              alt="close"
              onClick={closeMenu}
              className="cursor-pointer w-[20px]"
              ref={closeIconRef}
            />
          ) : (
            <img
              src={hamIcon}
              alt="ham"
              onClick={toggleMenu}
              className="cursor-pointer"
              ref={hamIconRef}
            />
          )}
        </div>

        {isMenuOpen && (
          <div className="absolute top-20 right-0 lg:right-20 w-fit font-poppins bg-[#ffffff] shadow-lg zIndex lg:flex lg:justify-center" ref={mainRef}>
            <div className="lg:max-w-5xl w-full p-5 lg:p-10 bg-white">
              <div className="grid grid-cols-2 mb-5 px-5 lg:hidden gap-6 font-poppins text-[15px]">
                <NavLink
                  to="/about"
                  className="list-none cursor-pointer"
                  activeClassName="active"
                >
                  About
                </NavLink>
                <div className="relative">
                  <NavLink
                    to="/product"
                    className="list-none cursor-pointer flex items-center"
                    activeClassName="active"
                  >
                    Products
                    {/* <img src={downArr} alt="Dropdown Arrow" className="ml-1 w-4 h-4" /> */}
                  </NavLink>
                </div>
                <NavLink
                  to="/pricing"
                  className="list-none cursor-pointer"
                  activeClassName="active"
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="/support"
                  className="list-none cursor-pointer"
                  activeClassName="active"
                >
                  Support
                </NavLink>
                <div className="lg:flex hidden items-center space-x-8">
                  <img
                    src={hamIcon}
                    alt="ham"
                    onClick={toggleMenu}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <hr className="block lg:hidden" />
              <div className="grid py-5 lg:py-0 grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
                <NavLink
                  to="/bloom"
                  className="flex items-start lg:block space-x-2 lg:space-x-0 px-4 py-2 lg:text-center text-[12px] lg:text-xl font-medium text-[#161C2DCC] hover:text-[#244896]"
                  activeClassName="active"
                >
                  <img
                    src={bNav}
                    alt="Nav"
                    className="w-[35px] lg:w-[58px] lg:mb-4 lg:mx-auto"
                  />
                  <div>
                    Bloom
                    <p className="text-[8px] lg:text-[15px] opacity-70 mt-1 lg:mt-2">
                      Trading Platform
                    </p>
                  </div>
                </NavLink>
                <NavLink
                  to="/math"
                  className="flex items-start justify-start lg:block px-4 py-2 lg:text-center text-[12px] lg:text-xl font-medium text-[#161C2DCC] hover:text-[#244896]"
                  activeClassName="active"
                >
                  <img
                    src={mNav}
                    alt="Nav"
                    className="w-[35px] lg:w-[59px] mb-4 lg:mx-auto"
                  />
                  <div className="ml-2 lg:ml-0">
                    Math
                    <p className="text-[8px] lg:text-[15px] opacity-70 mt-1 lg:mt-2">
                      Trading Platform: <br />
                      Powered by XTS
                    </p>
                  </div>
                </NavLink>
                <NavLink
                  to="/gullak"
                  className="flex items-start lg:block px-4 py-2 ml-2 space-x-2 lg:space-x-0 lg:ml-0 lg:text-center text-[12px] lg:text-xl font-medium text-[#161C2DCC] hover:text-[#244896]"
                  activeClassName="active"
                >
                  <img
                    src={gNav}
                    alt="Nav"
                    className="w-[30px] lg:w-[42px] mb-4 lg:mx-auto"
                  />
                  <div>
                    Gullak
                    <p className="text-[8px] lg:text-[15px] opacity-70 mt-1 lg:mt-2">
                      Mutual Funds
                    </p>
                  </div>
                </NavLink>
                <NavLink
                  to="/xts-api"
                  className="flex items-start space-x-2 lg:space-x-0 justify-start lg:block px-4 py-2 lg:text-center text-[12px] lg:text-xl font-medium text-[#161C2DCC] hover:text-[#244896]"
                  activeClassName="active"
                >
                  <img
                    src={xNav}
                    alt="Nav"
                    className="w-[35px] lg:w-[58px] mb-4 lg:mx-auto"
                  />
                  <div>
                    XTS API
                    <p className="text-[8px] lg:text-[15px] opacity-70 mt-1 lg:mt-2">
                      Trading API
                    </p>
                  </div>
                </NavLink>
              </div>
              <hr className="block lg:hidden" />
              <div className="grid grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-10 px-5 ">
                <div className="mt-5 space-y-3 lg:mt-0">
                  <h4 className="font-medium lg:font-semibold text-[12px] lg:text-lg text-[#161C2DCC]">
                    Back Office
                  </h4>
                  <Link
                    to="https://backoffice.acagarwal.com:8092/login.aspx?ReturnUrl=%2fdefault.aspx"
                    className="block text-[10px] lg:text-base font-medium hover:text-[#244896] text-[#161C2DCC]"
                    target="_blank"
                  >
                    Client Login
                  </Link>
                  <Link
                    target="_blank"
                    to="https://backoffice.acagarwal.com:8093/"
                    className="block text-[10px] lg:text-base font-medium hover:text-[#244896] text-[#161C2DCC]"
                  >
                    Partner Login
                  </Link>
                  <Link
                    target="_blank"
                    to="https://bo.acagarwal.com/Webgroup/"
                    className="block text-[10px] lg:text-base font-medium hover:text-[#244896] text-[#161C2DCC]"
                  >
                    New Client Login
                  </Link>
                  <Link
                    to="https://bo.acagarwal.com/WebLogin/index.cfm?Logintype=Branch"
                    className="block text-[10px] lg:text-base font-medium hover:text-[#244896] text-[#161C2DCC]"
                    target="_blank"
                  >
                    New Partner Login
                  </Link>
                </div>
                <div className="mt-5 space-y-3 lg:mt-0">
                  <h4 className="font-medium lg:font-semibold text-xs lg:text-lg text-[#161C2DCC]">
                    Utilities
                  </h4>
                  <Link
                    to="https://kyc.acagarwal.com/ipo"
                    target="_blank"
                    className="block text-[10px] lg:text-base hover:text-[#244896] font-medium text-[#161C2DCC]"
                  >
                    Apply IPO
                  </Link>
                  <Link
                    to="/support"
                    className="block text-[10px] lg:text-base hover:text-[#244896] font-medium text-[#161C2DCC]"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="https://kyc.acagarwal.com/"
                    target="_blank"
                    className="block text-[10px] lg:text-base hover:text-[#244896] font-medium text-[#161C2DCC]"
                  >
                    Open Account
                  </Link>
                </div>

                <div className="mt-5 flex items-start space-x-2 lg:space-x-0 lg:block lg:mt-0">
                  <h4 className="font-medium lg:font-semibold text-xs lg:text-lg text-[#161C2DCC] mb-4">
                    Connect with us
                  </h4>
                  <div className="flex space-x-2 lg:space-x-5 items-start">
                    <Link
                      to="https://x.com/acagarwal_in?s=11&mx=2"
                      target="_blank"
                      className="block text-black "
                    >
                      <img src={smallXicon} alt="X icon" className="w-4 lg:w-10 " />
                    </Link>
                    <Link
                      to="https://www.linkedin.com/company/ac-agarwal-share-brokers/"
                      target="_blank"
                      className="block"
                    >
                      <img
                        src={smallLinkIcon}
                        alt="Link icon"
                        className="w-4 lg:w-10 "
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
