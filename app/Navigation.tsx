import React from "react";
import { AuthButton } from "./Global/Auth/AuthButton";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div>
        <span className="navigaiton__logo">LOGO</span>
      </div>
      <div className="navigation__menu">
        <AuthButton auth="login" theme="primary">
          Zaloguj
        </AuthButton>
        <AuthButton auth="register" theme="primary">
          Zarejestruj
        </AuthButton>
      </div>
    </nav>
  );
};

export default Navigation;
