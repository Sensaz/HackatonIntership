"use client";
import axios from "axios";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface AnnouncementForm {
  title: string;
  description: string;
  locations: string[];
  mainTechnology: string;
  salaryRange?: string;
  deadline: Date;
  companyName: string;
}

const AddAnnouncementPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AnnouncementForm>();

  const currentDate = new Date().toISOString().split("T")[0];

  const [minDeadline, setMinDeadline] = useState(currentDate);

  const onSubmit: SubmitHandler<AnnouncementForm> = async (data) => {
    const companyID = localStorage.getItem("company");
    const response = await axios.get(
      `http://localhost:3000/companies/${companyID}`
    );
    const companyData = response.data;
    companyData.internshipAnnouncements.push({
      ...data,
      id: new Date().valueOf(),
    });
    const updateResponse = await axios.put(
      `http://localhost:3000/companies/${companyID}`,
      companyData
    );
    const addedInternshipOffer = await axios.post(
      `http://localhost:3000/internshipOffer`,
      { ...data, id: new Date().valueOf() }
    );
    reset();
  };

  return (
    <div>
      <h1>Dodaj ogłoszenie</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Tytuł ogłoszenia:</label>
          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
          />
          {errors.title && <span className="error">To pole jest wymagane</span>}
        </div>
        <div>
          <label htmlFor="description">Opis ogłoszenia:</label>
          <textarea
            id="description"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="error">To pole jest wymagane</span>
          )}
        </div>
        <div>
          <label>Miejsce pracy (wybór wielokrotny):</label>
          <label>
            <input type="checkbox" {...register("locations")} value="Zdalnie" />{" "}
            Zdalnie
          </label>
          <label>
            <input
              type="checkbox"
              {...register("locations")}
              value="Bielsko Biała"
            />{" "}
            Bielsko Biała
          </label>
          {errors.locations && (
            <span className="error">To pole jest wymagane</span>
          )}
        </div>
        <div>
          <label htmlFor="mainTechnology">Główna technologia:</label>
          <select
            id="mainTechnology"
            {...register("mainTechnology", { required: true })}
          >
            <option value="JavaScript">JavaScript</option>
          </select>
          {errors.mainTechnology && (
            <span className="error">To pole jest wymagane</span>
          )}
        </div>
        <div>
          <label htmlFor="salaryRange">Opcjonalnie wysokośc stawki:</label>
          <input type="number" id="salaryRange" {...register("salaryRange")} />
        </div>
        <div>
          <label htmlFor="companyName">Nazwa firmy:</label>
          <input
            type="text"
            id="companyName"
            {...register("companyName", { required: true })}
          />
          {errors.companyName && (
            <span className="error">To pole jest wymagane</span>
          )}
        </div>
        <div>
          <label htmlFor="deadline">Termin ogłoszenia:</label>
          <input
            type="date"
            id="deadline"
            {...register("deadline", {
              required: true,
              min: minDeadline,
            })}
          />
          {errors.deadline && (
            <span className="error">To pole jest wymagane</span>
          )}
        </div>
        <div>
          <button type="submit">Dodaj ogłoszenie</button>
        </div>
      </form>
    </div>
  );
};

export default AddAnnouncementPage;
