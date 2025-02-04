import React, { useState } from "react";
import { Link } from "react-router-dom";
import SuperMartLogo from "../../assets/img/logo/KIRANA_MART_logo_2-removebg-preview.png";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Download App", href: "/download" },
  { name: "About us", href: "/about" },
  { name: "Contact us", href: "/contact" },
]

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <div className="bg-[#FFFDD0] h-20 flex justify-center fixed w-full top-0 z-50 shadow-md">
        <div className="flex justify-between h-full w-[90%] max-w-screen-xl px-4">
          <Link to="/">
            <div className="h-full flex items-center">
              <img src={SuperMartLogo} className="h-full max-h-[80%]" alt="SuperMart Logo" />
            </div>
          </Link>

          <div className="hidden md:flex h-full items-center gap-3 sm:gap-5 md:gap-10 font-semibold text-green-900 text-sm md:text-base">
            {navItems.map((item, index) => (
              <Link key={index} to={item.href} className="relative group">
                <span className="group-hover:text-green-700 transition-all duration-300">
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-green-700 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            ))}
            <Link to="/franchise">
              <button className="bg-white text-black px-4 py-2 rounded font-sans shadow-md hover:scale-105 hover:bg-[#FF6709] hover:text-white transition-all duration-300">
                Apply For Franchise
              </button>
            </Link>
          </div>  

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`text-green-900 text-3xl relative focus:outline-none transition-all duration-300 ease-in-out`}
            >
              {isMenuOpen ? (
                <FiX
                  className={`w-7 h-7 transform transition-all duration-500 ease-in-out ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              ) : (
                <FiMenu
                  className={`w-7 h-7 transform transition-all duration-500 ease-in-out ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

const MobileMenu: React.FC<{ isOpen: boolean; toggleMenu: () => void }> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      <div
        className={`absolute top-20 right-0 h-full w-4/5 max-w-sm bg-[#FF6709] text-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 p-8 text-lg font-medium">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={`${item.href}`}
              onClick={toggleMenu}
              className="relative group"
            >
              <span className="group-hover:text-white transition-all duration-300">
                {item.name}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          ))}
          <Link to="#" onClick={toggleMenu}>
            <button className="bg-white text-[#FF6709] px-5 py-2 rounded shadow-md hover:scale-105 hover:bg-orange-300 hover:text-orange-900 transition-all duration-300">
              Apply For Franchisee
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

