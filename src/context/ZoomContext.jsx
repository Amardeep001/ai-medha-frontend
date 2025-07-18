import React, { createContext, useState, useContext, useEffect } from "react";

const ZoomContext = createContext();

export const useZoom = () => useContext(ZoomContext);

export const ZoomProvider = ({ children }) => {
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => setZoom((z) => Math.min(z + 0.05, 2));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.05, 0.5));
  const resetZoom = () => setZoom(1);

  useEffect(() => {
    document.documentElement.style.fontSize = `${zoom * 100}%`;
  }, [zoom]);

  return (
    <ZoomContext.Provider value={{ zoom, zoomIn, zoomOut, resetZoom }}>
      {children}
    </ZoomContext.Provider>
  );
};
