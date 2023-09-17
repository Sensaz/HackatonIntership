export const handleSetDropdownValue = (
  setState: React.Dispatch<React.SetStateAction<KeyValueMap<BooleanOrString>>>,
  toChange: string,
  value: string,
  whichDropdownIsOpen: string
) => {
  setState((prevValue) => ({
    ...prevValue,
    [toChange]: value,
    [whichDropdownIsOpen]: false,
  }));
};
