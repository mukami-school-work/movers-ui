import React, { useState } from 'react';
function BoxesRange() {
    const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <div className="w-3/5 p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-grey-800 text-center mb-8">
        Please select the number of boxes, bags or suit cases you want to move.
      </h1>
      </div>
      </div>
  )
}

export default BoxesRange