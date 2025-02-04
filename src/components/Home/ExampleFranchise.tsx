import Store from "../../assets/img/store/Fruits & Vegetables.png";

export const ExampleFranchise = () => {
  return (
    <>
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl text-[#FF6709]">
            Our Franchise
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Franchise 1 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-lg">
              <img
                src={Store}
                alt="Jharkhand Store"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Jharkhand
                </h3>
              </div>
            </div>

            {/* Franchise 2 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-lg">
              <img
                src={Store}
                alt="Bihar Store"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Bihar</h3>
              </div>
            </div>

            {/* Franchise 3 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-lg">
              <img
                src={Store}
                alt="UP Store"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">UP</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
