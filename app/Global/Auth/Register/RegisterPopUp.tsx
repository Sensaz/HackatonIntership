"use client";
import React, { useContext } from "react";
import { Portal } from "../../Portal";
import { GlobalContext } from "../../../GlobalContextProvider";

export const RegisterPopUp = () => {
  const { showRegisterPopUp, handleOpenLoginPopUp, handleCloseAuthPopUp } =
    useContext(GlobalContext);

  return (
    <Portal open={showRegisterPopUp} handleClose={handleCloseAuthPopUp}>
      siema we sie zarejestruj
    </Portal>
  );
};
