import React, { createContext, useContext, useState } from "react";

const DevAccessContext = createContext();

export const DevAccessProvider = ({ children }) => {
  const [hasAccess, setHasAccess] = useState(
    sessionStorage.getItem("aiMedhaDevAccess") === "true"
  );

  const grantAccess = () => {
    sessionStorage.setItem("aiMedhaDevAccess", "true");
    setHasAccess(true);
  };

  return (
    <DevAccessContext.Provider value={{ hasAccess, grantAccess }}>
      {children}
    </DevAccessContext.Provider>
  );
};

export const useDevAccess = () => useContext(DevAccessContext);
