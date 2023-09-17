"use client";

import React, { ReactNode, useCallback, useMemo, useState } from "react";
import { DropDown } from "./DropDown";
import { useInitialState } from "@/hooks/useInitialState";
import { useClickObjectCreator } from "@/hooks/useClickObjectCreator";
import { generateSelectValueMap } from "@/app/Global/Dropdown/generateSelectValueMap";
import { intershipDataSort } from "@/assets";
import { handleSetDropdownValue } from "@/app/Global/Dropdown/handleSetDropdownValue";
import "@/style/dropdown-wrapper.sass";
import classNames from "classnames";

const DropDownWrapper = ({ children }: { children: ReactNode }) => {
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
      <DropDown
        clickObj={clickObj}
        isOpenObj={groupsSort}
        nearMeetupSorts={intershipDataSort}
        paramData={paramData}
        handleSetDropdownValue={generateDropdownValueHandler}
      />
      <article
        className={classNames("dropdown-wrapper__article", {
          "dropdown-wrapper__article--top": hasTrueValue,
        })}
      >
        {children}
      </article>
    </>
  );
};

export default DropDownWrapper;
