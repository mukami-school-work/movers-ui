import React, { useState, useEffect } from "react";

function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/apartments")
      .then((response) => response.json())
      .then((data) => setApartments(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>ApartmentsPage</div>
  )
}

export default ApartmentsPage