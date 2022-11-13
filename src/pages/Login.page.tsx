import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { ILoginForm } from "../types/form.type";

import AuthService from "../services/auth.service";

function LoginPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    const result = await AuthService.login(data);
    if (result) {
      location.href = "/dashboard";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="w-[30rem] bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2 flex items-center justify-center gap-1">
            <img
              src="https://img.icons8.com/ios-glyphs/90/000000/money-transfer.png"
              width={40}
              height={40}
            />
            <h1 className="text-black font-bold">EDUsys</h1>
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Username"
              {...register("username")}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
              {...register("password")}
            />
            <p className="text-red text-xs italic">
              Please insert your password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
