import { Award, Gift, LucideIcon, Package, Tag, Wallet } from "lucide-react";
import React from "react";


const items = [
  { icon: Package, text: "GREAT PRODUCT" },
  { icon: Award, text: "GREAT PRICE" },
  { icon: Tag, text: "GREAT OFFER" },
  { icon: Gift, text: "GREAT PROMOTION" },
  { icon: Wallet, text: "GREAT MARGIN" },
];


const WhyChooseUs: React.FC = () => {
  return (
    <div className="px-4 py-16 w-full flex justify-center">
      <div className="w-[90%]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <ChooseItem key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;


interface ChooseItemProps {
  icon: LucideIcon;
  text: string;
}

const ChooseItem: React.FC<ChooseItemProps> = ({ icon: Icon, text }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover-scale">
    <div className="flex flex-col items-center text-center">
      <Icon className="h-12 w-12 text-green-400 mb-4 animate-float" />
      <p className="font-semibold text-gray-800">{text}</p>
    </div>
  </div>
);

