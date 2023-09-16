"use client";
import { createContext, useState, ReactNode, useCallback } from "react";

type Void = () => void;

type IGlobalContextProps = {
  showLoginPopUp: boolean;
  showRegisterPopUp: boolean;
  handleCloseAuthPopUp: Void;
  handleOpenRegisterPopUp: Void;
  handleOpenLoginPopUp: Void;
};

type GlobalContextProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<IGlobalContextProps>({
  showLoginPopUp: false,
  showRegisterPopUp: false,
  handleCloseAuthPopUp: () => {},
  handleOpenRegisterPopUp: () => {},
  handleOpenLoginPopUp: () => {},
});

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [showLoginPopUp, setShowLoginPopUp] = useState<boolean>(false);
  const [showRegisterPopUp, setShowRegisterPopUp] = useState<boolean>(false);

  const handleOpenLoginPopUp: Void = useCallback(() => {
    setShowLoginPopUp(true);
    setShowRegisterPopUp(false);
  }, []);

  const handleOpenRegisterPopUp: Void = useCallback(() => {
    setShowRegisterPopUp(true);
    setShowLoginPopUp(false);
  }, []);

  const handleCloseAuthPopUp: Void = useCallback(() => {
    setShowLoginPopUp(false);
    setShowRegisterPopUp(false);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        showLoginPopUp,
        showRegisterPopUp,
        handleCloseAuthPopUp,
        handleOpenRegisterPopUp,
        handleOpenLoginPopUp,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
