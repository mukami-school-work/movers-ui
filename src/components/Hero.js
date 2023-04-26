import allied from "../assets/allied.png";
import bekins from "../assets/bekins.png";
import hero from "../assets/hero.svg";
import jk from "../assets/jk.svg";
import may from "../assets/may.svg";
import shift from "../assets/shift.svg";

export default function Hero({ isLogin }) {
  return (
    <>
      <section
        id="hero"
        className="py-20 dark:bg-gray-800 bg-primary-white dark:text-gray-100"
      >
        <div className="container flex flex-col justify-center p-6 mx-auto mt-16 sm:py-12 lg:py-16 lg:flex-row lg:justify-evenly">
          {/* Banner CTA Section */}
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-2xl lg:text-left">
            <h1 className="text-5xl font-bold sm:text-6xl">
              We get you moving in <span className="cta-title">style</span> and
              confidence!
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Your all-in-one platform to get you started and sorted when
              moving, <br className="hidden md:inline lg:hidden" />
              linking you to the best moving companies at affordable rates.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              {isLogin ? (
                <a
                  href="/pickup"
                  className="inline-flex items-center justify-center h-12 px-12 font-semibold tracking-wide transition duration-200 rounded-lg shadow-md text-primary-green py-7 dark:bg-violet-400 dark:text-gray-900 bg-black-800 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Get Quote
                </a>
              ) : (
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center h-12 px-12 font-semibold tracking-wide text-white transition duration-200 rounded-lg shadow-md py-7 dark:bg-violet-400 dark:text-gray-900 bg-primary-green hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Get Started
                </a>
              )}
            </div>
          </div>
          {/* Banner Image Section */}
          <div className="flex items-center justify-center p-6 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={hero}
              alt=""
              className="object-contain h-96 w-96 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>

        {/* Trusted Companies Section */}
        <div className="px-4 mx-auto text-center mt-18 md:max-w-screen-md lg:max-w-screen-2xl lg:px-36">
          <div className="mb-12 text-xs font-semibold leading-8 uppercase sponsor">
            TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE
          </div>
          <div className="flex flex-wrap items-center justify-center text-gray-500 sm:justify-between">
            <a
              href="/"
              className="mb-5 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <img
                src={shift}
                className="transition-all cursor-pointer duration-400 filter grayscale hover:grayscale-0"
                alt="logo"
              />
            </a>
            <a
              href="/"
              className="mb-5 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <img
                src={allied}
                className="transition-all cursor-pointer duration-400 filter grayscale hover:grayscale-0"
                alt="logo"
              />
            </a>
            <a
              href="/"
              className="mb-5 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <img
                className="transition-all cursor-pointer duration-400 filter grayscale hover:grayscale-0"
                src={jk}
                alt="logo"
              />
            </a>
            <a
              href="/"
              className="mb-5 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <img
                src={may}
                className="w-56 transition-all cursor-pointer duration-400 filter grayscale hover:grayscale-0"
                alt="logo"
              />
            </a>
            <a
              href="/"
              className="mb-5 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <img
                src={bekins}
                className="w-40 transition-all cursor-pointer duration-400 filter grayscale hover:grayscale-0"
                alt="logo"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
