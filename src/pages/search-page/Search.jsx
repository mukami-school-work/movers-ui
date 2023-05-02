import { SearchIcon } from "@heroicons/react/outline";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";
import Inventories from "./Inventories";

const Search = () => {
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage] = useState(1);
  const [inventoriesPerPage] = useState(10);
  const [filterinventory, setFilterinventory] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [selected, setSelected] = useState();
  const { server } = useAuth();

  useEffect(() => {
    const fetchInventories = async () => {
      setLoading(true);
      const res = await axios.get(`${server}/inventories`, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("jwt"),
        },
      });
      setInventories(res.data);
      setFilterinventory(res.data);
      setLoading(false);
    };

    fetchInventories();
  }, []);

  const handleFilter = (value) => {
    const res = filterinventory.filter((f) =>
      f.name.toLowerCase().includes(value.toLowerCase())
    );
    setInventories(res);
  };

  // Get current inventories
  const indexOfLastPost = currentPage * inventoriesPerPage;
  const indexOfFirstPost = indexOfLastPost - inventoriesPerPage;
  const currentInventories = inventories.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const handleNextClick = () => {};

  const handleCartToggle = () => {
    setCartVisible(!cartVisible);
  };

  const handleAddToCart = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      // item already exists in cart, update quantity
      const newCartItems = [...cartItems];
      newCartItems[index].quantity += 1;
      setCartItems(newCartItems);
    } else {
      // item doesn't exist in cart, add to cart
      const newItem = { ...item, quantity: 1 }; // Initialize quantity to 1
      setCartItems([...cartItems, newItem]);
    }
  };

  const handleIncreaseQuantity = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity += 1; // Increment the quantity by one
      setCartItems(newCartItems);
      console.log(newCartItems);
    }
  };

  const handleDecreaseQuantity = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity -= 1;
      if (newCartItems[index].quantity <= 0) {
        // Check if quantity is 0 or less
        newCartItems.splice(index, 1); // Remove item from cart
      }
      setCartItems(newCartItems);
    }
  };

  const handleRemoveFromCart = (item) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(newCartItems);
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex flex-col items-center max-w-4xl px-8 py-16 mx-auto mt-8">
        {/* Page Title */}
        <div className="max-w-xl my-10 ml-5 mr-2 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              INventory
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
              <span className="relative text-5xl">What</span>
            </span>{" "}
            <span className="text-5xl"> are you moving?</span>
          </h2>
          <p className="font-medium text-gray-700 lg:text-lg md:text-sm">
            To get the most precise price range, we recommend going room by room
            and confirming all items you wish to move.
          </p>
          <p className="pt-4 font-medium text-gray-700 lg:text-lg md:text-sm">
            If you cannot find an item that you wish to move in the provided
            list, please use the search box to search for it.
          </p>
        </div>
        <form className="w-full max-w-lg mt-8">
          <div className="relative">
            <input
              type="text"
              className="block w-full px-5 py-1 pl-6 pr-2 text-lg text-black placeholder-black placeholder-gray-300 transition duration-500 ease-in-out transform border-transparent rounded-lg h-14 ring-2 focus:ring-primary-green text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 ring-gray-300 focus:shadow-outline-green"
              placeholder="Search items in your apartment"
              onChange={(e) => handleFilter(e.target.value)}
            />
            <div
              type="submit"
              className="absolute top-0 right-0 flex items-center justify-center w-8 h-full rounded cursor-pointer bg-primary-white focus:bg-primary-brown text-primary-green focus:outline-none"
            >
              <SearchIcon className="w-12 h-12" />
            </div>
          </div>
        </form>
        <Inventories
          inventories={currentInventories}
          loading={loading}
          handleAddToCart={handleAddToCart}
        />

        <div className="flex items-center mt-2">
          <button
            className="px-4 py-2 mr-4 text-white rounded-lg bg-primary-green focus:outline-none"
            onClick={handleCartToggle}
          >
            View Items ({cartItems.length})
          </button>

          <div className="fixed bottom-0 right-0 p-6 mt-8 bg-transparent shadow-xl rounded-tl-2xl">
            <button
              className="px-4 py-2 text-white rounded-lg bg-primary-green focus:outline-none"
              onClick={handleCartToggle}
            >
              {cartVisible ? "Close Cart" : "Open Cart"}
            </button>
            {cartVisible && (
              <div className="mt-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between mb-2">
                    <div>{item.name}</div>
                    <div className="flex items-center">
                      <button
                        className="px-2 py-1 mr-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none"
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="px-2 py-1 ml-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none"
                        onClick={() => handleIncreaseQuantity(item)}
                      >
                        +
                      </button>

                      {/* remove from cart button */}
                      <button
                        className="px-2 py-1 ml-4 text-white bg-red-500 rounded-md focus:outline-none"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex my-4">
          <Link
            to="/apartment"
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
            Prev Apartments
          </Link>
          <Link
            to="/boxes"
            className={`inline-flex items-center justify-center h-14 px-6 ml-8 text-sm font-semibold tracking-wide text-white transition duration-200 border-transparent rounded-lg shadow-md w-sm bg-primary-green hover:bg-deep-purple-accent-700 hover:cursor-pointer focus:shadow-outline focus:outline-none ${
              setSelected ? "" : "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleNextClick}
            disabled={!selected}
          >
            Next Boxes
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
  );
};

export default Search;
