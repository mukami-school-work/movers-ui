const Features = () => {
  return (
    <div className="bg-white lg:max-w-screen-full">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
        {/* Section Title */}
        <div className="max-w-xl my-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Why Movers?
            </p>
          </div>
          <h2 className="max-w-3xl mb-6 font-sans font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
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
              <span className="relative text-5xl">Transform</span>
            </span>{" "}
            <span className="text-5xl">the way you move!</span>
          </h2>
          <p className="font-medium text-gray-700 lg:text-lg md:text-sm">
            When you move, you’re packing up more than just “stuff.” You’re
            packing everything that makes your house a home.
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
                  strokeWidth="2.4"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-lg font-semibold leading-9">
                24/7 Customer Service
              </h6>
              <p className="mb-3 text-sm font-medium text-center text-gray-900">
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear.
              </p>
            </div>
          </div>

          {/* Second Service Grid Box */}
          <div className="flex flex-col items-center justify-between p-5 py-12 shadow-sm rounded-xl bg-primary-white">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-yellow">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-lg font-semibold leading-9">
                When has justice
              </h6>
              <p className="mb-3 text-sm font-medium text-center text-gray-900">
                Rough pomfret lemon shark plownose chimaera southern sandfish
                kokanee northern sea.
              </p>
            </div>
          </div>

          {/* Third Service Grid Box */}
          <div className="flex flex-col items-center justify-between p-5 py-12 shadow-sm rounded-xl bg-primary-white">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-yellow">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-lg font-semibold leading-9">
                Organically grow
              </h6>
              <p className="mb-3 text-sm font-medium text-center text-gray-900">
                A slice of heaven. O for awesome, this chocka full cuzzie is as
                rip-off as a cracker.
              </p>
            </div>
          </div>

          {/* Fourth Service Grid Box */}
          <div className="flex flex-col items-center justify-between p-5 py-12 shadow-sm rounded-xl bg-primary-white">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-yellow">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-lg font-semibold leading-9">
                A slice of heaven
              </h6>
              <p className="mb-3 text-sm font-medium text-center text-gray-900">
                Disrupt inspire and think tank, social entrepreneur but
                preliminary thinking think tank compelling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
