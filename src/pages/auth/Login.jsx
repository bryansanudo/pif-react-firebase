import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "@/assets/login.png";
import Section from "@/components/Section";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <>
      <section className="h-[80vh]  flex items-center flex-col md:flex-row justify-center py-16  ">
        <div className=" flex items-center justify-center  ">
          <img src={loginImg} className="w-[400px] " />
        </div>

        <div class=" flex items-center justify-center w-[350px] md:w-[450px] bg-red-500 ">
          a
        </div>
      </section>
    </>
  );
};

export default Login;
