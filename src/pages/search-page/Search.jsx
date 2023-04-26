import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ArrowRightIcon, SearchIcon } from "@heroicons/react/outline";

import Inventories from "./Inventories";

const Search = () => {
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [inventoriesPerPage, setInventoriesPerPage] = useState(10);
  const [filterinventory, setFilterinventory] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [selected, setSelected] = useState()

  useEffect(() => {
    const fetchInventories = async () => {
      setLoading(true);
      const res = await axios.get("http://127.0.0.1:4000/inventories",{
        method: "GET",
        headers: {
        Authorization: localStorage.getItem("jwt")
      }});
      console.log(res.data);
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

  const handleSearch = (e) => {
    e.preventDefault();
    // handle search logic here
  };

   const handleNextClick = () => {
    
   };

  const handleCartToggle = () => {
    setCartVisible(!cartVisible);
  };

  const handleAddToCart = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      // item already exists in cart, update quantity
      const newCartItems = [...cartItems];
      newCartItems[index].quantity += item.quantity;
      setCartItems(newCartItems);
    } else {
      // item doesn't exist in cart, add to cart
      setCartItems([...cartItems, item]);
    }
  };

  // const handleIncreaseQuantity = (item) => {
  //   const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
  //   if (index >= 0) {
  //     const newCartItems = [...cartItems];
  //     newCartItems[index].quantity += 1;
  //     setCartItems(newCartItems);
  //   }
  // };

  const handleIncreaseQuantity = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      const newCartItems = [...cartItems];
      const quantity = parseInt(newCartItems[index].quantity); // Convert quantity to a number
      if (!isNaN(quantity)) {
        // Check if quantity is a valid number
        newCartItems[index].quantity = quantity + 1; // Increment the quantity by one
        setCartItems(newCartItems);
        console.log(newCartItems);
        
      }
    }
  };

  const handleDecreaseQuantity = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity -= 1;
      if (newCartItems[index].quantity === 0) {
        newCartItems.splice(index, 1);
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
      <div className="max-w-4xl mx-auto mt-8 px-8 py-16 flex flex-col items-center">
        <h1 className="text-4xl text-primary-green text-center mb-6">
          What would you like to move?
        </h1>
        <p className="text-center max-w-lg text-gray-600 text-sm">
          To get the most precise price range, we recommend going room by room
          and confirming all items you wish to move.
        </p>
        <form onSubmit={handleSearch} className="mt-8 w-full max-w-lg">
          <div className="relative">
            <input
              type="text"
              className="block w-full bg-white border-b-4 rounded-lg py-3 px-4 pr-10 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Search items in your apartment"
              onChange={(e) => handleFilter(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full w-14 text-primary-green flex items-center justify-center focus:outline-none"
            >
              <SearchIcon className="h-12 w-12" />
            </button>
          </div>
        </form>
        <Inventories
          inventories={currentInventories}
          loading={loading}
          handleAddToCart={handleAddToCart}
        />

        <div className="flex items-center mt-2">
          <button
            className="bg-primary-green text-white px-4 py-2 rounded-lg mr-4 focus:outline-none"
            onClick={handleCartToggle}
          >
            View Items ({cartItems.length})
          </button>

          <Link
            to="/boxes"
            className={`bg-primary-green rounded-lg text-white font-bold py-2 px-4 bottom-16 right-16 absolute ${
              setSelected ? "" : "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleNextClick}
            disabled={!selected}
          >
            Next
          </Link>

          <div className="fixed bottom-0 right-0 p-6 bg-white shadow-xl rounded-tl-2xl">
            <button
              className="bg-primary-green text-white px-4 py-2 rounded-lg focus:outline-none"
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
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md mr-2 focus:outline-none"
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md ml-2 focus:outline-none"
                        onClick={() => handleIncreaseQuantity(item)}
                      >
                        +
                      </button>

                      {/* remove from cart button */}
                      <button
                        className="bg-red-500 text-white px-2 py-1 ml-4 rounded-md focus:outline-none"
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
      </div>
    </div>
  );
};

export default Search;
