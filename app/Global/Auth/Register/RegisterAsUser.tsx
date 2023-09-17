import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../Button";
import "@/style/form.sass";

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
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__input-wrapper">
          <label>Imię</label>
          <input
            className="form__input"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <span>Pole "Imię" jest wymagane</span>}
        </div>

        <div className="form__input-wrapper">
          <label>Nazwisko</label>
          <input
            className="form__input"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <span>Pole "Nazwisko" jest wymagane</span>}
        </div>

        <div className="form__input-wrapper">
          <label>Adres e-mail</label>
          <input
            className="form__input"
            type="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span>Wprowadź prawidłowy adres email</span>}
        </div>

        <div className="form__input-wrapper">
          <label>Hasło</label>
          <input
            className="form__input"
            type="password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && <span>Hasło musi mieć co najmniej 6 znaków</span>}
        </div>

        <div className="form__input-wrapper">
          <label>Powtórz hasło</label>
          <input
            className="form__input"
            type="password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === password,
            })}
          />
          {errors.confirmPassword && <span>Hasła nie pasują do siebie</span>}
        </div>

        <Button>Zarejestruj się</Button>
      </form>
    </div>
  );
};

export default RegisterAsUser;
