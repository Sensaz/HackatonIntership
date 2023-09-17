"use client";
import React, { useCallback, useContext, useState } from "react";
import { Portal } from "../../Portal";
import { GlobalContext } from "../../../GlobalContextProvider";
import LoginForBrand from "./LoginForBrand";
import LoginForUser from "./LoginForUser";
import classNames from "classnames";
import "@/style/form.sass";

export const LoginPopUp = () => {
  const [flag, setFlag] = useState(true);
  const handleChangeLoginSystemToBrand = useCallback(() => setFlag(false), []);
  const handleChangeLoginSystemToUser = useCallback(() => setFlag(true), []);
  const { handleCloseAuthPopUp, showLoginPopUp, handleOpenRegisterPopUp } =
    useContext(GlobalContext);
  const [loginType, setLoginType] = useState(true);
  return (
    <Portal open={showLoginPopUp} handleClose={handleCloseAuthPopUp}>
      <div>
        <h2>Loguje się jako</h2>
        <h3>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleChangeLoginSystemToUser();
              setLoginType(true);
            }}
            className={classNames({ glowText: loginType })}
          >
            Osoba Prywatna
          </span>{" "}
          /{" "}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleChangeLoginSystemToBrand();
              setLoginType(false);
            }}
            className={classNames({ glowText: !loginType })}
          >
            Firma
          </span>
        </h3>
        {flag ? <LoginForUser /> : <LoginForBrand />}
        <p>
          Niemasz jeszcze konta?{" "}
          <span style={{ cursor: "pointer" }} onClick={handleOpenRegisterPopUp}>
            Zarejestruj się
          </span>
        </p>
      </div>
    </Portal>
  );
};
