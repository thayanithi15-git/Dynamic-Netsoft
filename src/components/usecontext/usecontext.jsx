import React, { createContext, useState } from "react";

export const TotalContext = createContext();

export const TotalProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState(0);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <TotalContext.Provider value={{ total, setTotal, qty, setQty, theme, toggleTheme }}>
      {children}
    </TotalContext.Provider>
  );
};
