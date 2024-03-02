import React, { createContext, useState } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(10);
  const increment = () => {
    setCounter((counter) => counter + 1);
  };
  const decrement = () => {
    setCounter((counter) => counter - 1);
  };
  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
