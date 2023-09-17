import React from "react";
import { AuthButton } from "./Global/Auth/AuthButton";
import DropDownWrapper from "./Global/Dropdown/DropDownWrapper";
import IntershipOfferCard from "./Global/IntershipOfferCard";
import "@/style/navigation.sass";

const Navigation = () => {
  return (
    <nav className="navigation">
      <main className="navigation__main">
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
      </main>
      <DropDownWrapper>
        <IntershipOfferCard />
      </DropDownWrapper>
    </nav>
  );
};

export default Navigation;
