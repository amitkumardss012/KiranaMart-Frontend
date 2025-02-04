import {
  Apple,
  Baby,
  Book,
  IceCream,
  Plane,
  ShoppingBag,
  ShoppingCart,
  Wine,
} from "lucide-react";

const item = [
  { icon: ShoppingBag, text: "Grocery" },
  { icon: Book, text: "Stationery & Books" },
  { icon: Baby, text: "Toys & Personal Care" },
  { icon: Wine, text: "Beverages" },
  { icon: Apple, text: "Fruits & Vegetables" },
  { icon: IceCream, text: "Frozen Food & Ice Cream" },
  { icon: Plane, text: "Travel Solutions" },
  { icon: ShoppingCart, text: "And More..." },
];

const OurProduct = () => {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Products
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {item.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 rounded-xl bg-white p-6 shadow-lg transition-all hover:scale-105 hover:bg-[#FF6709] hover:text-white"
              >
                <item.icon className="h-8 w-8 transition-transform group-hover:scale-110" />
                <span className="text-lg font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProduct;
