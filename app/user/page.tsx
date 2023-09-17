"use client";
import { useClickObjectCreator } from "@/hooks/useClickObjectCreator";
import { useInitialState } from "@/hooks/useInitialState";
import React, { useCallback, useMemo, useState } from "react";
import { handleSetDropdownValue } from "./handleSetDropdownValue";
import { generateSelectValueMap } from "./generateSelectValueMap";
import { DropDown } from "../Global/Dropdown/DropDown";
import { intershipDataSort } from "@/assets";
import classNames from "classnames";
import DropDownWrapper from "../Global/Dropdown/DropDownWrapper";

export default function page() {
  const { initialState } = useMemo(
    () => useInitialState(intershipDataSort),
    []
  );
  const [groupsSort, setGroupsSort] =
    useState<KeyValueMap<BooleanOrString>>(initialState);

  const { clickObj } = useMemo(
    () => useClickObjectCreator(intershipDataSort, setGroupsSort),
    []
  );

  const hasTrueValue = useMemo(
    () => Object.values(groupsSort).some((value) => value === true),
    [groupsSort]
  );

  const paramData = useMemo(
    () => generateSelectValueMap(intershipDataSort),
    []
  );

  const generateDropdownValueHandler = useCallback(
    (toChange: string, value: string, whichDropdownIsOpen: string) => {
      handleSetDropdownValue(
        setGroupsSort,
        toChange,
        value,
        whichDropdownIsOpen
      );
    },
    []
  );
  return (
    <>
      <DropDownWrapper>oferty</DropDownWrapper>
    </>
  );
}
