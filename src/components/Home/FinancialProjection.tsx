
const FinancialProjection = () => {
  return (
    <>
 <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="lg:flex lg:space-x-8">
          {/* Left Section - Calculation */}
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <div className="rounded-xl bg-white p-6 shadow-xl lg:h-full">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-gray-800 md:text-3xl">
                  CALCULATION
                  <span className="ml-2 text-[#FF6709]">OF</span>
                  <span className="ml-2 text-gray-900">INCOME PROJECT</span>
                </h2>
                <div className="h-8 w-8">
                  <svg viewBox="0 0 24 24" fill="none" className="h-full w-full text-[#FF6709]">
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex flex-col space-y-4 rounded-lg border border-gray-100 bg-gray-50/50 p-5">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-[#FF6709]"></div>
                    <p className="text-lg font-medium text-gray-700">Let's Take an example of 500</p>
                  </div>
                  <p className="pl-4 text-lg font-semibold text-gray-900">Sqft Area of Supermarket Franchise:</p>
                </div>

                <div className="flex flex-col space-y-4 rounded-lg border border-gray-100 bg-gray-50/50 p-5">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    <p className="text-lg font-medium text-gray-700">A Per Month Approximate</p>
                  </div>
                  <p className="pl-4 text-lg font-semibold text-gray-900">Sales Rs. 15 Lac (per Day Rs. 50,000)</p>
                </div>

                <div className="flex flex-col space-y-4 rounded-lg border border-gray-100 bg-gray-50/50 p-5">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-[#FF6709]"></div>
                    <p className="text-lg font-medium text-gray-700">Average Margin on monthly</p>
                  </div>
                  <p className="pl-4 text-lg font-semibold text-gray-900">Sales is 20% = Total Income Rs. 3,00,000 P.M.</p>
                </div>

                <div className="flex flex-col space-y-4 rounded-lg border border-gray-100 bg-gray-50/50 p-5">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    <p className="text-lg font-medium text-gray-700">B. Company will pay Rs. 20,000</p>
                  </div>
                  <p className="pl-4 text-lg font-semibold text-gray-900">
                    to the Supermarket franchise if he appoints a New Franchise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Income */}
          <div className="lg:w-1/2">
            <div className="rounded-xl bg-[#FF6709] p-6 shadow-xl lg:h-full">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                  INCOME FROM
                  <span className="ml-2">SUPERMARKET FRANCHISE</span>
                </h2>
                <div className="h-8 w-8">
                  <svg viewBox="0 0 24 24" fill="none" className="h-full w-full text-white">
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              <div className="space-y-6">
                <div className="group rounded-lg bg-white/10 p-5 transition-all hover:bg-white/20">
                  <div className="flex items-center justify-between text-white">
                    <p className="text-lg font-medium">Rs. 1,00,000/- P.M.</p>
                    <p className="text-lg">Income on total monthly sales 20% Rs.</p>
                  </div>
                </div>

                <div className="group rounded-lg bg-white/10 p-5 transition-all hover:bg-white/20">
                  <div className="flex items-center justify-between text-white">
                    <p className="text-lg font-medium">Rs. 3,00,000/- P.M.</p>
                    <p className="text-lg">Total Income of Supermarket Store</p>
                  </div>
                </div>

                <div className="group rounded-lg bg-white/10 p-5 transition-all hover:bg-white/20">
                  <div className="flex items-center justify-between text-white">
                    <p className="text-lg font-medium">Rs. 4,00,000/- P.M.</p>
                    <p className="text-sm">The company will charge 1% Royalty on total Sales (Above sale of Rs 20 lakhs)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FinancialProjection