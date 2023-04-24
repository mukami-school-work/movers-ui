import React, { useState, useEffect } from "react";

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
  )
}

export default ApartmentsPage