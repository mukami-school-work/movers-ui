import { useState } from 'react';
import { ArrowRightIcon, SearchIcon } from '@heroicons/react/outline';


function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const [cartVisible, setCartVisible] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    // handle search logic here
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

  const handleIncreaseQuantity = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity += 1;
      setCartItems(newCartItems);
    }
  };

  const handleDecreaseQuantity = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
    }
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemoveFromCart = (item) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(newCartItems);
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white py-4 px-8 shadow-md">
        {/* Navbar content goes here */}
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 py-16 flex flex-col items-center">
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full w-14 text-primary-green flex items-center justify-center focus:outline-none"
            >
              <SearchIcon className="h-12 w-12" />
            </button>
          </div>
        </form>
        <div className="flex items-center mt-16">
          <button
            className="bg-primary-green text-white px-4 py-2 rounded-lg mr-4 focus:outline-none"
            onClick={handleCartToggle}
          >
            View Items ({cartItems.length})
          </button>
          <div className="bg-primary-green rounded-lg py-4 px-8 shadow-md flex justify-between items-center mr-8 fixed bottom-28 right-0 w-full lg:w-auto">
            <p className="text-sm text-gray-600">
              <span className="pr-4 text-2xl">Step 1 of 4</span>
            </p>
            <button className="bg-primary-green rounded-lg px-4 py-2 text-white flex items-center">
              <span className="px-2 text-2xl">Next</span>
              <ArrowRightIcon className="h-7 w-7 ml-2 text-2xl" />
            </button>
          </div>
          <div
            className={`flex items-center ${
              cartVisible ? "flex" : "hidden"
            } fixed top-0 right-0 h-screen w-full bg-black bg-opacity-25`}
          >
            <div className="bg-white rounded-lg w-1/2 h-screen p-4 overflow-y-auto">
              <h2 className="text-lg font-bold mb-4">Your Inventory</h2>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b py-2"
                >
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-gray-600">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                      onClick={() => handleIncreaseQuantity(item)}
                    >
                      <ArrowRightIcon className="h-5 w-5" />
                    </button>
                    <button
                      className="text-gray-400 hover:text-gray-600 ml-2 focus:outline-none focus:text-gray-600"
                      onClick={() => handleDecreaseQuantity(item)}
                    >
                      <ArrowRightIcon className="h-5 w-5 transform rotate-180" />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700 ml-2 focus:outline-none focus:text-red-700"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between mt-4">
                <p className="font-bold">Total:</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search