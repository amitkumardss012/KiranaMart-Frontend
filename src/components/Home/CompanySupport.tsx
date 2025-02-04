import {
    CheckCircle2,
    Headphones,
    HeadphonesIcon
} from 'lucide-react';
import { ExploreSection } from '../about/ContactAbout';

const item = [
    { icon: <CheckCircle2 />, text: "Accounting Support, Purchasing" },
    { icon: <CheckCircle2 />, text: "Support, Operations Support, TV" },
    { icon: <CheckCircle2 />, text: "Radio, Pamphlets, Support Ad." },
    { icon: <CheckCircle2 />, text: "Hoardings, Social Media Ad, Sta" },
    { icon: <CheckCircle2 />, text: "Training, T-shirt, Cap" }
  ]

const CompanySupport = () => {
  return (
    <>
    <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#FF6709] flex items-center justify-center gap-2">
            <Headphones className="w-8 h-8" />
            COMPANY SUPPORT
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <SupportCard
              icon={<HeadphonesIcon />}
              title="Support"
              items={item}
            />
            <ExploreSection text='Indias Fastest Growing Supermarket Chain' />
          </div>
        </div>
      </div>
    </>
  )
}

export default CompanySupport


const SupportCard = ({ icon, title, items }: any) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-orange-50 rounded-full text-[#FF6709]">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[#FF6709]">{title}</h3>
      </div>
      <div className="space-y-4">
        {items.map((item: any, index: any) => (
          <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors">
            <div className="text-[#FF6709]">
              {item.icon}
            </div>
            <span className="text-gray-700">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );