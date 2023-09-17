/* --------------------------------- */
// For categoryCards in data.ts
/* --------------------------------- */
type CategoryCardsType<PathType = string> = {
  id: number;
  text: string;
  alt: string;
  src: PathType;
};

type PartialCategoryCardsType<PathType = string> = Partial<
  CategoryCardsType<PathType>
>;

/* --------------------------------- */
/* --------------------------------- */
/* --------------------------------- */

/* --------------------------------- */
// For meetupWorkCards in data.ts
/* --------------------------------- */

type MeetupWorkCardType<PathType = string> = {
  id: number;
  title: string;
  text: string;
  alt: string;
  src: PathType;
  path?: string;
};

type PartialMeetupWorkCardType<PathType = string> = Partial<
  MeetupWorkCardType<PathType>
>;

/* --------------------------------- */
/* --------------------------------- */
/* --------------------------------- */

/* --------------------------------- */
// For nearGroups/EventObj in data.ts
/* --------------------------------- */

type NearMeetupObjType<PathType> = {
  id: number;
  src: PathType;
  alt: string;
  isNewGroup: boolean;
  desc: string;
  upcommingEventDate: string;
};

type NearGroupsObjType<PathType = string> = NearMeetupObjType<PathType> & {
  groupName: string;
};

type PartialNearGroupsObjType<PathType = string> = Partial<
  NearGroupsObjType<PathType>
>;

type NearEventObjType<PathType = string> = NearMeetupObjType<PathType> & {
  title: string;
};

type PartialNearEventObjType<PathType = string> = Partial<
  NearEventObjType<PathType>
>;

/* --------------------------------- */
/* --------------------------------- */
/* --------------------------------- */

/* --------------------------------- */
// For Login and Register PupUpButtons in data.ts
/* --------------------------------- */

type ButtonPupUp = {
  id: number;
  text: string;
  icon: string;
  manualRegistration?: boolean;
};

/* --------------------------------- */
/* --------------------------------- */
/* --------------------------------- */

/* --------------------------------- */
// For groups and events NearMeetupSortsSetup in data.ts
/* --------------------------------- */

type SelectOption = {
  id: number;
  selectText: string;
  value: string;
};

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
/* --------------------------------- */
/* --------------------------------- */

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
