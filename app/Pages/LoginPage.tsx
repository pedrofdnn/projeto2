/* use client */
import { useState } from "react";
import Image from "next/image";
import img1 from "../Assets/icon1.png";
import LoginForm from "../Components/LoginForm";

export default function LoginPage({}) {
  return (
    <div className="container-start flex flex-row flex-wrap justify-evenly items-center content-center">
      
      <div className="oxygen font-bold tirtle-login flex flex-col">
        <h1 className="tirtle-login text-4xl ">Bem Vindo</h1>

        <Image
          src={img1}
          alt={"ícone do login"}
          className="img-login bg-icon1 bg-center bg-no-repeat"
        />

        <h2 className="flex flex-row-reverse">
          Logue para ter acesso ao nosso acervo de filmes.
        </h2>
      </div>

      <div className="container-login">
        <h1 className="lobster text-7xl m-[2rem] drop-shadow-lg">
          Loca Filmes
        </h1>

        <LoginForm />
      </div>
    </div>
  );
}
