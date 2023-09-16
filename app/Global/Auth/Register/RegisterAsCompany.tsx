import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  companyName: string;
  email: string;
  password: string;
}

const RegisterAsCompany = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Rejestracja konta firmy</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nazwa firmy</label>
          <input {...register("companyName", { required: true })} />
          {errors.companyName && <span>Pole "Nazwa firmy" jest wymagane</span>}
        </div>

        <div>
          <label>Adres e-mail</label>
          <input
            type="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span>Wprowadź prawidłowy adres email</span>}
        </div>

        <div>
          <label>Hasło</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && <span>Hasło musi mieć co najmniej 6 znaków</span>}
        </div>

        <button type="submit">Zarejestruj się jako firma</button>
      </form>
    </div>
  );
};

export default RegisterAsCompany;
