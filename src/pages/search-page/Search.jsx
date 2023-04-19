import { useState } from 'react';

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
        <h1 className="text-4xl text-green-600 text-center mb-6">
          What would you like to move?
        </h1>
        <p className="text-center max-w-lg text-gray-600 text-sm">
          To get the most precise price range, we recommend going room by room and
          confirming all items you wish to move.
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
              className="absolute right-0 top-0 h-full w-14 text-green-500 flex items-center justify-center focus:outline-none"
            >
              <SearchIcon className="h-12 w-12" />
</button>
</div>
</form>
        </div>
    </div>
  )
}

export default Search