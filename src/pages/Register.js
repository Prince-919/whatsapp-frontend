import React from "react";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  return (
    <div className="min-h-screen dark:bg-dark_bg_1 flex items-center justify-center overflow-hidden py-[19px]">
      <div className="flex w-[1600px] mx-auto h-full">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
