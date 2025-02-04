import {
    GraduationCap,
    Headphones,
    Radio,
    Receipt,
    Share2,
    Truck,
    ShirtIcon as TShirt,
    Tv
} from "lucide-react";
import { BiSupport } from "react-icons/bi";

const item = [
    { icon: Receipt, text: "Accounting Support" },
    { icon: Truck, text: "Purchasing Support" },
    { icon: Headphones, text: "Operations Support" },
    { icon: Tv, text: "TV Advertisement" },
    { icon: Radio, text: "Radio & News Paper Ad" },
    { icon: BiSupport, text: "Pamphlets & Hoarding Support" },
    { icon: Share2, text: "Social Media Ad" },
    { icon: GraduationCap, text: "Staff Training" },
    { icon: TShirt, text: "T-shirt & Cap" },
  ]
  
const CompanySupportAbout = () => {
  return (
    <>
    <section className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              Company Support
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {item.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-xl bg-white p-6 shadow-lg transition-all hover:scale-105 hover:bg-green-400 hover:text-white"
                >
                  <item.icon className="mb-4 h-8 w-8 transition-transform group-hover:scale-110" />
                  <h3 className="text-xl font-semibold">{item.text}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default CompanySupportAbout