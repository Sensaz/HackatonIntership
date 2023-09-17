import React from "react";
import { AuthButton } from "../Global/Auth/AuthButton";
import Link from "next/link";

const UserNavigation = () => {
  return (
    <nav className="navigation">
      <div>
        <span className="navigaiton__logo">LOGO</span>
      </div>
      <div className="navigation__menu">
        <AuthButton auth="logout" theme="primary">
          Wyloguj
        </AuthButton>
        <div>
          <Link href="/user/panel">Panel uzytkownika</Link>
          <br />
          <Link href="/user">Przeglądaj oferty</Link>
        </div>
      </div>
    </nav>
  );
};

export default UserNavigation;