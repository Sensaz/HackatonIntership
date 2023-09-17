"use client";
import React, { useContext, useEffect } from "react";
import { AuthButton } from "../Global/Auth/AuthButton";
import Link from "next/link";
import { GlobalContext } from "../GlobalContextProvider";
import { useRouter } from "next/navigation";
import "@/style/navigation.sass";

const CompanyNavigation = () => {
  const { isCompanyLoggedIn } = useContext(GlobalContext);
  const router = useRouter();
  useEffect(() => {
    if (!isCompanyLoggedIn) router.push("/");
  }, [isCompanyLoggedIn]);
  return (
    <nav className="navigation">
      <main className="navigation__main">
        <div>
          <span className="navigaiton__logo">LOGO</span>
        </div>
        <div className="navigation__menu">
          <AuthButton auth="logoutCompany" theme="primary">
            Wyloguj
          </AuthButton>
          <div>
            <Link className="navigation__link" href="/company/panel">
              Panel administracyjny
            </Link>
            <br />
            <Link className="navigation__link" href="/company">
              Przeglądaj oferty
            </Link>
          </div>
        </div>
      </main>
    </nav>
  );
};

export default CompanyNavigation;
