import {
  MonitorSmartphone,
  Settings,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import { ServiceCard } from "../../page/Services";

export const OurSrviceS = () => {
  return (
    <>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 w-[90%]">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#FF6709] flex items-center justify-center gap-2">
            <Settings className="w-8 h-8" />
            Our Servicessss
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<MonitorSmartphone className="w-8 h-8" />}
                title="Most Advance Software"
                description="We have the best and most advance software in the industry to run your business in autopilot mode. Our software will help you to run your supermarket without any human involvement."
              />
            <ServiceCard
              icon={<ShoppingBag className="w-8 h-8" />}
              title="Inventory Setup"
              description="Purchase management can help control costs in various ways. For example, purchasing management involves understanding the supply chain and the raw materials market fluctuations."
            />
            <ServiceCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Marketing and Promotion"
              description="Grocery store marketing strategies can make or break a supermarket's revenue and reputation. Creative supermarket branding combined with targeted advertisements can raise awareness of offers and promotions, increasing potential revenue."
            />
          </div>
        </div>
      </div>
    </>
  );
};
