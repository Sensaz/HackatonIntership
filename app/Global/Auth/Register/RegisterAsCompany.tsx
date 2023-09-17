import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../Button";
import "@/style/form.sass";

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

  const onSubmit: SubmitHandler<FormData> = (data) => {};

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__input-wrapper">
          <label>Nazwa firmy</label>
          <input
            className="form__input"
            {...register("companyName", { required: true })}
          />
          {errors.companyName && <span>Pole "Nazwa firmy" jest wymagane</span>}
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

        <Button>Zarejestruj się jako firma</Button>
      </form>
    </div>
  );
};

export default RegisterAsCompany;
