"use client";

import React, { ReactNode, useContext, useMemo } from "react";
import { Button } from "../Button";
import { GlobalContext } from "../../GlobalContextProvider";
import { useRouter } from "next/navigation";

type AuthButtonProps = {
  children: ReactNode;
  theme?: string;
  className?: string;
  auth: "login" | "register" | "logout";
};

export const AuthButton = ({
  children,
  theme,
  className,
  auth,
}: AuthButtonProps) => {
  const { handleOpenLoginPopUp, handleOpenRegisterPopUp, handleUserLogout } =
    useContext(GlobalContext);
  const router = useRouter();
  const SHOW_AUTH: { [key: string]: () => void } = useMemo(
    () => ({
      login: handleOpenLoginPopUp,
      register: handleOpenRegisterPopUp,
      logout: () => handleUserLogout(),
    }),
    []
  );

  return (
    <Button click={SHOW_AUTH[auth]} className={className} theme={theme}>
      {children}
    </Button>
  );
};
