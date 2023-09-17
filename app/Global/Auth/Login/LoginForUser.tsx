import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { GlobalContext } from "@/app/GlobalContextProvider";

interface LoginForm {
  email: string;
  password: string;
}

const LoginForUser = () => {
  const { handleCloseAuthPopUp } = useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const router = useRouter();
  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    const { email, password } = data;
    if (email === "example@gmail.com" && password === "admin") {
      handleCloseAuthPopUp();
      router.push("/user");
    }
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
          <button type="submit">Zaloguj się</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForUser;
