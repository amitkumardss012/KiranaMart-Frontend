import StoreImage from "../../assets/img/store/KM 1.png"

const AboutHero = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-orange-600 to-green-400 w-full flex justify-center mt-20">
        <div className="px-4 py-16 w-[80%]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-bounce text-green-400">
                About Us
              </h1>
              <p className="text-xl mb-4">
                Kirana Mart is a retail company, established to cater to your
                essential needs in the most hassle-free manner.
              </p>
              <p className="text-xl">
                The company's foray into the Indian retail market happened with
                the launch of the brand G (Convenience Supermarket Chain)
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={StoreImage}
                alt="Supermarket Store"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover hover-scale"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
