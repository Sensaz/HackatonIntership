import DropDownWrapper from "../Global/Dropdown/DropDownWrapper";
import IntershipOfferCard from "../Global/IntershipOfferCard";

export default function page() {
  return (
    <>
      <DropDownWrapper>
        <IntershipOfferCard />
        <IntershipOfferCard />
        <IntershipOfferCard />
        <IntershipOfferCard />
      </DropDownWrapper>
    </>
  );
}
