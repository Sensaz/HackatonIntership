import React from "react";
import CompanyNavigation from "./CompanyNavigation";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <CompanyNavigation />
      {children}
    </div>
  );
}
