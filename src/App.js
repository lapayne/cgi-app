import React, { useState } from "react";

// Main App component
const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Critical Corporate App
        </h1>
        <p className="text-gray-600 mb-6">
          This is a simple app to demonstrate a pipeline
        </p>
        <div className="flex flex-col items-center justify-center space-y-4">
          <p
            className="text-5xl font-extrabold text-blue-600"
            data-testid="count-display"
            name="count-display"
          >
            {count}
          </p>
          <button
            onClick={incrementCount}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            data-testid="increment-button"
            name="increment-button"
          >
            Increment Count
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
