import { SetStateAction } from "react";

type DataType = SortSetup[];

type SetStateType = (
  value: SetStateAction<KeyValueMap<BooleanOrString>>
) => void;

export const useClickObjectCreator = (
  data: DataType,
  setState: SetStateType
) => {
  const clickObj = data.reduce((acc, current) => {
    acc[current.clickFunctionName] = () =>
      ((key: string) => {
        setState((prevState) => ({
          ...Object.fromEntries(
            Object.keys(prevState).map((key) =>
              key.includes("Sort") ? [key, false] : [key, prevState[key]]
            )
          ),
          [key]: !prevState[key],
        }));
      })(current.clickFunctionIsOpen);
    return acc;
  }, {} as KeyValueMap<Void>);

  return { clickObj };
};
