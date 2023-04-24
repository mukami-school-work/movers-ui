// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Pagination from "./Pagination";
// import { ArrowRightIcon, SearchIcon, PlusIcon, MinusIcon, ShoppingCartIcon, XIcon,TrashIcon } from "@heroicons/react/outline";

// import Inventories from "./Inventories";

// const Chatgpt = () => {
//   const [inventories, setInventories] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [inventoriesPerPage, setInventoriesPerPage] = useState(10);
//   const [filterinventory, setFilterinventory] = useState([]);
//   const [cartItems, setCartItems] = useState([]);
//   const [cartVisible, setCartVisible] = useState(false);

//   useEffect(() => {
//     const fetchInventories = async () => {
//       setLoading(true);
//       const res = await axios.get("http://127.0.0.1:4000/inventories");
//       console.log(res.data);
//       setInventories(res.data);
//       setFilterinventory(res.data);
//       setLoading(false);
//     };

//     fetchInventories();
//   }, []);

//   const handleFilter = (value) => {
//     const res = filterinventory.filter((f) =>
//       f.name.toLowerCase().includes(value.toLowerCase())
//     );
//     setInventories(res);
//   };

//   // Get current inventories
//   const indexOfLastPost = currentPage * inventoriesPerPage;
//   const indexOfFirstPost = indexOfLastPost - inventoriesPerPage;
//   const currentInventories = inventories.slice(
//     indexOfFirstPost,
//     indexOfLastPost
//   );

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // handle search logic here
//   };

//   const handleCartToggle = () => {
//     setCartVisible(!cartVisible);
//   };

//   const handleAddToCart = (item) => {
//     const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
//     if (index >= 0) {
//       // item already exists in cart, update quantity
//       const newCartItems = [...cartItems];
//       newCartItems[index].quantity += item.quantity;
//       setCartItems(newCartItems);
//     } else {
//       // item doesn't exist in cart, add to cart
//       setCartItems([...cartItems, { ...item, quantity: 1 }]);
//     }
//   };

//   const handleIncreaseQuantity = (item) => {
//     const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
//     if (index >= 0) {
//       const newCartItems = [...cartItems];
//       newCartItems[index].quantity += 1;
//       setCartItems(newCartItems);
//     }
//   };

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

//   const handleRemoveFromCart = (item) => {
//     const newCartItems = cartItems.filter(
//       (cartItem) => cartItem.id !== item.id
//     );
//     setCartItems(newCartItems);
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//     <div className="flex justify-between items-center px-4 py-2 bg-white shadow-md">
//     <div className="flex items-center space-x-4">
//     <SearchIcon className="h-6 w-6 text-gray-400" />
//     <form onSubmit={handleSearch}>
//     <input
//     type="text"
//     placeholder="Search inventories..."
//     className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
//     onChange={(e) => handleFilter(e.target.value)}
//     />
//     </form>
//     </div>
//     <button
//         className="flex items-center space-x-2 bg-blue-500 text-white rounded-full px-3 py-2 focus:outline-none"
//         onClick={handleCartToggle}
//         >
//     <span>{cartItems.length}</span>
//     <ShoppingCartIcon className="h-6 w-6" />
//     </button>
//     </div>
//     {cartVisible && (
//     <div className="bg-white shadow-md px-4 py-2 absolute right-0 top-16 z-10">
//     <div className="flex justify-between items-center mb-2">
//     <h2 className="text-xl font-bold">Cart Items</h2>
//     <button
//             className="bg-red-500 text-white rounded-full px-3 py-1 focus:outline-none"
//             onClick={handleCartToggle}
//             >
//     <XIcon className="h-6 w-6" />
//     </button>
//     </div>
//     {cartItems.length === 0 ? (
//     <p className="text-gray-500">Cart is empty</p>
//     ) : (
//     <ul className="divide-y divide-gray-300">
//     {cartItems.map((item) => (
//     <li className="flex justify-between items-center py-2" key={item.id}>
//     <div className="flex items-center space-x-2">
//     <img
//                     src={item.image}
//                     alt={item.name}
//                     className="h-8 w-8 rounded-full"
//                     />
//     <span>{item.name}</span>
//     </div>
//     <div className="flex items-center space-x-2">
//     <button
//     className="bg-blue-500 text-white rounded-full px-3 py-1 focus:outline-none"
//     onClick={() => handleDecreaseQuantity(item)}
//     >
//     <MinusIcon className="h-4 w-4" />
//     </button>
//     <span>{item.quantity}</span>
//     <button
//     className="bg-blue-500 text-white rounded-full px-3 py-1 focus:outline-none"
//     onClick={() => handleIncreaseQuantity(item)}
//     >
//     <PlusIcon className="h-4 w-4" />
//     </button>
//     <button
//     className="bg-red-500 text-white rounded-full px-3 py-1 focus:outline-none"
//     onClick={() => handleRemoveFromCart(item)}
//     >
//     <TrashIcon className="h-4 w-4" />
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     )}
//     {loading ? (
//       <p>Loading...</p>
//     ) : (
//         <div>
//         <Inventories
//           inventories={currentInventories}
//           handleAddToCart={handleAddToCart}
//         />
//         <div className="flex justify-center mt-4">
//         <Pagination
//         inventoriesPerPage={inventoriesPerPage}
//         totalInventories={inventories.length}
//         paginate={paginate}
//         />
//     </div>
//    </div>)}
//    </div>
//     )
//         };

// export default Chatgpt;