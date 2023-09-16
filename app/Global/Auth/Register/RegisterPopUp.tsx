"use client";
import React, { useCallback, useContext, useState } from "react";
import { Portal } from "../../Portal";
import { GlobalContext } from "../../../GlobalContextProvider";
import RegisterAsUser from "./RegisterAsUser";
import RegisterAsCompany from "./RegisterAsCompany";

export const RegisterPopUp = () => {
  const { showRegisterPopUp, handleOpenLoginPopUp, handleCloseAuthPopUp } =
    useContext(GlobalContext);
  const [flag, setFlag] = useState(true);
  const handleChangeRegisterSystemToBrand = useCallback(
    () => setFlag(false),
    []
  );
  const handleChangeRegisterSystemToUser = useCallback(() => setFlag(true), []);

  return (
    <Portal open={showRegisterPopUp} handleClose={handleCloseAuthPopUp}>
      <h2>Rejestruje się jako</h2>
      <h2>
        <span onClick={handleChangeRegisterSystemToUser}>Osoba Prywatna</span> /{" "}
        <span onClick={handleChangeRegisterSystemToBrand}>Firma</span>
      </h2>
      {flag ? <RegisterAsUser /> : <RegisterAsCompany />}
      <p>
        Masz już konto? <span onClick={handleOpenLoginPopUp}>Zaloguj się</span>
      </p>
    </Portal>
  );
};
