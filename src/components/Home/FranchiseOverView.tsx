import {
  BookOpen,
  Boxes,
  Building2,
  Clock,
  DollarSign,
  Gift,
  Headphones,
  MapPin,
  Percent,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Store,
  Target,
  TrendingUp,
  Users,
  Warehouse,
} from "lucide-react";

export const FranchiseOverView = () => {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full opacity-5 [background:radial-gradient(#FF6709_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-4xl font-bold text-gray-900 sm:text-5xl">
            Franchise Overview
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Investment Details */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FF6709] to-[#FF8F4D] p-8 text-white">
              <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rotate-12 transform opacity-10">
                <DollarSign className="h-full w-full" />
              </div>
              <div className="relative">
                <DollarSign className="mb-6 h-12 w-12" />
                <h3 className="mb-6 text-2xl font-bold">Investment Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Gift className="h-5 w-5" />
                    <span>Franchise Fees: ₹2,00,000/- + GST</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Percent className="h-5 w-5" />
                    <span>Royalty: 3% After 3 Months</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Target className="h-5 w-5" />
                    <span>Monthly Return: In Months</span>
                  </li>
                </ul>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
            </div>

            {/* Business Details */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_80px_rgba(0,0,0,0.1)]">
              <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rotate-12 transform opacity-5">
                <Store className="h-full w-full" />
              </div>
              <div className="relative">
                <Store className="mb-6 h-12 w-12 text-[#FF6709]" />
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Business Details
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <Warehouse className="h-5 w-5" />
                    <span>Industry: Retail</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Type: Supermart</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Building2 className="h-5 w-5" />
                    <span>Organization: Private</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Setup Information */}
            <div className="group relative overflow-hidden rounded-2xl bg-green-400 p-8 text-white">
              <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rotate-12 transform opacity-10">
                <Clock className="h-full w-full" />
              </div>
              <div className="relative">
                <Clock className="mb-6 h-12 w-12" />
                <h3 className="mb-6 text-2xl font-bold">Setup Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Clock className="h-5 w-5" />
                    <span>Setup Time: 45 Days Guaranteed</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Target className="h-5 w-5" />
                    <span>Franchise Tenure: 5 Years</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5" />
                    <span>Location: PAN INDIA</span>
                  </li>
                </ul>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
            </div>

            {/* FOCO Model */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-[0_0_50px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_80px_rgba(0,0,0,0.1)]">
              <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rotate-12 transform opacity-5">
                <BookOpen className="h-full w-full" />
              </div>
              <div className="relative">
                <BookOpen className="mb-6 h-12 w-12 text-green-400" />
                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                  Business Model
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <Settings className="h-5 w-5" />
                    <span>FOCO Model Available</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Building2 className="h-5 w-5" />
                    <span>Head Office Node Setup</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Support System */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FF6709] to-[#FF8F4D] p-8 text-white">
              <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rotate-12 transform opacity-10">
                <Headphones className="h-full w-full" />
              </div>
              <div className="relative">
                <Headphones className="mb-6 h-12 w-12" />
                <h3 className="mb-6 text-2xl font-bold">Support System</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <ShieldCheck className="h-5 w-5" />
                    <span>Complete Business Setup</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Users className="h-5 w-5" />
                    <span>Ongoing Training & Support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <TrendingUp className="h-5 w-5" />
                    <span>Marketing Assistance</span>
                  </li>
                </ul>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
            </div>

            {/* Additional Benefits */}
            <div className="group relative overflow-hidden rounded-2xl bg-green-400 p-8 text-white">
              <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rotate-12 transform opacity-10">
                <Gift className="h-full w-full" />
              </div>
              <div className="relative">
                <Gift className="mb-6 h-12 w-12" />
                <h3 className="mb-6 text-2xl font-bold">Additional Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5" />
                    <span>Exclusive Territory Rights</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Boxes className="h-5 w-5" />
                    <span>Inventory Management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Settings className="h-5 w-5" />
                    <span>Software Support</span>
                  </li>
                </ul>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



