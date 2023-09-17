import { GlobalContext } from "@/app/GlobalContextProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../Button";
import "@/style/form.sass";

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
  const { handleCloseAuthPopUp, handleCompanyLogin } =
    useContext(GlobalContext);
  const router = useRouter();
  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    const { email, password, companyName } = data;
    const response = await axios.get("http://localhost:3000/companies", {
      params: {
        email: email,
        password: password,
        companyName: companyName,
      },
    });
    const userData = response.data;

    if (userData.length === 1) {
      localStorage.setItem("company", userData[0].id);
      handleCompanyLogin();
      handleCloseAuthPopUp();
      router.push("/company");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__input-wrapper">
          <label htmlFor="email">Adres e-mail:</label>
          <input
            className="form__input"
            type="text"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="error">To pole jest wymagane</span>}
        </div>
        <div className="form__input-wrapper">
          <label htmlFor="password">Hasło:</label>
          <input
            className="form__input"
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="error">To pole jest wymagane</span>
          )}
        </div>
        <div className="form__input-wrapper">
          <label htmlFor="companyName">Nazwa firmy:</label>
          <input
            className="form__input"
            type="text"
            id="companyName"
            {...register("companyName", { required: true })}
          />
          {errors.companyName && (
            <span className="error">To pole jest wymagane</span>
          )}
        </div>

        <Button>Zaloguj się</Button>
      </form>
    </div>
  );
};

export default LoginForBrand;
