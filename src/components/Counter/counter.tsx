"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <h1 className="text-3xl ml-12">{counter}</h1>

      <button
        onClick={() => setCounter(counter + 1)}
        type="button"
        className="border-2 border-gray-900 p-2 mx-2"
      >
        Increment
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        className="border-2 border-gray-900 p-2 mx-2"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
