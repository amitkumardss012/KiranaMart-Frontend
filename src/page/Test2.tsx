import {
  BarChart,
  Building2,
  IndianRupee,
  Store,
  Users
} from 'lucide-react';
import { Tween } from 'react-gsap';
import { FaTruck } from 'react-icons/fa';

const Test2 = () => {

  return (
    <div className="min-h-screen bg-white">

      {/* Income Calculation Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#FF6709] flex items-center justify-center gap-2">
            <BarChart className="w-8 h-8" />
            CALCULATION OF INCOME PROJECTION
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Store className="w-10 h-10 text-[#FF6709]" />}
              title="Lets Take example of 500 Sqft Area of Supermarket"
              value="Rs. 1,00,000/- P.M."
              subtitle="Income on total monthly sales 20% Rs."
            />
            <FeatureCard 
              icon={<Building2 className="w-10 h-10 text-[#FF6709]" />}
              title="A Per Month Approximate Sales Rs."
              value="Rs. 3,00,000/- P.M."
              subtitle="Total Income of Supermarket Store"
            />
            <FeatureCard 
              icon={<Users className="w-10 h-10 text-[#FF6709]" />}
              title="Average Margin on monthly"
              value="Sales Rs. 20%"
              subtitle="Let per Day Rs. 50,000"
            />
            <FeatureCard 
              icon={<IndianRupee className="w-10 h-10 text-[#FF6709]" />}
              title="The company will charge 1% Royalty"
              value="Rs. 4,00,000/- P.M."
              subtitle="on total sales (Above sale of Rs 20 lakhs)"
            />
          </div>
        </div>
      </div>

      {/* Company Support Section */}
      

      {/* Animation section*/}
      <h1 className='text-4xl font-bold text-center m-10 p-5'>Animation Section</h1>
      <div className="relative w-full h-32 overflow-hidden">
            <Tween
                from={{
                    x: "-100%", // Start off-screen to the left
                }}
                to={{
                    x: "100vw", // Move across the full width of the screen
                }}
                duration={5} // Duration of the animation
                ease="linear" // Smooth linear transition
                repeat={-1} // Repeat infinitely
                yoyo={false} // No reverse animation
            >
                <div className="absolute top-0 left-0 text-4xl text-blue-600">
                    <FaTruck /> {/* Truck icon from react-icons */}
                </div>
            </Tween>
        </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, value, subtitle }: any) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="p-3 bg-orange-50 rounded-full">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-gray-800">{title}</h3>
      <p className="text-2xl font-bold text-[#FF6709]">{value}</p>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  </div>
);


export const ServiceCard = ({ icon, title, description }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="p-3 bg-orange-50 rounded-full text-[#FF6709]">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#FF6709]">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

export default Test2;