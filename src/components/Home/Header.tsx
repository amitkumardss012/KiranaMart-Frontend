import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo/KIRANA_MART_logo_2-removebg-preview.png";

const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#FFFDD0] text-white shadow-lg z-50 h-20">
      <div className="container mx-auto px-4 py-4 h-full w-[90%]">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/" className="flex items-center gap-2">
              <img src={Logo} alt="Kirama Mart" className="h-16" />
            </Link>
          </div>

          {/* Desktop Icons */}
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`text-green-900 text-3xl relative focus:outline-none transition-all duration-300 ease-in-out`}
            >
              {isMenuOpen ? (
                <FiX className="w-7 h-7" />
              ) : (
                <FiMenu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slide from right */}
        <div
          className={`absolute top-full right-0 h-[calc(100vh-5rem)] w-4/5 max-w-sm bg-[#FF6709] text-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
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
            <Link to="/franchise" onClick={toggleMenu}>
              <button className="bg-white text-[#FF6709] px-5 py-2 rounded shadow-md hover:scale-105 hover:bg-orange-300 hover:text-orange-900 transition-all duration-300">
                Apply For Franchise
              </button>
            </Link>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
};

export default AdminNavbar;

const navItems = [
  { name: "Download App", href: "/download" },
  { name: "About us", href: "/about" },
  { name: "Contact us", href: "/contact" },
];