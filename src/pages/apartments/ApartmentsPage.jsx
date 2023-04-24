import React, { useState, useEffect } from "react";
import { FaCheck, FaChevronRight } from "react-icons/fa";

function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/apartments")
      .then((response) => response.json())
      .then((data) => setApartments(data))
      .catch((error) => console.log(error));
  }, []);

  const [selectedApartmentId, setSelectedApartmentId] = useState(null);

  const handleApartmentClick = (id) => {
    setSelectedApartmentId(id);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-green-500 mb-4 mt-8">
        Kindly choose your current home size.
      </h1>
      <div className="max-w-xl mx-auto">
        {apartments.map((apartment) => (
          <div
            key={apartment.id}
            className={`flex items-center justify-between w-full h-450 px-4 my-8 border-2 border-green-500 rounded-lg bg-white`}
            onClick={() => handleApartmentClick(apartment.id)}
          >
            <div className="flex-1 text-xl">
              <p className={`font-bold ${selectedApartmentId === apartment.id ? "text-green-500" : "text-black"}`}>
                {selectedApartmentId === apartment.id ? (
                  <span><FaCheck className="inline-block w-6 h-6 mr-2" />{apartment.size}</span>
                ) : (
                  <span>{apartment.size}</span>
                )}
              </p>
              <p className={`${selectedApartmentId === apartment.id ? "text-green-500" : "text-black"}`}>{apartment.description}</p>
            </div>
            {selectedApartmentId === apartment.id ? null : <FaChevronRight className="w-8 h-8 text-green-500" />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ApartmentsPage