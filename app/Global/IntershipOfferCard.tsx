"use client";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContextProvider";
import axios from "axios";

const IntershipOfferCard = () => {
  const { isUserLoggedIn } = useContext(GlobalContext);
  const [intershipData, setInterShipData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/internshipOffer`);
      setInterShipData(response.data[0]);
    };

    fetchData();
  }, []);
  console.log(intershipData)
  return (
    <section>
      <div>
        <h3>{intershipData?.title}</h3>
        <p>{intershipData?.salaryRange}</p>
        <p>{intershipData?.description}</p>
        <p>{intershipData?.companyName}</p> 
        <p>{intershipData?.locations}</p>
        <p>{intershipData?.deadline}</p>
      </div>
      {isUserLoggedIn ? <button>Aplikuj</button> : <button>Aplikuj</button>}
    </section>
  );
};

export default IntershipOfferCard;
