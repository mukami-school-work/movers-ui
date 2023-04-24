import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

function BoxesRange() {
  const [selected, setSelected] = useState(0);
  const [ranges, setRanges] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/boxes') // replace with your backend API endpoint
      .then((response) => response.json())
      .then((data) => setRanges(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-3/5 p-4">
        <h1 className="text-3xl md:text-4xl font-bold text-grey-800 text-center mb-8">
          Please select the number of boxes, bags or suit cases you want to move.
        </h1>
        <div className="flex flex-col">
          {ranges.map((range, index) => (
            <button
              key={range.id}
              className={`flex items-center justify-between w-full h-12 md:h-16 rounded-lg border-2 border-gray-200 mb-2 ${
                index === selected
                  ? 'bg-green-500 border-green-500 text-white'
                  : 'border-gray-300'
              }`}
              onClick={() => setSelected(index)}
            >
              <span className="text-base md:text-lg ml-4">{range.range}</span>
              {index === selected ? (
                <FaCheck className="text-xl md:text-2xl mr-4" />
              ) : (
                <FaArrowRight className="text-xl text-gray-300 md:text-2xl mr-4" />
              )}
            </button>
          ))}
        </div>
        <div className="flex justify-end mt-8">
          <button className="flex items-center justify-center h-10 md:h-12 px-4 rounded-lg bg-green-500 text-white">
            Next <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoxesRange;
