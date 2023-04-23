const Features = () => {
  return (
    <section id="features" className="bg-white lg:max-w-screen-full">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
        {/* Section Title */}
        <div className="max-w-xl my-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Why Movers?
            </p>
          </div>
          <h2 className="max-w-3xl mb-6 font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 32 14"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative text-5xl">We</span>
            </span>{" "}
            <span className="text-5xl">are simply the best</span>
          </h2>
          <p className="font-medium text-center text-gray-700 lg:text-lg md:text-sm">
            We provide a unique and valuable experience for our users by
            leveraging technology and innovation, making moving as easy and
            stress-free as possible.
          </p>
        </div>

        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* First Service Grid Box */}
          <div className="flex flex-col items-center justify-between p-5 py-12 shadow-sm rounded-xl bg-primary-white">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-yellow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-lg font-semibold leading-9">
                Intelligent Matching
              </h6>
              <p className="mb-3 text-sm font-medium text-justify text-gray-900">
                We connect you with top-rated, licensed moving companies based
                on your location, budget, and move size.
              </p>
            </div>
          </div>

          {/* Second Service Grid Box */}
          <div className="flex flex-col items-center justify-between p-5 py-12 shadow-sm rounded-xl bg-primary-white">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-yellow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-lg font-semibold leading-9">
                Real-Time Tracking
              </h6>
              <p className="mb-3 text-sm font-medium text-justify text-gray-900">
                Monitor the progress of your move in real-time, communicate with
                your movers through our integrated messaging system.
              </p>
            </div>
          </div>

          {/* Third Service Grid Box */}
          <div className="flex flex-col items-center justify-between p-5 py-12 shadow-sm rounded-xl bg-primary-white">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-yellow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-lg font-semibold leading-9">
                Virtual Consultations
              </h6>
              <p className="mb-3 text-sm font-medium text-center text-gray-900">
                Skip the in-person consultations and get a virtual quote from
                your preferred moving companies with an accurate estimate of the
                cost and time required for your move.
              </p>
            </div>
          </div>

          {/* Fourth Service Grid Box */}
          <div className="flex flex-col items-center justify-between p-5 py-12 shadow-sm rounded-xl bg-primary-white">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-yellow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-lg font-semibold leading-9">
                Moving Concierge
              </h6>
              <p className="mb-3 text-sm font-medium text-center text-gray-900">
                We help you with everything from packing and unpacking to
                setting up your utilities and cleaning your old home or office.
                Just let us know.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
