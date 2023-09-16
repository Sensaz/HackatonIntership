"use client";
import React, { useCallback, useContext, useState } from "react";
import { Portal } from "../../Portal";
import { GlobalContext } from "../../../GlobalContextProvider";
import LoginForBrand from "./LoginForBrand";
import LoginForUser from "./LoginForUser";

export const LoginPopUp = () => {
  const [flag, setFlag] = useState(true);
  const handleChangeLoginSystemToBrand = useCallback(() => setFlag(false), []);
  const handleChangeLoginSystemToUser = useCallback(() => setFlag(true), []);
  const { handleCloseAuthPopUp, showLoginPopUp, handleOpenRegisterPopUp } =
    useContext(GlobalContext);
  return (
    <Portal open={showLoginPopUp} handleClose={handleCloseAuthPopUp}>
      <div>
        <h2>Loguje się jako</h2>
        <h3>
          <span onClick={handleChangeLoginSystemToUser}>Osoba Prywatna</span> /{" "}
          <span onClick={handleChangeLoginSystemToBrand}>Firma</span>
        </h3>
        {flag ? <LoginForUser /> : <LoginForBrand />}
        <p>
          Niemasz jeszcze konta?{" "}
          <span onClick={handleOpenRegisterPopUp}>Zarejestruj się</span>
        </p>
      </div>
    </Portal>
  );
};
