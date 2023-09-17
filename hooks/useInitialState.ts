export const useInitialState = (data: SortSetup[]) => {
  const initialState = data.reduce((acc, current) => {
    acc[current.clickFunctionIsValue] = current.title;
    acc[current.clickFunctionIsOpen] = false;
    return acc;
  }, {} as KeyValueMap<BooleanOrString>);

  return { initialState };
};
