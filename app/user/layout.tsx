import React from "react";
import UserNavigation from "./UserNavigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <UserNavigation />
      {children}
    </div>
  );
}
