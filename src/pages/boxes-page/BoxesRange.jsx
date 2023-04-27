import { StateContext } from "hooks/stateProvider";
import useAuth from "hooks/useAuth";
import useBooking from "hooks/useBooking";
import React, { useContext, useEffect, useState } from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

function BoxesRange() {
  const [selected, setSelected] = useState(null);
  const { boxes, setLoading, loading, spinner } = useAuth();
  const { bookNow } = useBooking();
  const { setBox_id } = useContext(StateContext);

  if (loading) {
    return spinner();
  }
  const handleSubmit = () => {
    setLoading(true);
    bookNow();
  };

  return (
    <div className="flex flex-col items-start justify-center pt-8 lg:items-center">
      <div className="w-3/5 p-4">
        {/* Page Title */}
        <div className="max-w-xl my-10 ml-5 mr-2 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Packaging
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
              <span className="relative text-5xl">Pack</span>
            </span>{" "}
            <span className="text-5xl"> your inventory!</span>
          </h2>
          <p className="font-medium text-gray-700 lg:text-lg md:text-sm">
            Select an estimate of the number of boxes that will fit all your
            inventory. Includes suitcases and carts.
          </p>
        </div>
        <div className="flex flex-col">
          {boxes.map((range, index) => (
            <button
              key={range.id}
              className={`flex items-center justify-between w-full h-12 md:h-16 rounded-lg border-2 border-gray-200 mb-2 ${
                index === selected
                  ? "bg-primary-green border-primary-green text-white"
                  : "border-gray-300"
              }`}
              onClick={() => {
                setSelected(index);
                setBox_id(range.id);
              }}
            >
              <span className="ml-4 text-base md:text-lg">{range.range}</span>
              {index === selected ? (
                <FaCheck className="mr-4 text-xl md:text-2xl" />
              ) : (
                <FaArrowRight className="mr-4 text-xl text-gray-300 md:text-2xl" />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="flex mb-6">
        <Link
          to="/search"
          className={`inline-flex items-center justify-center h-14 px-6 ml-3 text-sm tracking-wide text-primary-green font-semibold transition duration-200 rounded-lg shadow-md w-sm bg-black-900 hover:bg-deep-purple-accent-700 hover:cursor-pointer focus:shadow-outline focus:outline-none`}
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
          Prev Inventory
        </Link>
        <button
          className={`inline-flex items-center justify-center h-14 px-6 ml-8 text-sm font-semibold tracking-wide text-white transition duration-200 border-transparent rounded-lg shadow-md w-sm bg-primary-green hover:bg-deep-purple-accent-700 hover:cursor-pointer focus:shadow-outline focus:outline-none`}
          onClick={handleSubmit}
          // disabled={!selected}
        >
          Get Quote Now!
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
        </button>
      </div>
    </div>
  );
}

export default BoxesRange;
