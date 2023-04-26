import { StateContext } from "hooks/stateProvider";
import useAuth from "hooks/useAuth";
import { useContext, useState } from "react";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ApartmentsPage() {
  const { apartments } = useAuth();
  const { setApartment_id } = useContext(StateContext);

  const [apart, setApart] = useState("");

  const handleApartmentClick = (id) => {
    setApart(id);
  };
  const handleNextClick = () => {
    setApartment_id(apart);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-16">
      {/* Page Title */}
      <div className="max-w-xl my-10 ml-5 mr-2 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Apartments
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
            <span className="relative text-5xl">Which</span>
          </span>{" "}
          <span className="text-5xl"> moving home?</span>
        </h2>
        <p className="font-medium text-gray-700 lg:text-lg md:text-sm">
          Select below the type of home you are moving from.
        </p>
      </div>
      <div className="max-w-xl mx-auto">
        {apartments.map((apartment) => (
          <div
            key={apartment.id}
            className={`flex items-center justify-between w-full h-450 px-4 my-8 border-2 border-primary-green rounded-lg bg-white`}
            onClick={() => handleApartmentClick(apartment.id)}
          >
            <div className="flex-1">
              <p
                className={`font-bold ${
                  apart === apartment.id ? "text-primary-green" : "text-black"
                }`}
              >
                {apart === apartment.id ? (
                  <span>
                    <FaCheck className="inline-block w-6 h-6 mr-2" />
                    {apartment.size}
                  </span>
                ) : (
                  <span>{apartment.size}</span>
                )}
              </p>
              <p
                className={`${
                  apart === apartment.id ? "text-primary-green" : "text-black"
                }`}
              >
                {apartment.description}
              </p>
            </div>
            {apart === apartment.id ? null : (
              <FaChevronRight className="w-8 h-8 text-primary-green" />
            )}
          </div>
        ))}
      </div>
      <div className="flex">
        <Link
          to="/pickup"
          className={`inline-flex items-center justify-center h-16 mt-4 px-6 ml-3 text-sm tracking-wide text-primary-green font-semibold transition duration-200 rounded-lg shadow-md w-sm bg-black-900 hover:bg-deep-purple-accent-700 hover:cursor-pointer focus:shadow-outline focus:outline-none`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Prev Location
        </Link>
        <Link
          to="/search"
          className={`inline-flex items-center justify-center h-16 mt-4 px-6 ml-8 text-sm tracking-wide text-white transition duration-200 rounded-lg shadow-md w-sm bg-primary-green hover:bg-deep-purple-accent-700 hover:cursor-pointer focus:shadow-outline focus:outline-none ${
            apart ? "" : "opacity-50 cursor-not-allowed"
          }`}
          onClick={handleNextClick}
          disabled={!apart}
        >
          Next Inventory
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default ApartmentsPage;
