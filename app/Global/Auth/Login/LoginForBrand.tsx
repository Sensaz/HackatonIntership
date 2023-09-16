import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
  companyName: string;
}

const LoginForBrand = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    // Tutaj możesz obsłużyć przesłane dane, np. wysłać je na serwer lub dodać własną logikę autoryzacji.
    console.log(data);
  };

  return (
    <div>
      <h1>Logowanie dla firm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Adres e-mail:</label>
          <input
            type="text"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="error">To pole jest wymagane</span>}
        </div>
        <div>
          <label htmlFor="password">Hasło:</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="error">To pole jest wymagane</span>
          )}
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
          <button type="submit">Zaloguj się</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForBrand;
