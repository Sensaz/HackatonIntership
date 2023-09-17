/* --------------------------------- */
// For groups and events NearMeetupSortsSetup in data.ts
/* --------------------------------- */

type SortSetup = {
  id: string;
  title: string;
  clickFunctionName: string;
  clickFunctionIsOpen: string;
  clickFunctionIsValue: string;
  paramTitle: string;
  color?: boolean;
  content: SelectOption[];
};

/* --------------------------------- */
// General Types
/* --------------------------------- */
type BooleanOrString = boolean | string;
type Void = () => void;

type HandleSetDropdownValueType = (
  toChange: string,
  value: string,
  whichDropdownIsOpen: string
) => void;

type KeyValueMap<T> = {
  [key: string]: T;
};
