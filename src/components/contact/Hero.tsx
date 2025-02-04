import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import storImage from "../../assets/img/store/KM 1.png";

const Hero = () => {
  return (
    <div className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={storImage}
            alt="Supermarket"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-7xl font-bold mb-6 text-white leading-tight ">
              Your Neighborhood <span className="text-[#FF6709]">Supermarket</span> Chain
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              India's Fastest Growing Retail Network
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={"/franchise"}>
              <button className="group bg-[#FF6709] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#ff7a2a] transition-all duration-300 flex items-center gap-2">
                Apply for Franchise
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
              <button className="group bg-green-400 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-500 transition-all duration-300 flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero