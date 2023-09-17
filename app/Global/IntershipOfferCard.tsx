"use client";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContextProvider";
import axios from "axios";
import { Button } from "./Button";
import "@/style/IntershipOfferCard.sass";

const IntershipOfferCard = () => {
  const { isUserLoggedIn } = useContext(GlobalContext);
  const [intershipData, setInterShipData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/internshipOffer`);
      setInterShipData(response.data[0]);
    };

    fetchData();
  }, []);
  console.log(intershipData);
  return (
    <section className="intership-offer-card">
      <div className="intership-offer-card__wrapper">
        <h3>{intershipData?.title}</h3>
        <p>{intershipData?.salaryRange} zł</p>
        <p>{intershipData?.description}</p>
        <p>{intershipData?.companyName}</p>
        <p>{intershipData?.locations}</p>
        <p>Ogłoszenie wazne do: {intershipData?.deadline}</p>
      </div>
      {isUserLoggedIn ? <Button>Aplikuj</Button> : <Button>Aplikuj</Button>}
    </section>
  );
};

export default IntershipOfferCard;
