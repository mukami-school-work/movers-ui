import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { FiChevronDown } from "react-icons/fi";
//  import { Link } from "react-router-dom";

function LocationPage() {
  const [pickupTime, setPickupTime] = useState("");

  const handleTimeChange = (event) => {
    setPickupTime(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white m-0">
      <header className="flex justify-center py-6 w-full">
        <h1 className="text-4xl font-bold text-center text-green-500">
          Move comfortably anywhere anytime
        </h1>
      </header>
      <div className="flex flex-col md:flex-row justify-center w-full px-8">
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col md:flex-row items-center ml-8 rounded-lg">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Pickup location"
                className="w-full h-16 py-4 pl-6 pr-2 text-lg text-black placeholder-black border border-gray-300 rounded-full focus:outline-none focus:shadow-outline-green"
              />
            </div>
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Dropoff location"
                className="w-full h-16 py-4 pl-6 pr-2 text-lg text-black placeholder-black border border-gray-500 rounded-full focus:outline-none focus:shadow-outline-green"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <FiChevronDown className="text-white text-xl" />
              </div>
            </div>
            <div className="relative flex-1">
              <input
                type="datetime-local"
                placeholder="Pickup time"
                className="w-full h-16 py-4 pl-6 pr-2 text-lg text-black placeholder-black border border-gray-500 rounded-full focus:outline-none focus:shadow-outline-green"
                value={pickupTime}
                onChange={handleTimeChange}
              />
            </div>
      
              <button className="w-full md:w-auto h-16 py-4 px-6 text-lg text-white font-bold bg-green-500 rounded-full hover:bg-gray-800 focus:outline-none focus:shadow-outline-green">
                Get Quote
              </button>
          
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-8 md:px-0">
        <h2 className="text-2xl font-bold text-center text-gray-700 mt-12 mb-4">
          Why choose us?
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          We provide a seamless and stress-free moving experience for all your belongings.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <li className="bg-gray-200 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-green-500 mb-2">Safety First</h3>
            <p className="text-gray-700">
            We take safety seriously and ensure that all your belongings are transported securely and without damage. Our team is trained to handle all types of items, from fragile and delicate to bulky and heavy. We use high-quality packing materials and modern equipment to make sure your belongings are safe and secure during transit.
</p>
</li>
<li className="bg-gray-200 rounded-lg shadow-md p-8">
<h3 className="text-2xl font-bold text-green-500 mb-2">Affordable Prices</h3>
<p className="text-gray-700">
We believe that moving shouldn't cost a fortune. That's why we offer competitive and transparent pricing. Our rates are based on the distance, the size of the move, and any additional services you may need. We provide a detailed quote upfront so you know exactly what you'll be paying.
</p>
</li>
<li className="bg-gray-200 rounded-lg shadow-md p-8">
<h3 className="text-2xl font-bold text-green-500 mb-2">Professional Team</h3>
<p className="text-gray-700">
Our team of movers is experienced, reliable, and friendly. We take pride in providing excellent customer service and making your move as smooth as possible. We handle all aspects of your move, from packing and loading to unloading and unpacking. You can trust us to take care of everything.
</p>
</li>
</ul>
</div>
</div>
);
}

export default LocationPage

