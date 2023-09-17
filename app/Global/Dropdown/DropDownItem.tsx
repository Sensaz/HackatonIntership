"use client";
import Link from "next/link";

type MyComponentProps = {
  value: string;
  children: string;
  handleSetDropdownValue: HandleSetDropdownValueType;
  toChange: string;
  whichDropdownIsOpen: string;
  paramTitle: string;
};

export const DropDownItem = ({
  children,
  handleSetDropdownValue,
  toChange,
  whichDropdownIsOpen,
  value,
  paramTitle,
}: MyComponentProps) => {
  const handleSetUrl = () => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set(paramTitle, value);
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    return newUrl;
  };

  return (
    <li
      onClick={() => {
        handleSetDropdownValue(toChange, children, whichDropdownIsOpen);
      }}
      className="dropdown__item"
    >
      <Link className="dropdown__link" href={handleSetUrl()}>
        - {children}
      </Link>
    </li>
  );
};
