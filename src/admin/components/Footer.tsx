import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const itme = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Contact", link: "/contact" },
  { text: "Apply for Franchise", link: "/franchise" },
  { text: "Admin Panel", link: "/admin/login" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {itme.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    className="text-gray-400 hover:text-[#ff6709] transition-colors duration-200"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#ff6709]" />
                <a
                  href="mailto:contact@martadmin.com"
                  className="text-gray-400 hover:text-[#ff6709] transition-colors duration-200"
                >
                  connect@kiranamarts.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#ff6709]" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-[#ff6709] transition-colors duration-200"
                >
                  +91 7061832560
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#ff6709] mt-1" />
                <span className="text-gray-400">G-6, Sec-G, Noida-201318</span>
              </li>
            </ul>
          </div>

          {/* Socail Medai Acoounts Link */}
          <div>
            <h3 className="mb-4 text-[#ff6709] font-bold text-2xl">
              KiranaMart
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              India's Fastest Growing Retail Network
            </p>
            <div className="flex space-x-4">
              <Link
                to="https://www.facebook.com/kiranaamart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ff6709] transition-colors duration-200"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                to="https://www.instagram.com/kiranamart39"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ff6709] transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400 flex flex-col gap-5 lg:flex-row justify-between p-10">
          <div>
            Devloped by{" "}
            <Link
              to="https://symbosys.com"
              target="_blank"
              className="text-blue-600 font-extrabold"
            >
              Symbosys
            </Link>{" "}
          </div>
          <div>
            © {new Date().getFullYear()} KiranaMart. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
