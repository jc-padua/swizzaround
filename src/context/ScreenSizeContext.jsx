import { createContext, useContext, useState } from 'react';

export const ScreenSizeContext = createContext(undefined);

export const ScreenSizeProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  return (
    <ScreenSizeContext.Provider
      value={{
        screenSize,
        setSize: size => setScreenSize(size),
      }}
    >
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => useContext(ScreenSizeContext);
