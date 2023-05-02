import React from "react";
import registerImg from "@/assets/register.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <section className="flex flex-col w-full gap-8 lg:flex-row pt-20 md:px-20 px-4">
        <div className="flex items-center justify-center lg:w-1/2">
          <form className="flex flex-col gap-6 w-[300px] lg:w-[500px] items-center shadow-lg shadow-gray-500 rounded-xl p-8 ">
            <h1 className="w-full text-center ">Register</h1>
            <input
              type="text"
              placeholder="Email"
              className="input  input-primary input-lg w-full"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="input  input-primary input-lg w-full"
            />
            <input
              type="text"
              placeholder="Password"
              className="input  input-primary input-lg w-full"
            />
            <button className="btn btn-secondary btn-lg w-full">
              Register
            </button>
            <span className="text-2xl">
              Already an acount?
              <Link to="/login" className="link link-primary">
                Login
              </Link>
            </span>
          </form>
        </div>
        <div className="divider lg:divider-horizontal" />
        <div className="flex items-center justify-center lg:w-1/2 ">
          <img src={registerImg} className="w-[300px] lg:w-[600px] " />
        </div>
      </section>
    </>
  );
};

export default Register;
