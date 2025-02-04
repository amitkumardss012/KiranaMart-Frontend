import { Store } from 'lucide-react';
import store from "../../assets/img/store/Fruits & Vegetables.png";

const Heor = () => {
  return (
    <>
    <div 
        className="relative h-[60vh] md:h-[70vh] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${store})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <Store className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <span className="text-lg md:text-xl font-semibold text-primary">KIRANA MART</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                Transform Your Retail Business
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                Join our network of successful retailers and unlock the potential of modern retail solutions
              </p>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default Heor