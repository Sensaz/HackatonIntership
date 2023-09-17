import React from "react";

const page = ({ params }) => {
  return (
    <div>
      Oferta pracy o id {params.id}
      <h3>Doradca Klienta</h3>
      <p>Opcjonalne widełki hajsu</p>
      <p>Ammega Poland Sp. z o.o.</p>
      <p>Opis oferty</p>
      <p>Czechowice-Dziedzice, śląskie</p>
      <p>Zakończona / Wazna do 01.09.2023</p>
      <section>
        <div>
          <p>Andrzej Nowak</p>
          <p>CV</p>
        </div>
      </section>
    </div>
  );
};

export default page;
