import React from "react";

const Pagination = ({ inventoryPerPage, totalInventory, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalInventory / inventoryPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);
  return (
    <div className="flex justify-center">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`${
              currentPage === number ? "bg-blue-500" : "bg-white"
            } border rounded-md mx-1`}
          >
            <a
              href="#"
              className={`${
                currentPage === number ? "text-white" : "text-gray-700"
              } block px-3 py-2 hover:text-white hover:bg-blue-500`}
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
