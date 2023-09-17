"use client";

import React, { ReactNode, useContext, useMemo } from "react";
import { Button } from "../Button";
import { GlobalContext } from "../../GlobalContextProvider";

type AuthButtonProps = {
  children: ReactNode;
  theme?: string;
  className?: string;
  auth: "login" | "register" | "logoutUser" | "logoutCompany";
};

export const AuthButton = ({
  children,
  theme,
  className,
  auth,
}: AuthButtonProps) => {
  const {
    handleOpenLoginPopUp,
    handleOpenRegisterPopUp,
    handleUserLogout,
    handleCompanyLogout,
  } = useContext(GlobalContext);
  const SHOW_AUTH: { [key: string]: () => void } = useMemo(
    () => ({
      login: handleOpenLoginPopUp,
      register: handleOpenRegisterPopUp,
      logoutUser: handleUserLogout,
      logoutCompany: handleCompanyLogout,
    }),
    []
  );

  return (
    <Button click={SHOW_AUTH[auth]} className={className} theme={theme}>
      {children}
    </Button>
  );
};
