import { useState } from "react";

function NavExRootPath({ logout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="lg:max-w-screen-full navbar bg-primary-white">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 bg-primary-white">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              aria-label="Logo"
              title="Logo"
              className="inline-flex items-center mr-8"
            >
              <svg
                className="w-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="#08CF65"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-5 mr-3 text-2xl font-bold tracking-wide text-gray-800">
                Movers
              </span>
            </a>
          </div>
          <ul className="flex items-center hidden space-x-8 font-semibold lg:flex">
            <li>
              <a
                href="/profile"
                aria-label="View Profile"
                title="View Profile"
                className="flex text-sm tracking-wide text-gray-700 transition-colors duration-200 hover:cursor-pointer hover:text-deep-purple-accent-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
                View Profile
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={() => logout()}
                className="inline-flex items-center justify-center w-full h-12 px-6 text-sm tracking-wide text-white transition duration-200 rounded-lg shadow-md bg-primary-green hover:bg-deep-purple-accent-700 hover:cursor-pointer focus:shadow-outline focus:outline-none"
                aria-label="Log Out"
                title="Log Out"
              >
                Log Out
              </a>
            </li>
          </ul>
          {/* Mobile Navbar */}
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 border-none rounded hover:cursor-pointer focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 bg-primary-white"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 border rounded shadow-sm bg-primary-white">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Logo"
                        title="Logo"
                        className="inline-flex items-center hover:cursor-pointer"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="#08CF65"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-5 mr-3 text-2xl font-bold tracking-wide text-gray-800">
                          Movers
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 border-none rounded hover:cursor-pointer bg-primary-white hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4 font-semibold">
                      <li>
                        <a
                          href="/profile"
                          aria-label="View Profile"
                          title="View Profile"
                          className="flex text-sm tracking-wide text-gray-700 transition-colors duration-200 hover:cursor-pointer hover:text-deep-purple-accent-400"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mr-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                          View Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          onClick={() => logout()}
                          className="inline-flex items-center justify-center w-full h-12 px-6 text-sm tracking-wide text-white transition duration-200 rounded-lg shadow-md bg-primary-green hover:bg-deep-purple-accent-700 hover:cursor-pointer focus:shadow-outline focus:outline-none"
                          aria-label="Log Out"
                          title="Log Out"
                        >
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function NavRootPath({ isLogin, logout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="lg:max-w-screen-full navbar bg-primary-white">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 bg-primary-white">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              aria-label="Logo"
              title="Logo"
              className="inline-flex items-center mr-8"
            >
              <svg
                className="w-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="#08CF65"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-5 mr-3 text-2xl font-bold tracking-wide text-gray-800">
                Movers
              </span>
            </a>
            {/* Desktop Navbar */}
            <ul className="flex items-center hidden space-x-8 font-semibold list-none lg:flex">
              <li>
                <a
                  href="#features"
                  aria-label="Services"
                  title="Services"
                  className="text-sm tracking-wide text-gray-700 transition-colors duration-200 hover:cursor-pointer hover:text-deep-purple-accent-400"
                >
                  Why Movers?
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  aria-label="Testimonials"
                  title="Testimonials"
                  className="text-sm tracking-wide text-gray-700 transition-colors duration-200 hover:cursor-pointer hover:text-deep-purple-accent-400"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a
                  href="#team"
                  aria-label="Team"
                  title="Team"
                  className="text-sm tracking-wide text-gray-700 transition-colors duration-200 hover:cursor-pointer hover:text-deep-purple-accent-400"
                >
                  Our Team
                </a>
              </li>
            </ul>
          </div>
          {isLogin ? (
            <ul className="flex items-center hidden space-x-8 font-semibold lg:flex">
              <li>
                <a
                  href="/profile"
                  aria-label="View Profile"
                  title="View Profile"
                  className="flex text-sm tracking-wide text-gray-700 transition-colors duration-200 hover:cursor-pointer hover:text-deep-purple-accent-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  View Profile
                </a>
              </li>
              <li>
                <a
                  href="/"
                  onClick={() => logout()}
                  className="inline-flex items-center justify-center w-full h-12 px-6 text-sm tracking-wide text-white transition duration-200 rounded-lg shadow-md bg-primary-green hover:bg-deep-purple-accent-700 hover:cursor-pointer focus:shadow-outline focus:outline-none"
                  aria-label="Log Out"
                  title="Log Out"
                >
                  Log Out
                </a>
              </li>
            </ul>
          ) : (
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <a
                  href="/login"
                  aria-label="Login"
                  title="Login"
                  className="flex text-sm font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:cursor-pointer hover:text-deep-purple-accent-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center h-12 px-6 text-sm font-semibold tracking-wide text-white transition duration-200 rounded-lg shadow-md hover:cursor-pointer bg-primary-green hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Create Account"
                  title="Create Account"
                >
                  Get Started
                </a>
              </li>
            </ul>
          )}
          {/* Mobile Navbar */}
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 border-none rounded hover:cursor-pointer focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 bg-primary-white"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 border rounded shadow-sm bg-primary-white">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Logo"
                        title="Logo"
                        className="inline-flex items-center hover:cursor-pointer"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="#08CF65"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-5 mr-3 text-2xl font-bold tracking-wide text-gray-800">
                          Movers
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 border-none rounded hover:cursor-pointer bg-primary-white hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4 font-semibold">
                      <li>
                        <a
                          href="#features"
                          aria-label="Services"
                          title="Services"
                          className="text-sm tracking-wide text-gray-700 transition-colors duration-200 hover:cursor-pointer hover:text-deep-purple-accent-400"
                        >
                          Why Movers?
                        </a>
                      </li>
                      <li>
                        <a
                          href="#testimonials"
                          aria-label="About Us"
                          title="About Us"
                          className="text-sm tracking-wide text-gray-700 transition-colors duration-200 hover:cursor-pointer hover:text-deep-purple-accent-400"
                        >
                          Testimonials
                        </a>
                      </li>
                      <li>
                        <a
                          href="#team"
                          aria-label="Team"
                          title="Team"
                          className="text-sm tracking-wide text-gray-700 transition-colors duration-200 hover:cursor-pointer hover:text-deep-purple-accent-400"
                        >
                          Our Team
                        </a>
                      </li>
                      {isLogin ? (
                        <>
                          <li>
                            <a
                              href="/profile"
                              aria-label="View Profile"
                              title="View Profile"
                              className="flex text-sm tracking-wide text-gray-700 transition-colors duration-200 hover:cursor-pointer hover:text-deep-purple-accent-400"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 mr-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                              View Profile
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              onClick={() => logout()}
                              className="inline-flex items-center justify-center w-full h-12 px-6 text-sm tracking-wide text-white transition duration-200 rounded-lg shadow-md bg-primary-green hover:bg-deep-purple-accent-700 hover:cursor-pointer focus:shadow-outline focus:outline-none"
                              aria-label="Log Out"
                              title="Log Out"
                            >
                              Log Out
                            </a>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <a
                              href="/login"
                              aria-label="Login"
                              title="Login"
                              className="flex text-sm font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:cursor-pointer hover:text-deep-purple-accent-400"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 mr-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                                />
                              </svg>
                              Login
                            </a>
                          </li>
                          <li>
                            <a
                              href="/signup"
                              className="inline-flex items-center justify-center w-full h-12 px-6 text-sm tracking-wide text-white transition duration-200 rounded-lg shadow-md bg-primary-green hover:bg-deep-purple-accent-700 hover:cursor-pointer focus:shadow-outline focus:outline-none"
                              aria-label="Create Account"
                              title="Create Account"
                            >
                              Get Started
                            </a>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { NavExRootPath, NavRootPath };

