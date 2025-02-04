import { Building2, Users, Store, Warehouse, ArrowRight } from "lucide-react";
import Logo from "../../assets/img/logo/KIRANA MART.png";

export default function BusinessFlow() {
  return (
    <>
      <header className="bg-[#FF6709] text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">PRODUCT REFILLING</h1>
        </div>
      </header>
      <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:pt-16 lg:pt-20">
        <div className="container mx-auto px-4">
          {/* Other Company Flow */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 md:mb-10 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6709] to-orange-500">
                OTHER COMPANY
              </span>
            </h2>
            <div className="flex flex-nowrap gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-4 sm:pb-6 md:pb-8 -mx-4 px-4 scrollbar-thin scrollbar-thumb-[#FF6709] scrollbar-track-gray-100">
              <FlowCard
                title="COMPANY"
                number="01"
                icon={
                  <Building2 className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#FF6709]" />
                }
                color="orange"
              />
              <FlowCardArrow />
              <FlowCard
                title="WHOLE SELLER"
                number="02"
                icon={
                  <Warehouse className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#FF6709]" />
                }
                color="orange"
              />
              <FlowCardArrow />
              <FlowCard
                title="DISTRIBUTOR"
                number="03"
                icon={
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#FF6709]" />
                }
                color="orange"
              />
              <FlowCardArrow />
              <FlowCard
                title="RETAILER"
                number="04"
                icon={
                  <Store className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#FF6709]" />
                }
                color="orange"
              />
              <FlowCardArrow />
              <FlowCard
                title="CONSUMER"
                number="05"
                icon={
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#FF6709]" />
                }
                color="orange"
              />
            </div>
          </div>

          {/* Kirana Mart Flow */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-10 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                KIRANA MART
              </span>
            </h2>
            <div className="flex flex-nowrap h-60 overflow-x-auto gap-6 md:gap-8 lg:gap-10 items-center justify-start md:justify-center scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-gray-100] scrollbar-track-gray-100">
              <FlowCard
                title="COMPANY"
                number="01"
                icon={
                  <Building2 className="w-8 h-8 md:w-10 md:h-10 text-green-400" />
                }
                color="green"
              />
              <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-green-400 flex-shrink-0" />
              <FlowCard
                title="KIRANA MART"
                number="02"
                icon={
                  <div className="relative w-10 h-10 md:w-12 md:h-12">
                    <img
                      src={Logo}
                      alt="Kirana Mart"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                }
                color="green"
                highlight
              />
              <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-green-400 flex-shrink-0" />
              <FlowCard
                title="CONSUMER"
                number="03"
                icon={
                  <Users className="w-8 h-8 md:w-10 md:h-10 text-green-400" />
                }
                color="green"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface FlowCardProps {
  title: string;
  number: string;
  icon: React.ReactNode;
  color: "orange" | "green";
  highlight?: boolean;
}

function FlowCard({
  title,
  number,
  icon,
  color,
  highlight = false,
}: FlowCardProps) {
  const baseClasses =
    "flex-shrink-0 w-40 md:w-48 lg:w-56 p-5 md:p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl";
  const colorClasses =
    color === "orange"
      ? "bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200"
      : "bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200";
  const highlightClasses = highlight
    ? "ring-4 ring-green-400 ring-opacity-50"
    : "";

  return (
    <div className={`${baseClasses} ${colorClasses} ${highlightClasses}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-sm md:text-base lg:text-lg text-gray-800">
          {title}
        </h3>
        <span className="text-xs md:text-sm font-medium px-2 py-1 rounded-full bg-gray-200 text-gray-700">
          {number}
        </span>
      </div>
      <div
        className={`mt-3 ${
          color === "orange" ? "text-[#FF6709]" : "text-green-400"
        }`}
      >
        {icon}
      </div>
    </div>
  );
}

function FlowCardArrow() {
  return (
    <div className="flex items-center justify-center flex-shrink-0">
      <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-400" />
    </div>
  );
}
