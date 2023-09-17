"use client";
import React, { useContext, useEffect } from "react";
import { AuthButton } from "../Global/Auth/AuthButton";
import Link from "next/link";
import { GlobalContext } from "../GlobalContextProvider";
import { useRouter } from "next/navigation";

const CompanyNavigation = () => {
  const { isCompanyLoggedIn } = useContext(GlobalContext);
  const router = useRouter();
  useEffect(() => {
    if (!isCompanyLoggedIn) router.push("/");
  }, [isCompanyLoggedIn]);
  return (
    <nav className="navigation">
      <div>
        <span className="navigaiton__logo">LOGO</span>
      </div>
      <div className="navigation__menu">
        <AuthButton auth="logoutCompany" theme="primary">
          Wyloguj
        </AuthButton>
        <div>
          <Link href="/company/panel">Panel administracyjny</Link>
          <br />
          <Link href="/company">Przeglądaj oferty</Link>
        </div>
      </div>
    </nav>
  );
};

export default CompanyNavigation;
