import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterAsUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.password !== data.confirmPassword) return;
    console.log(data);
  };

  return (
    <div>
      <h2>Rejestracja użytkownika</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Imię</label>
          <input {...register("firstName", { required: true })} />
          {errors.firstName && <span>Pole "Imię" jest wymagane</span>}
        </div>

        <div>
          <label>Nazwisko</label>
          <input {...register("lastName", { required: true })} />
          {errors.lastName && <span>Pole "Nazwisko" jest wymagane</span>}
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

        <div>
          <label>Powtórz hasło</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === password,
            })}
          />
          {errors.confirmPassword && <span>Hasła nie pasują do siebie</span>}
        </div>

        <button type="submit">Zarejestruj się</button>
      </form>
    </div>
  );
};

export default RegisterAsUser;
