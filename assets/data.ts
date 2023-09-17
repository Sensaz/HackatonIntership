export const intershipDataSort: SortSetup[] = [
  {
    id: "intershipDataSort1",
    title: "Dowolny język programowania",
    clickFunctionName: "handleProgramingLanguageSort",
    clickFunctionIsOpen: "programingLanguageSort",
    clickFunctionIsValue: "programingLanguageValue",
    paramTitle: "progaming-language",
    content: [
      {
        id: 1,
        selectText: "Dowolny język programowania",
        value: "any-programing-languge",
      },
      { id: 2, selectText: "JavaScript", value: "js" },
    ],
  },
  {
    id: "intershipDataSort2",
    title: "Dowolna Kwota",
    clickFunctionName: "handlePaymentCategorySort",
    clickFunctionIsOpen: "paymentCategorySort",
    clickFunctionIsValue: "paymentCategoryValue",
    paramTitle: "payment",
    content: [
      { id: 1, selectText: "Dowolna kwota", value: "any-price" },
      { id: 2, selectText: "Bezpłatny", value: "free" },
      {
        id: 3,
        selectText: "Do 3 tysięcy",
        value: "three-thousand",
      },
      { id: 4, selectText: "Do 4 tysięcy", value: "four-thousand" },
      { id: 5, selectText: "Do 5 tysięcy", value: "five-thousand" },
      { id: 6, selectText: "Do 6 tysięcy", value: "six-thousand" },
      {
        id: 7,
        selectText: "Do 8 tysięcy",
        value: "eight-thousands",
      },
    ],
  },
  {
    id: "intershipDataSort3",
    title: "Dowolna lokacja",
    clickFunctionName: "handleLocationSort",
    clickFunctionIsOpen: "locationSort",
    clickFunctionIsValue: "locationValue",
    paramTitle: "location",
    content: [
      {
        id: 1,
        selectText: "Dowolna lokacja",
        value: "any-location",
      },
      { id: 2, selectText: "Zdalnie", value: "remote" },
      { id: 3, selectText: "Bielsko-Biała", value: "bielsko-biala" },
    ],
  },
  {
    id: "intershipDataSort4",
    title: "Dowolna umowa",
    clickFunctionName: "handleContractSort",
    clickFunctionIsOpen: "contractSort",
    clickFunctionIsValue: "contractValue",
    paramTitle: "contract",
    content: [
      {
        id: 1,
        selectText: "Dowolna umowa",
        value: "any-contract",
      },
      { id: 2, selectText: "Umowa Zlecenie", value: "mandate contract" },
      { id: 3, selectText: "Umowa o Prace", value: "contract-of-employment" },
      { id: 4, selectText: "Umowa o Dzieło", value: "contract-work" },
      { id: 5, selectText: "B2B", value: "b2b" },
    ],
  },
];
