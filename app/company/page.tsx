import React from "react";
import DropDownWrapper from "../Global/Dropdown/DropDownWrapper";
import IntershipOfferCard from "../Global/IntershipOfferCard";

const CompanyPage = () => {
  return (
    <>
      {" "}
      <DropDownWrapper>
        <IntershipOfferCard />
        <IntershipOfferCard />
        <IntershipOfferCard />
        <IntershipOfferCard />
      </DropDownWrapper>
    </>
  );
};

export default CompanyPage;
