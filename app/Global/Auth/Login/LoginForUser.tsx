import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { GlobalContext } from "@/app/GlobalContextProvider";

interface LoginForm {
  email: string;
  password: string;
}

const LoginForUser = () => {
  const { handleCloseAuthPopUp, handleUserLogin } = useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const router = useRouter();
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    const { email, password } = data;
    const dataFetch: [{ id: number; email: string; password: string }] | [] =
      await (
        await fetch(
          `http://localhost:3000/users?email=${email}&password=${password}`
        )
      ).json();

    if (dataFetch.length === 1) {
      handleUserLogin();
      handleCloseAuthPopUp();
      router.push("/user");
    } else {
      setIncorrectCredentials(true);
    }

    // if (email === "example@gmail.com" && password === "admin") {
    // handleUserLogin();
    // handleCloseAuthPopUp();
    // router.push("/user");
    // } else {
    // setIncorrectCredentials(true);
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {incorrectCredentials && <div className="error">Błędne dane</div>}
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
