import {
  Building2,
  DollarSign,
  Laptop2,
  PaintBucket,
  Shield,
} from "lucide-react";
import { FaLuggageCart } from "react-icons/fa";


const CandidateProfile = () => {
  return (
    <>
      <div className="flex justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform hover:scale-[1.01] transition-all duration-300 w-[90%]">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Candidate Profile
            </h2>
            <p className="text-gray-600">Franchise requirements and costs</p>
          </div>
          <div className="h-12 w-12 bg-green-400/10 rounded-full flex items-center justify-center">
            <DollarSign className="text-green-400 w-6 h-6" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="flex items-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:bg-white hover:border-green-400 transition-all duration-200">
            <Building2 className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600">Area/Size</p>
              <p className="font-semibold text-gray-800">
                500 Sqft to 1000 Sqft
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:bg-white hover:border-green-400 transition-all duration-200">
            <DollarSign className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600">Franchise Fees</p>
              <p className="font-semibold text-gray-800">Rs 210,000/- + GST</p>
            </div>
          </div>
          <div className="flex items-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:bg-white hover:border-green-400 transition-all duration-200">
            <Laptop2 className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600">Software Fee</p>
              <p className="font-semibold text-gray-800">
                Rs 50,000/- Per Login
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:bg-white hover:border-green-400 transition-all duration-200">
            <FaLuggageCart className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600">Product Cost (Minimum Order)</p>
              <p className="font-semibold text-gray-800">
                Rs 1000/- Per Sqft Approx*
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:bg-white hover:border-green-400 transition-all duration-200">
            <PaintBucket className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600">Interior Cost</p>
              <p className="font-semibold text-gray-800">
                Rs 1000-1200/- Per Sqft
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:bg-white hover:border-green-400 transition-all duration-200">
            <Shield className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600">Security Deposit</p>
              <p className="font-semibold text-gray-800">Rs 100,000/-</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CandidateProfile;
 