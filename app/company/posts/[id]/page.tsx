"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = ({ params }: any) => {
  const [dataFetch, setDataFetch] = useState([]);

  useEffect(() => {
    (async () => {
      const companyID = localStorage.getItem("company");
      const response = await axios.get(
        `http://localhost:3000/companies/${companyID}`
      );

      setDataFetch(
        response.data.internshipAnnouncements.find(
          (item: any) => item.id == params.id
        ) || []
      );
    })();
  }, [params.id]);


  console.log(dataFetch);

  return (
    <div>
      <section>
        <div>
          <h3>{dataFetch?.title}</h3>
          <p>{dataFetch?.salaryRange || "Niepodano"}</p>
          <p>{dataFetch?.companyName}</p>
          <p>{dataFetch?.description}</p>
          <p>{dataFetch?.mainTechnology}</p>
          <p>{dataFetch?.locations}</p>
          <p>{dataFetch?.deadline}</p>
        </div>
      </section>
    </div>
  );
};

export default Page;
