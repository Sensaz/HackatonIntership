"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CompanyPanelPage = () => {
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const companyID = localStorage.getItem("company");
        const response = await axios.get(
          `http://localhost:3000/companies/${companyID}`
        );
        setCompanyData(response?.data?.internshipAnnouncements);
        setLoading(false);
      } catch (error) {
        console.error("Błąd podczas pobierania danych firmy:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <h1>Nasze Ogłoszenia: </h1>
      <div>
        {loading ? (
          <p>Ładowanie danych...</p>
        ) : companyData && companyData.length > 0 ? (
          companyData.map((el) => (
            <section key={el.id}>
              <div>
                <h3>{el.title}</h3>
                <p>{el?.salaryRange || "Niepodano"}</p>
                <p>{el.companyName}</p>
                <p>{el.locations}</p>
                <p>{el.deadline}</p>
              </div>
              <Link href={`/company/posts/${el.id}`}>Szczegóły</Link>
            </section>
          ))
        ) : (
          <p>Brak ogłoszeń.</p>
        )}
      </div>
    </div>
  );
};

export default CompanyPanelPage;
