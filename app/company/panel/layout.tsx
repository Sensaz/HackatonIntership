import Link from "next/link";
import React from "react";

export default function CompanyPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Link href="/company/panel/add-announcement">Dodaj ogłoszenie</Link>
      <Link href="/company/panel">Nasze ogłoszenia</Link>
      <div>{children}</div>
    </div>
  );
}
