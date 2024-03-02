import React, { createContext } from "react";

const UserContext = createContext(); // User Context

const UserProvider = ({ children }) => { // User Provider
  const username = " - Liana 🚀";
  return (
    <UserContext.Provider value={username}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };