import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBarcode,
  FaBox,
  FaCertificate,
  FaChartBar,
  FaClipboardList,
  FaExchangeAlt,
  FaFileInvoice,
  FaGift,
  FaLightbulb,
  FaNetworkWired,
  FaPaintRoller,
  FaPercent,
  FaRedo,
  FaShippingFast,
  FaSnowflake,
  FaStore,
  FaTags,
  FaTruck,
  FaUserPlus,
  FaUsers,
  FaUtensils,
  FaWarehouse,
} from "react-icons/fa";
import {
  HiOutlineChartBar,
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineCurrencyDollar,
  HiOutlineDatabase,
  HiOutlineDocumentReport,
  HiOutlineGlobe,
  HiOutlineLightBulb,
  HiOutlineRefresh,
  HiOutlineShoppingCart,
  HiOutlineSparkles,
  HiOutlineTruck,
} from "react-icons/hi";

const FeatureIcon = ({ icon: Icon }: any) => (
  <div className="bg-[#FF6709] p-3 rounded-full shadow-lg transition-all duration-300 group-hover:bg-green-400">
    <Icon className="w-6 h-6 text-white" />
  </div>
);

const FeatureItem = ({ icon, text }: any) => (
  <motion.li
    className="flex items-center space-x-3 text-gray-800"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <FeatureIcon icon={icon} />
    <span>{text}</span>
  </motion.li>
);

const FeatureCard = ({ title, icon, items, alwaysVisible }: any) => {
  const [showMore, setShowMore] = useState(false);

  const halfItems = Math.ceil(items.length / 2);
  const initialItems = [...new Set([...alwaysVisible, ...items.slice(0, halfItems)])];
  const visibleItems = showMore ? items : initialItems;

  return (
    <motion.div
      className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-[#FF6709] p-6 transition-all duration-300 group-hover:bg-green-400">
        <div className="flex items-center space-x-4">
          <div className="bg-white p-3 rounded-full">{icon}</div>
          <h2 className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap overflow-hidden overflow-ellipsis">
            {title}
          </h2>
        </div>
      </div>
      <ul className="p-6 space-y-4">
        {visibleItems.map((item: any, index: any) => (
          <FeatureItem key={index} {...item} />
        ))}
      </ul>
      <div className="p-6 text-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-[#FF6709] text-white px-4 py-2 rounded-full hover:bg-green-400 transition-all duration-300"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </motion.div>
  );
};

export const Features = () => {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-12 text-[#FF6709]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover Our Amazing Features
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "INTERIOR FEATURES",
    icon: <FaStore className="w-6 h-6 text-[#FF6709] group-hover:text-green-400 transition-colors duration-300" />,
    alwaysVisible: [
      { icon: HiOutlineCube, text: "Visicooler for Cold drinks and daily products" },
      { icon: FaBox, text: "Racks, Trolly and Buckets" },
    ],
    items: [
      { icon: HiOutlineLightBulb, text: "Store layout and design & theme" },
      { icon: HiOutlineSparkles, text: "False ceiling of store" },
      { icon: FaPaintRoller, text: "White washing in all area" },
      { icon: FaLightbulb, text: "Lighting and wirings" },
      { icon: FaSnowflake, text: "Air condition & Wall Fans" },
      { icon: HiOutlineCube, text: "Visicooler for Cold drinks and daily products" },
      { icon: FaBox, text: "Racks, Trolly and Buckets" },
      { icon: HiOutlineShoppingCart, text: "Billing Counter, Barcode Scanner and Printer" },
      { icon: FaShippingFast, text: "All items from the company through courier" },
      { icon: FaCertificate, text: "All items come with Brand warranty" },
    ],
  },
  {
    title: "SOFTWARE FEATURES",
    icon: <FaBarcode className="w-6 h-6 text-[#FF6709] group-hover:text-green-400 transition-colors duration-300" />,
    alwaysVisible: [],
    items: [
      { icon: FaUserPlus, text: "Unlimited User" },
      { icon: FaUsers, text: "Unlimited Training & Support" },
      { icon: FaChartBar, text: "5000 SMS Alerts" },
      { icon: HiOutlineCog, text: "Generate & Print Barcode" },
      { icon: HiOutlineDatabase, text: "Use Existing Barcodes" },
      { icon: HiOutlineChartBar, text: "Stock Report & Import Existing Stock By Excel Sheet" },
      { icon: HiOutlineCurrencyDollar, text: "Pricing Management-Change MRP, Product Wise" },
      { icon: HiOutlineDocumentReport, text: "Sale Reports & Purchase Report" },
      { icon: FaClipboardList, text: "Daily & Monthly Reports For All" },
      { icon: FaExchangeAlt, text: "Sale Return & Exchange Reports" },
      { icon: FaFileInvoice, text: "GST Tax Report & Many More" },
      { icon: FaRedo, text: "Excel Export Of All Reports" },
      { icon: HiOutlineRefresh, text: "Past Bill Editing" },
    ],
  },
  {
    title: "INVENTORY FEATURES",
    icon: <FaTruck className="w-6 h-6 text-[#FF6709] group-hover:text-green-400 transition-colors duration-300" />,
    alwaysVisible: [],
    items: [
      { icon: FaBox, text: "Grocery, Household Items, Ready To-Eat items, Daily Products" },
      { icon: FaSnowflake, text: "Frozen Food, Fruits, Vegetables, Snacks" },
      { icon: FaUtensils, text: "Home and Kitchen and many other categories" },
      { icon: FaTags, text: "1000+ Brands and 20,000+ Products" },
      { icon: FaPercent, text: "20% to 30% Average Margin" },
      { icon: FaNetworkWired, text: "Largest Network of stores across India" },
      { icon: FaWarehouse, text: "Easy Distribution and Warehousing chain" },
      { icon: HiOutlineTruck, text: "Easy and Efficient Logistic" },
      { icon: HiOutlineGlobe, text: "Wide range of Products and Brands" },
      { icon: FaUsers, text: "Well-trained staff management" },
      { icon: FaGift, text: "Attractive Offers and Discounts" },
      { icon: FaTags, text: "BUY ONE GET ONE Offers" },
      { icon: FaExchangeAlt, text: "Easy Return of expired products" },
    ],
  },
];
