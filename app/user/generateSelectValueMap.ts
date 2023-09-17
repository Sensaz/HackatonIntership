export const generateSelectValueMap = (inputObject: SortSetup[]) => {
  const result: KeyValueMap<KeyValueMap<string>> = {};

  inputObject.forEach(({ content, paramTitle }) => {
    const valueMap: KeyValueMap<string> = {};
    content.forEach(({ value, selectText }) => {
      valueMap[value] = selectText;
    });

    result[paramTitle] = valueMap;
  });

  return result;
};
