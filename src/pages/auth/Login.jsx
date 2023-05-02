import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "@/assets/login.png";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  const loginWithGoogle = (e) => {
    e.preventDefault();
    console.log("hola google");
  };

  return (
    <>
      <section className="flex flex-col w-full gap-8 lg:flex-row pt-20 md:px-20 px-4">
        <div className="flex items-center justify-center lg:w-1/2 ">
          <img src={loginImg} className="w-[300px] lg:w-[600px] " />
        </div>

        <div className="divider lg:divider-horizontal" />

        <div className="flex items-center justify-center lg:w-1/2">
          <form
            onSubmit={loginUser}
            className="flex flex-col gap-6 w-[300px] lg:w-[500px] items-center shadow-lg shadow-gray-500 rounded-xl p-8 "
          >
            <h1 className="w-full text-center ">Login</h1>
            <input
              type="text"
              placeholder="Email"
              className="input  input-primary input-lg w-full"
            />
            <input
              type="text"
              placeholder="Password"
              className="input  input-primary input-lg w-full"
            />
            <button className="btn btn-secondary btn-lg w-full">Login</button>
            <Link to="/reset" className="link link-primary w-full text-2xl">
              reset password
            </Link>
            <p>-- or --</p>
            <div
              onClick={loginWithGoogle}
              className="btn btn-primary btn-lg gap-4 w-full"
            >
              <FcGoogle className="text-4xl" />
              Login With Google
            </div>
            <span className="text-2xl">
              Don't have an account?{" "}
              <Link to="/register" className="link link-primary">
                Register
              </Link>
            </span>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
