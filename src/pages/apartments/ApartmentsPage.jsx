import React, { useState, useEffect } from "react";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";



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
  const handleNextClick = () => {
   
  };

  console.log(Array.isArray(apartments));

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-primary-green mb-4 pt-6 mt-24">
        Kindly choose your current home size.
      </h1>
      {/* <div className="max-w-xl mx-auto">
        {apartments.map((apartment) => (
          <div
            key={apartment.id}
            className={`flex items-center justify-between w-full h-450 px-4 my-8 border-2 border-primary-green rounded-lg bg-white`}
            onClick={() => handleApartmentClick(apartment.id)}
          >
            <div className="flex-1 text-xl">
              <p className={`font-bold ${selectedApartmentId === apartment.id ? "text-primary-green" : "text-black"}`}>
                {selectedApartmentId === apartment.id ? (
                  <span><FaCheck className="inline-block w-6 h-6 mr-2" />{apartment.size}</span>
                ) : (
                  <span>{apartment.size}</span>
                )}
              </p>
              <p className={`${selectedApartmentId === apartment.id ? "text-primary-green" : "text-black"}`}>{apartment.description}</p>
            </div>
            {selectedApartmentId === apartment.id ? null : <FaChevronRight className="w-8 h-8 text-primary-green" />}
          </div>
        ))}
      </div> */}
      <Link
        to="/search"
        className={`bg-primary-green rounded-lg text-white font-bold py-2 px-4 bottom-16 right-16 absolute ${
          selectedApartmentId ? "" : "opacity-50 cursor-not-allowed"
        }`}
        onClick={handleNextClick}
        disabled={!selectedApartmentId}
      >
        Next
      </Link>
    </div>
  )
}

export default ApartmentsPage