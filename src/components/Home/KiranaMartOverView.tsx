import {
  BarChart3,
  Briefcase,
  Building2,
  FileImage,
  FileText,
  LocateIcon,
  ShieldCheck
} from "lucide-react";
import { FaRegAddressBook, FaRegAddressCard, FaRegIdCard } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";

function KiranaMartOverView() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#FF6709] text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">
            Overview of Kirana Mart Franchise
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Investment Returns Section */}
        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-400">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Kirana Mart Franchise Return On Investment
              </h2>
              <p className="text-gray-600">In Months</p>
            </div>
            <div className="bg-green-400 text-white px-4 py-2 rounded-lg">
              <span className="font-bold">3% After 3 Months</span>
            </div>
          </div>
        </div>

        {/* Franchise Fee Section */}
        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#FF6709]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Franchise Fees
              </h2>
              <p className="text-gray-600">One-time investment</p>
            </div>
            <div className="bg-[#FF6709] text-white px-4 py-2 rounded-lg">
              <span className="font-bold">Rs 2,00,000/- + GST</span>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <Section title="Business Overview">
          <Card heading="Industry" title="Retail" icon={Briefcase} />
          <Card heading="Type of Business" title="Supermart" icon={Building2} />
          <Card heading="Head Office" title="Noida, UP" icon={LocateIcon} />
          <Card heading="FOCO Model" title="Available" icon={Building2} />
        </Section>

        {/* Features Section */}
        <Section>
          <Card
            heading="Store Set Up Time"
            title="45 Days Guranteed"
            icon={FileText}
          />
          <Card
            heading="Organization Type"
            title="Private"
            icon={ShieldCheck}
          />
          <Card heading="Franchise Tenure" title="5 Years" icon={BarChart3} />
          <Card
            heading="Franchise Location"
            title="PAN INDIA"
            icon={FaLocationDot}
          />
        </Section>

        {/* Documents Section */}
        <Section title="Documents Required">
          <Card title="Franchise Agreement" icon={FileText} />
          <Card title="Photo Required" icon={FileImage} />
          <Card title="GST Certificate" icon={PiCertificateFill} />
          <Card title="Proprietor Aadhar Copy" icon={FaRegIdCard} />
          <Card title="Business PAN Copy" icon={FaRegAddressCard} />
          <Card title="Business Address Proof" icon={FaRegAddressBook} />
        </Section>
      </main>
    </div>
  );
}

export default KiranaMartOverView;

export function Card({
  title,
  icon: Icon,
  heading,
}: {
  title: string;
  icon: React.ElementType;
  heading?: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center space-y-4">
      <div className="p-3 rounded-lg bg-[#FF6709]/10">
        <Icon className="w-6 h-6 text-[#FF6709]" />
      </div>
      <h3 className="text-gray-800 font-medium text-center">{heading}</h3>
      <p>{title}</p>
    </div>
  );
}

export function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-l-4 border-[#FF6709] pl-3">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {children}
      </div>
    </div>
  );
}
