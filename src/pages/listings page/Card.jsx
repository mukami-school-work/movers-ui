import React, { useState, useEffect } from "react";

function Card() {
   const [cards, setCards] = useState([]);

   useEffect(() => {
     fetch("http://localhost:4000/movers", {
       method: "GET",
       headers: {
         Authorization: localStorage.getItem("jwt"),
       },
     }) // replace with your backend API endpoint
       .then((response) => response.json())
       .then((cards) => setCards(cards));
   }, []);

    return (
      <>
        {cards.map((card) => (
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
          <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
            <div className="relative pb-48 overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover bg-azhure"
                src="https://res.cloudinary.com/dsnhbp0tg/image/upload/v1681784391/divcardimage_2x_tmjs7r.png"
                alt=""
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <a
                  href="/reviews"
                  className="px-4 py-2 bg-primary-green text-white font-bold rounded-full no-underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-700  duration-300"
                >
                  Book Now
                </a>
                <div className="mt-3 flex items-center">
                  <span className="text-xl font-semibold">Ksh</span>&nbsp;
                  <span className="font-bold text-xl">5000</span>&nbsp;
                  {/* <span className="text-sm font-semibold">Ksh</span> */}
                </div>
              </div>
              <h2 className="mt-2 mb-2 font-bold">
                {card.name}
              </h2>
              <div class="relative sm:w-1/2 md:w-1/2 xl:w-1/4">
                {/* <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400"></thead>
                <tbody>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <td
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Deposit Required
                    </td>
                    <td class="px-6 py-4">Yes</td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Service Availability
                    </th>
                    <td class="px-6 py-4">Excellent</td>
                  </tr>
                  <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Full-service packing
                    </th>
                    <td class="px-6 py-4">Yes</td>
                  </tr>
                </tbody>
              </table> */}
              </div>
            </div>
            <span className="p-4 mt-2 text-sm font-semibold">
              Services Offered
            </span>
            <div className="p-4 border-t border-b text-xs text-gray-700">
              <div className="relative leading-[30px] font-medium z-[0]">
                <ul className="m-0 pl-[17px]">
                  <li className="mb-0">Full-service packing</li>
                  <li className="mb-0">Shipment tracking</li>
                  <li className="mb-0">Several moving insurance options</li>
                  <li className="mb-0">Vehicle shipping</li>
                  <li className="mb-0">Specialty moving</li>
                  <li>Furniture disassembly and reassembly</li>
                </ul>
              </div>
            </div>
            <div className="p-4 flex items-center text-sm text-gray-600">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current text-yellow-500"
              >
                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current text-yellow-500"
              >
                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current text-yellow-500"
              >
                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current text-yellow-500"
              >
                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <defs>
                  <linearGradient id="half_grad">
                    <stop offset="50%" stop-color="rgba(251, 191, 36, 1)" />
                    <stop
                      offset="50%"
                      stop-color="text-gray-400"
                      stop-opacity="1"
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                  fill="url(#half_grad)"
                  stroke-width="1"
                  stroke="red"
                />
              </svg>
              {/* <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-current text-gray-400"
                >
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                </svg> */}
              <span className="ml-2">4.4</span>
            </div>
          </div>
        </div>
         ))} 
      </>
    );
}

export default Card;