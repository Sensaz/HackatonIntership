"use client";

import { useEffect, useState } from "react";
type DropdownValueType = {
  dynamicValue: string;
  searchData?: string | undefined;
};
export default function DropdownValue({
  searchData,
  dynamicValue,
}: DropdownValueType) {
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    setValue(dynamicValue);
  }, [dynamicValue]);
  useEffect(() => {
    setValue(searchData || dynamicValue);
  }, []);
  return <div>{value}</div>;
}
