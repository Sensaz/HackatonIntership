"use client";
import { ReactNode } from "react";
import classNames from "classnames";

type ButtonType = {
  children: ReactNode;
  theme?: string;
  className?: string;
  click: () => void;
};

export const Button = ({
  children,
  className = "",
  click = () => {},
}: ButtonType) => {
  return (
    <button onClick={click} className={classNames(className)}>
      {children}
    </button>
  );
};
