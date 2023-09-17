"use client";
import React, { useCallback, useContext, useState } from "react";
import { Portal } from "../../Portal";
import { GlobalContext } from "../../../GlobalContextProvider";
import RegisterAsUser from "./RegisterAsUser";
import RegisterAsCompany from "./RegisterAsCompany";
import "@/style/form.sass";
import classNames from "classnames";

export const RegisterPopUp = () => {
  const { showRegisterPopUp, handleOpenLoginPopUp, handleCloseAuthPopUp } =
    useContext(GlobalContext);
  const [flag, setFlag] = useState(true);
  const handleChangeRegisterSystemToBrand = useCallback(
    () => setFlag(false),
    []
  );
  const handleChangeRegisterSystemToUser = useCallback(() => setFlag(true), []);
  const [loginType, setLoginType] = useState(true);

  return (
    <Portal open={showRegisterPopUp} handleClose={handleCloseAuthPopUp}>
      <h2>Rejestruje się jako</h2>
      <h3>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleChangeRegisterSystemToUser();
            setLoginType(true);
          }}
          className={classNames({ glowText: loginType })}
        >
          Osoba Prywatna
        </span>{" "}
        /{" "}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {handleChangeRegisterSystemToBrand()
            setLoginType(false)}}
          className={classNames({ glowText: !loginType })}
        >
          Firma
        </span>
      </h3>
      {flag ? <RegisterAsUser /> : <RegisterAsCompany />}
      <p>
        Masz już konto?{" "}
        <span style={{ cursor: "pointer" }} onClick={handleOpenLoginPopUp}>
          Zaloguj się
        </span>
      </p>
    </Portal>
  );
};
