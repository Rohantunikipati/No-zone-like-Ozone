import React, { useState, useRef } from "react";

const Calculation = () => {
  const [result, setResult] = useState("");
  const itemRef = useRef(null);
  const hoursRef = useRef(null);

  const calculateDepletion = () => {
    const item = itemRef.current.value;
    const hours = parseFloat(hoursRef.current.value);

    if (!item || isNaN(hours) || hours < 0) {
      alert("Please select an item and enter a valid number of hours.");
      return;
    }

    const depletionFactors = {
      vehicle: 0.05,
      airConditioner: 0.1,
      refrigerator: 0.08,
      industrial: 0.12,
      other: 0.03,
    };

    const factor = depletionFactors[item];
    const percentageHarmed = factor * hours;
    const ozoneDepleted = percentageHarmed * 0.1;

    setResult(`
      <h2 class="text-2xl text-gray-800 mb-2">Depletion Results</h2>
      <p>Item or Activity: ${item}</p>
      <p>Hours of Use per Month: ${hours}</p>
      <p>Percentage of Ozone Layer Harmed: ${percentageHarmed.toFixed(2)}%</p>
      <p>Ozone Depleted to the Atmosphere: ${ozoneDepleted.toFixed(2)} units</p>
    `);
  };

  return (
    <div id="calc" className="p-10 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl text-gray-800 mb-5 font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent shadow-md">
        Calculate Ozone Layer Depletion
      </h1>
      <div className="container">
        <form
          onSubmit={e => e.preventDefault()}
          className="flex flex-col gap-4 bg-gray-200 p-5 rounded-lg shadow-md"
        >
          <label htmlFor="item" className="text-lg font-bold text-gray-800">
            Item or Activity:
          </label>
          <select
            id="item"
            ref={itemRef}
            required
            className="p-2 text-lg border border-gray-300 bg-white rounded-md"
          >
            <option value="">Select an item</option>
            <option value="vehicle">Vehicle</option>
            <option value="airConditioner">Air Conditioner</option>
            <option value="refrigerator">Refrigerator</option>
            <option value="industrial">Industrial Activity</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="hours" className="text-lg font-bold text-gray-800">
            Hours of Use per Month:
          </label>
          <input
            type="number"
            id="hours"
            ref={hoursRef}
            required
            min="0"
            className="p-2 text-lg border border-gray-300 bg-white rounded-md"
          />

          <button
            type="button"
            onClick={calculateDepletion}
            className="p-2 bg-teal-600 text-white rounded-md text-lg hover:bg-teal-700 transition duration-300"
          >
            Calculate Depletion
          </button>
        </form>
        <div
          className="mt-5 p-5 bg-teal-100 rounded-lg shadow-md text-lg text-gray-800"
          dangerouslySetInnerHTML={{ __html: result }}
        ></div>
      </div>
    </div>
  );
};

export default Calculation;
