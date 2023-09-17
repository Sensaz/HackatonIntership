"use client";
import React, { useContext, useEffect } from "react";
import { AuthButton } from "../Global/Auth/AuthButton";
import Link from "next/link";
import { GlobalContext } from "../GlobalContextProvider";
import { useRouter } from "next/navigation";
import "@/style/navigation.sass";

const UserNavigation = () => {
  const { isUserLoggedIn } = useContext(GlobalContext);
  const router = useRouter();
  useEffect(() => {
    if (!isUserLoggedIn) router.push("/");
  }, [isUserLoggedIn]);
  return (
    <nav className="navigation">
      <main className="navigation__main">
        <div>
          <span className="navigaiton__logo">LOGO</span>
        </div>
        <div className="navigation__menu">
          <AuthButton auth="logoutUser" theme="primary">
            Wyloguj
          </AuthButton>
          <div>
            <Link className="navigation__link" href="/user/panel">
              Panel uzytkownika
            </Link>
            <br />
            <Link className="navigation__link" href="/user">
              Przeglądaj oferty
            </Link>
          </div>
        </div>
      </main>
    </nav>
  );
};

export default UserNavigation;
