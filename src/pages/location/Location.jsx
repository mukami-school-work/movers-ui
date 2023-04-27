import { StateContext, StateProvider } from "hooks/stateProvider";
import useAuth from "hooks/useAuth";
import { useContext } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

function LocationPage() {
  const {
    state,
    setUser_id,
    setPickup_address,
    setDestination_address,
    setBook_date,
  } = useContext(StateContext);
  const { user } = useAuth();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "pickup_address") {
      setPickup_address(value);
    } else if (name === "destination_address") {
      setDestination_address(value);
    } else if (name === "book_date") {
      setBook_date(value);
    }
    console.log(state);
  };
  const handleSubmit = () => {
    setUser_id(user.id);
  };
  return (
    <div className="flex flex-col justify-center min-h-screen m-0 bg-white">
      {/* Page Title */}
      <div className="max-w-xl my-10 ml-5 mr-2 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Location
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
            <span className="relative text-5xl">Where</span>
          </span>{" "}
          <span className="text-5xl"> & when?</span>
        </h2>
        <p className="font-medium text-gray-700 lg:text-lg md:text-sm">
          Share with us your current location and when you would like to move.
          We love details, so share even the time.
        </p>
      </div>
      <div className="flex flex-col justify-center w-full px-8 mt-8 md:flex-row">
        <div className="flex items-center justify-center flex-1">
          <form
            action=""
            onSubmit={handleSubmit}
            className="justify-center block lg:flex"
          >
            <div className="flex flex-col items-start ml-8 rounded-lg md:flex-row">
              <div className="relative flex-1 mb-4 mr-8">
                <input
                  type="text"
                  name="pickup_address"
                  // value={state.pickup_address}
                  onChange={handleChange}
                  placeholder="Enter pickup..."
                  className="block w-full h-16 px-5 py-3 pl-6 pr-2 text-lg text-black placeholder-black placeholder-gray-300 transition duration-500 ease-in-out transform border-transparent rounded-lg ring-2 focus:ring-primary-green text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 ring-gray-300 focus:shadow-outline-green"
                />
              </div>
              <div className="relative flex-1 mb-4 mr-8">
                <input
                  type="text"
                  name="destination_address"
                  // value={state.destination_address}
                  onChange={handleChange}
                  placeholder="Enter destination..."
                  className="block w-full h-16 px-5 py-3 pl-6 pr-2 text-lg text-black placeholder-black placeholder-gray-300 transition duration-500 ease-in-out transform border-transparent rounded-lg ring-2 focus:ring-primary-green text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 ring-gray-300 focus:shadow-outline-green"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <FiChevronDown className="text-xl text-white" />
                </div>
              </div>
              <div className="relative flex-1 mb-4 mr-8">
                <input
                  type="datetime-local"
                  name="book_date"
                  // value={book_date}
                  placeholder="Select date & time ..."
                  className="block w-full h-16 px-5 py-3 pl-6 pr-2 text-lg text-black placeholder-black placeholder-gray-300 transition duration-500 ease-in-out transform border-transparent rounded-lg ring-2 focus:ring-primary-green text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 ring-gray-300 focus:shadow-outline-green"
                  onChange={handleChange}
                />
              </div>
            </div>
            <Link
              to="/apartment"
              onClick={handleSubmit}
              className={`inline-flex items-center justify-center h-16 px-6 ml-8 text-sm font-semibold tracking-wide text-white transition duration-200 border-transparent rounded-lg shadow-md w-sm bg-primary-green hover:bg-deep-purple-accent-700 hover:cursor-pointer focus:shadow-outline focus:outline-none ${
                state.book_date ? "" : "opacity-50 cursor-not-allowed"
              }`}
              aria-label="to apartments"
            >
              Next Apartments
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default LocationPage;
