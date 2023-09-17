"use client";
import { createContext, useState, ReactNode, useCallback } from "react";

type IGlobalContextProps = {
  showLoginPopUp: boolean;
  showRegisterPopUp: boolean;
  isUserLoggedIn: boolean;
  handleCloseAuthPopUp: Void;
  handleOpenRegisterPopUp: Void;
  handleOpenLoginPopUp: Void;
  handleUserLogin: Void;
  handleUserLogout: Void;
};

type GlobalContextProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<IGlobalContextProps>({
  showLoginPopUp: false,
  showRegisterPopUp: false,
  isUserLoggedIn: false,
  handleCloseAuthPopUp: () => {},
  handleOpenRegisterPopUp: () => {},
  handleOpenLoginPopUp: () => {},
  handleUserLogin: () => {},
  handleUserLogout: () => {},
});

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [showLoginPopUp, setShowLoginPopUp] = useState<boolean>(false);
  const [showRegisterPopUp, setShowRegisterPopUp] = useState<boolean>(false);
  const [isUserLoggedIn, setisUserLoggedIn] = useState<boolean>(false);

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
  const handleUserLogin: Void = useCallback(() => {
    setisUserLoggedIn(true);
  }, []);
  const handleUserLogout: Void = useCallback(() => {
    setisUserLoggedIn(false);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        showLoginPopUp,
        showRegisterPopUp,
        isUserLoggedIn,
        handleCloseAuthPopUp,
        handleOpenRegisterPopUp,
        handleOpenLoginPopUp,
        handleUserLogin,
        handleUserLogout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
