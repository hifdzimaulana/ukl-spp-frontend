import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { ILoginForm } from "../types/form.type";

import { Button, Alert, Input } from "@material-tailwind/react";

import AuthService from "../services/auth.service";
import { useState } from "react";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [isAlert, setAlert] = useState(false);

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    const result = await AuthService.login(data);
    if (result) {
      location.href = "/dashboard";
    } else {
      setAlert(true);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="relative w-[30rem] bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 flex items-center justify-center gap-1">
            <img
              src="https://img.icons8.com/ios-glyphs/90/000000/money-transfer.png"
              width={40}
              height={40}
            />
            <h1 className="text-black font-bold">EDUsys</h1>
          </div>
          <div className="mb-4">
            <Input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              label="Username"
              error={isAlert}
              {...register("username")}
            />
          </div>
          <div className="mb-6">
            <Input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              label="Password"
              error={isAlert}
              {...register("password")}
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
              type="submit"
              variant="gradient"
            >
              Sign In
            </Button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <Alert
          show={isAlert}
          dismissible={{ onClose: () => setAlert(false) }}
          className="absolute -top-16 left-0"
          animate={{
            mount: { y: 0 },
            unmount: { y: -100 },
          }}
          color="red"
          icon={
            <img
              src="https://img.icons8.com/ios-filled/100/ffffff/box-important--v1.png"
              width={25}
              height={25}
            />
          }
        >
          Invalid credentials
        </Alert>
      </div>
    </div>
  );
}

export default LoginPage;
