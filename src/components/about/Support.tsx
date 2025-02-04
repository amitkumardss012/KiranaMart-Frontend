import {
  BarChart2,
  BookOpen,
  Building,
  Calendar,
  FileText,
  Gift,
  Globe,
  Image,
  Receipt,
  ShoppingBag,
  ShoppingCart,
  Truck
} from "lucide-react";
import { SiGooglemarketingplatform } from "react-icons/si";

const item = [
  { icon: Calendar, text: "45+ Days Store Opening Guarantee" },
  { icon: Receipt, text: "Easy, Fast & Advance Billing Software*" },
  { icon: FileText, text: "GST, ITC, 2A, 2B Reconciliation" },
  { icon: Building, text: "Bank Reconciliation" },
  { icon: BarChart2, text: "Creditors Report" },
  { icon: Gift, text: "No Royalty For 3 Months" },
  { icon: ShoppingCart, text: "Software" },
  { icon: FileText, text: "3 Month Accounting Service Free" },
  { icon: Globe, text: "Digital Promotion - Instagram Facebook Google" },
  { icon: Globe, text: "Free Business Website For 2 Years" },
  { icon: Image, text: "Branding, E-Rikshaw, Promotion, Flyers, Banners, Youtube" },
  { icon: ShoppingBag, text: "Kirana Kit - T-Shirt, Cap, Promotional Offer Product" },
  { icon: Truck, text: "Backward Purchase Entry Support(3 Months)" },
  { icon: SiGooglemarketingplatform, text: "Digital Marketing - Instagram & Facebook Promotion" },
  { icon: BookOpen, text: "Lifetime Software Training" },
];

const Support = () => {
  return (
    <>
      <div className="px-4 py-16 bg-gray-50 rounded-xl my-16 w-full flex justify-center">
        <div className="w-[90%]">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Support We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {item.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md hover-scale"
              >
                <item.icon className="h-8 w-8 text-orange-600" />
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
