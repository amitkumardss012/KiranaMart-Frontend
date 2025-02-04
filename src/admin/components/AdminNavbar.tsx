import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Logo from "../../assets/img/logo/KIRANA_MART_logo_2-removebg-preview.png";
import { openAddAdminPopUp, openAddAppLink } from "../../utils/recoil";

const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const setOpen = useSetRecoilState(openAddAdminPopUp);
  const open = useRecoilValue(openAddAdminPopUp);
  const setOpenApp = useSetRecoilState(openAddAppLink)
  console.log(open)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
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
          <div className="hidden md:flex items-center space-x-6">
            <button className="bg-green-400 text-black font-semibold px-4 py-2 rounded font-sans shadow-md hover:scale-105 hover:bg-[#FF6709] hover:text-white transition-all duration-300 w-36" onClick={() => setOpenApp(prev => !prev)}>
            {localStorage.getItem("playStoreLink") ? "Update Link" : "Add App Link"}
            </button>
            <button className="bg-[#FF6709] text-white font-semibold px-4 py-2 rounded font-sans shadow-md hover:scale-105 hover:bg-green-400 hover:text-black transition-all duration-300 w-40" onClick={() => setOpen(prev => !prev)}>
              Add Admin
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black font-bold hover:text-[#FF6709] transition-colors duration-200 relative z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="text-white font-extrabold z-50" size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Slide from left */}
        <div
          className={`fixed top-0 left-0 bottom-0 w-[80%] bg-[#FF6709] p-4 transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden z-40`}
        >
          <div className="flex flex-col space-y-4 mt-8">
            <button
              className="flex items-center text-white hover:bg-green-400 px-4 py-2 rounded transition-colors duration-200"
              onClick={() => {
                setOpenApp(prev => !prev)
                toggleMenu()
              }}
              aria-label="Search"
            >
              {localStorage.getItem("playStoreLink") ? "Update App Link" : "Add App Link"}
            </button>
            <button
              className="flex items-center text-white hover:bg-green-400 px-4 py-2 rounded transition-colors duration-200"
              aria-label="User profile"
              onClick={() => {
                setOpen(prev => !prev)
                toggleMenu()
              }}
            >
              Add Admin
            </button>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
};

export default AdminNavbar;

