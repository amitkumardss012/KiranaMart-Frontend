import { ArrowRight, Globe, Mail, MapPin, Phone } from 'lucide-react';
import Bakery_Cake from "../assets/img/product_offered/cake.png";
import Beverages from "../assets/img/product_offered/cocktail.png";
import Grocery from "../assets/img/product_offered/grocery.png";
import HealthCare from "../assets/img/product_offered/healthcare.png";
import Snacks from "../assets/img/product_offered/popcorn.png";
import storImage from "../assets/img/store/KM 1.png";
import Hero from '../components/contact/Hero';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="min-h-screen bg-white mt-20">
      {/* Hero Section */}
      <Hero />

      {/* Contact Information */}
      <div className="container mx-auto px-4 mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="bg-[#FF6709]/10 p-3 rounded-lg group-hover:bg-[#FF6709] transition-colors duration-300">
                <Phone className="text-[#FF6709] group-hover:text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Phone</h3>
            </div>
            <p className="text-gray-600">+91 7061832560</p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="bg-[#FF6709]/10 p-3 rounded-lg group-hover:bg-[#FF6709] transition-colors duration-300">
                <Mail className="text-[#FF6709] group-hover:text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Email</h3>
            </div>
            <p className="text-gray-600">connect@kiranamarts.com</p>
          </div>

          {/* Website Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="bg-[#FF6709]/10 p-3 rounded-lg group-hover:bg-[#FF6709] transition-colors duration-300">
                <Globe className="text-[#FF6709] group-hover:text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Website</h3>
            </div>
            <p className="text-gray-600">www.kiranamarts.com</p>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="bg-[#FF6709]/10 p-3 rounded-lg group-hover:bg-[#FF6709] transition-colors duration-300">
                <MapPin className="text-[#FF6709] group-hover:text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Address</h3>
            </div>
            <p className="text-gray-600">G-6, Sec-G, Noida-201318</p>
          </div>
        </div>

        {/* Franchise Section */}
        <div className="mt-24 relative h-[500px] rounded-2xl overflow-hidden group">
          <img
            src={storImage}
            alt="Supermarket Interior"
            className="w-full h-full group-hover:scale-105 transition-transform duration-700 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Build Your Dream Supermarket With Us
              </h2>
              <p className="text-gray-200 mb-8 text-lg">
                We help you live your dreams. Our franchise promise returns and happiness. Join India's fastest growing supermarket chain.
              </p>
              <Link to="/franchise">
              <button className="group bg-[#FF6709] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#ff7a2a] transition-all duration-300 flex items-center gap-2 mx-auto">
                Apply for Franchise
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button></Link>
            </div>
          </div>
        </div>

        {/* Products Offered Section */}
        <div className="mt-24 py-20 bg-gradient-to-b from-white via-orange-50 to-white">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Products Offered <span className="text-[#FF6709]">Kirana Mart</span> Franchise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Product Cards */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF6709]/0 to-[#FF6709] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="relative p-8">
                <div className="w-20 h-20 bg-[#FF6709]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={Snacks}
                    alt="Snacks"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-500">Snacks & Branded Foods</h3>
                <p className="text-green-500 font-medium group-hover:text-white/90 transition-colors duration-500">Available</p>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF6709]/0 to-[#FF6709] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="relative p-8">
                <div className="w-20 h-20 bg-[#FF6709]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={Bakery_Cake}
                    alt="Bakery"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-500">Bakery, Cakes & Dairy</h3>
                <p className="text-green-500 font-medium group-hover:text-white/90 transition-colors duration-500">Available</p>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF6709]/0 to-[#FF6709] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="relative p-8">
                <div className="w-20 h-20 bg-[#FF6709]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Fruits"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-500">Fruits & Vegetables</h3>
                <p className="text-green-500 font-medium group-hover:text-white/90 transition-colors duration-500">Available</p>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF6709]/0 to-[#FF6709] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="relative p-8">
                <div className="w-20 h-20 bg-[#FF6709]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={HealthCare}
                    alt="Healthcare"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-500">Healthcare & Beauty</h3>
                <p className="text-green-500 font-medium group-hover:text-white/90 transition-colors duration-500">Available</p>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF6709]/0 to-[#FF6709] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="relative p-8">
                <div className="w-20 h-20 bg-[#FF6709]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={Beverages}
                    alt="Beverages"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-500">Beverages</h3>
                <p className="text-green-500 font-medium group-hover:text-white/90 transition-colors duration-500">Available</p>
              </div>
            </div>

              
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF6709]/0 to-[#FF6709] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="relative p-8">
                <div className="w-20 h-20 bg-[#FF6709]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={Grocery}
                    alt="Grocery"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-500">Grocery, Oil & Masala</h3>
                <p className="text-green-500 font-medium group-hover:text-white/90 transition-colors duration-500">Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;




