import React from "react";
import { PlusIcon } from "@heroicons/react/outline";

const Inventories = ({ inventories, loading, handleAddToCart }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="mt-8">
      {inventories.map((inventory) => (
        <div key={inventory.id} className="flex justify-between mb-4">
          <div className="font-bold">{inventory.name}</div>
          <div>
            <button
              className="ml-4 px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-600 focus:outline-none"
              onClick={() => handleAddToCart(inventory)}
            >
              <PlusIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Inventories;
