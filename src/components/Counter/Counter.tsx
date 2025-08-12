"use client";
import React, { useState } from "react";

interface CounterProps {
  initialCount?: number;
}

function Counter({ initialCount = 99 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="my-8 mx-auto flex w-full max-w-[190px]">
      <button 
        className="w-[42px] text-3xl font-bold bg-indigo-600 text-white border-none rounded cursor-pointer leading-[1.4] hover:opacity-80 transition-opacity"
        onClick={decrement}
      >
        -
      </button>
      <span className="flex-1 text-[42px] text-center">{count}</span>
      <button 
        className="w-[42px] text-3xl font-bold bg-indigo-600 text-white border-none rounded cursor-pointer leading-[1.4] hover:opacity-80 transition-opacity"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
