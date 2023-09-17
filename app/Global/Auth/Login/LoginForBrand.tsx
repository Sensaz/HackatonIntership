import { GlobalContext } from "@/app/GlobalContextProvider";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
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
  const { handleCloseAuthPopUp, handleCompanyLogin } =
    useContext(GlobalContext);
  const router = useRouter();
  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    const { email, password, companyName } = data;
    if (
      email === "example@gmail.com" &&
      password === "admin" &&
      companyName === "BB"
    ) {
      handleCompanyLogin();
      handleCloseAuthPopUp();
      router.push("/company");
    }
    console.log(data);
  };

  return (
    <div>
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
