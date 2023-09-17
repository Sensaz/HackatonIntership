"use client";
import { createContext, useState, ReactNode, useCallback } from "react";

type IGlobalContextProps = {
  showLoginPopUp: boolean;
  showRegisterPopUp: boolean;
  isUserLoggedIn: boolean;
  isCompanyLoggedIn: boolean;
  handleCloseAuthPopUp: Void;
  handleOpenRegisterPopUp: Void;
  handleOpenLoginPopUp: Void;
  handleUserLogin: Void;
  handleUserLogout: Void;
  handleCompanyLogin: Void;
  handleCompanyLogout: Void;
};

type GlobalContextProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<IGlobalContextProps>({
  showLoginPopUp: false,
  showRegisterPopUp: false,
  isUserLoggedIn: false,
  isCompanyLoggedIn: false,
  handleCloseAuthPopUp: () => {},
  handleOpenRegisterPopUp: () => {},
  handleOpenLoginPopUp: () => {},
  handleUserLogin: () => {},
  handleUserLogout: () => {},
  handleCompanyLogin: () => {},
  handleCompanyLogout: () => {},
});

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [showLoginPopUp, setShowLoginPopUp] = useState<boolean>(false);
  const [showRegisterPopUp, setShowRegisterPopUp] = useState<boolean>(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [isCompanyLoggedIn, setIsCompanyLoggedIn] = useState<boolean>(false);

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
    setIsUserLoggedIn(true);
  }, []);
  const handleUserLogout: Void = useCallback(() => {
    setIsUserLoggedIn(false);
  }, []);

  const handleCompanyLogin: Void = useCallback(() => {
    setIsCompanyLoggedIn(true);
  }, []);
  const handleCompanyLogout: Void = useCallback(() => {
    setIsCompanyLoggedIn(false);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        showLoginPopUp,
        showRegisterPopUp,
        isUserLoggedIn,
        isCompanyLoggedIn,
        handleCloseAuthPopUp,
        handleOpenRegisterPopUp,
        handleOpenLoginPopUp,
        handleUserLogin,
        handleUserLogout,
        handleCompanyLogin,
        handleCompanyLogout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
