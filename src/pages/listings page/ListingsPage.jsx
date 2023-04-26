import { StateContext } from "hooks/stateProvider";
import useAuth from "hooks/useAuth";
import useBooking from "hooks/useBooking";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { HoopSpinner } from "react-spinners-kit";
// import Card from "./Card";

const ListingsPage = () => {
  const { confirmNow, isConfirmed } = useBooking();
  const { setMover_id, quotes, booking, setBooking_id } =
    useContext(StateContext);
  const { loading, spinner, setLoading, navigate } = useAuth();
  if (isConfirmed) {
    return (
      <>
        <div className="spinner">
          <div className="flex items-center justify-center mr-16">
            <svg
              className="w-12 text-deep-purple-accent-400"
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
            <p className="ml-5 text-2xl font-bold tracking-wide text-gray-800 ">
              Movers
            </p>
          </div>
          <p className="font-bold">
            Booking Confirmed! Check your email for details!
          </p>
          <HoopSpinner
            size={300}
            color="#08cf65"
            // backColor="black"
            loading={true}
          />
        </div>
      </>
    );
  }
  if (loading) {
    return spinner();
  }
  setBooking_id(booking.id);
  return (
    <div className="p-6 mt-12 font-sans text-gray-900 bg-azure">
      {/* Page Title */}
      <div className="max-w-xl my-10 ml-5 mr-2 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Movers
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
            <span className="relative text-5xl">Top</span>
          </span>{" "}
          <span className="text-5xl"> mover companies</span>
        </h2>
        <p className="font-medium text-gray-700 lg:text-lg md:text-sm">
          We take pride in dealing with our customers and the same can be said
          about our partner companies. Below are the best organizations that
          will help you move to your next home. Choose, for the sky is the
          limit.
        </p>
      </div>

      <div className="container mx-auto ">
        <div className="relative flex-wrap w-full max-w-screen-md mx-auto mb-4 lg:flex md:mb-0">
          {quotes
            ? quotes.map((mover) => {
                return (
                  <div
                    className="max-w-xl px-4 py-4 mx-auto my-auto"
                    key={mover.id}
                  >
                    <div className="mb-6 rounded-lg bg-gray-50 md:bg-white md:shadow-xl ">
                      <div className="md:flex-shrink-0 bg-primary-white">
                        <img
                          src={mover.logo}
                          alt="uploaded cover"
                          className="object-cover w-full h-full rounded-lg rounded-b-none"
                        />
                      </div>
                      <div className="py-1 bg-green-100">
                        <div className="px-4">
                          <h2 className="mb-2 text-2xl font-bold tracking-normal text-gray-800 md:mt-4">
                            {mover.name}
                          </h2>
                          <h5 className="">Services Offered</h5>
                          <ul className="px-2 ml-4 text-sm font-medium text-gray-700 break-words list-disc">
                            {mover.services.split(",").map((service, index) => {
                              return <li key={index}>{service}</li>;
                            })}
                          </ul>
                          <br />
                          <h5 className="">Total Cost</h5>
                          <p className="mt-3 text-2xl font-bold text-pink-600 overline ">
                            Ksh. {mover.quotation}
                          </p>
                        </div>

                        <div className="flex items-center justify-between p-2 md:p-4 md:mx-4">
                          <div className="flex items-center">
                            <div className="ml-2 text-sm">
                              <p className="font-medium text-black-700">
                                {mover.address}
                              </p>
                              <p className="italic font-semibold leading-none text-pink-400">
                                {mover.email}
                              </p>
                            </div>
                            <Link
                              className={`inline-flex items-center justify-center h-14 w-24 lg:w-full px-6 ml-8 text-sm font-semibold tracking-wide text-white transition duration-200 border-transparent rounded-lg shadow-md w-sm bg-primary-green hover:bg-deep-purple-accent-700 hover:cursor-pointer focus:shadow-outline focus:outline-none`}
                              onClick={() => {
                                setLoading(true);
                                setMover_id(mover.id);
                                confirmNow();
                              }}
                              // disabled={!setSelected}
                            >
                              Accept
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
                      </div>
                    </div>
                  </div>
                );
              })
            : navigate("/boxes")}
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;
