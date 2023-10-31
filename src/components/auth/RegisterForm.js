import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../utils/validation";
import AuthInput from "./AuthInput";
import { useDispatch, useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../features/userSlice";
import { useState } from "react";
import Picture from "./Picture";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.user);
  const [picture, setPicture] = useState();
  const [readablePicture, setReadablePicture] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const onSubmit = async (data) => {
    let res = await dispatch(registerUser({ ...data, picture: "" }));
    if (res.payload.user) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center  overflow-hidden  ">
      <div className="w-full max-w-md  p-10 dark:bg-dark_bg_2 rounded-lg ">
        <div className="text-center dark:text-dark_text_1">
          <h2 className="w-full mt-6 text-3xl font-bold">Welcome</h2>
          <p className="mt-2 text-sm">Sign up</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <AuthInput
            name="name"
            type="text"
            placeholder="Full name"
            register={register}
            error={errors?.name?.message}
          />
          <AuthInput
            name="email"
            type="text"
            placeholder="Email address"
            register={register}
            error={errors?.email?.message}
          />
          <AuthInput
            name="status"
            type="text"
            placeholder="Status (Optional)"
            register={register}
            error={errors?.status?.message}
          />
          <AuthInput
            name="password"
            type="password"
            placeholder="Password"
            register={register}
            error={errors?.password?.message}
          />
          <Picture
            readablePicture={readablePicture}
            setPicture={setPicture}
            setReadablePicture={setReadablePicture}
          />
          {error ? (
            <div>
              <p className="text-red-400">{error}</p>
            </div>
          ) : null}
          <button
            className="w-full flex justify-center bg-green_1 text-gray-100 p-3 rounded-full tracking-wide font-semibold focus:outline-none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300"
            type="submit">
            {status == "loading" ? (
              <PulseLoader color="#fff" size={16} />
            ) : (
              "Sign up"
            )}
          </button>
          <p className="flex flex-col justify-content mt-10 text-center text-md dark:text-dark_text_1">
            <span>have an account ? </span>
            <Link
              className="dark:text-dark_text_2 hover:underline cursor-pointer transition ease-in duration-300"
              to="/login">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
