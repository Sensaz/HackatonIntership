"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface AnnouncementForm {
  title: string;
  description: string;
  locations: string[];
  mainTechnology: string;
  salaryRange?: string;
  deadline: Date;
}

const AddAnnouncementPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AnnouncementForm>();

  const onSubmit: SubmitHandler<AnnouncementForm> = (data) => {
    // Tutaj możesz obsłużyć dane z formularza, np. przekazać je do serwera
    console.log(data);
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
            {/* Dodaj inne technologie tutaj, jeśli są dostępne */}
          </select>
          {errors.mainTechnology && (
            <span className="error">To pole jest wymagane</span>
          )}
        </div>
        <div>
          <label htmlFor="salaryRange">Opcjonalnie wysokośc stawki:</label>
          <input type="text" id="salaryRange" {...register("salaryRange")} />
        </div>
        <div>
          <label htmlFor="deadline">Termin ogłoszenia:</label>
          <input
            type="date"
            id="deadline"
            {...register("deadline", { required: true })}
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
