import React from "react";
import Image from "next/image";
import img1 from "../Assets/icon1.png";

export default function LoginPage() {
  return (
    <div className="container-start flex flex-row flex-wrap justify-evenly items-center content-center">
      <div className="oxygen font-bold tirtle-login flex flex-col">
        <h1 className="tirtle-login text-4xl ">Bem Vindo</h1>

        <Image
          src={img1}
          alt={"ícone do login"}
          className="bg-icon1 bg-center bg-no-repeat"
        />

        <h2 className="flex flex-row-reverse ">
          Logue para ter acesso ao nosso acervo de filmes.
        </h2>
      </div>

      <div className="container-login">
        <h1 className="lobster text-7xl m-[2rem] drop-shadow-lg">
          Loca Filmes
        </h1>

        <form className="box-form flex flex-col flex-wrap justify-evenly">
          <div className="flex flex-col flex-wrap justify-evenly m-[5px]">
            <label>Email: </label>
            <input className="input-login" type="text" />
          </div>

          <div className="flex flex-col flex-wrap justify-evenly m-[5px]">
            <label>Senha: </label>
            <input className="input-login" type="password" />
          </div>

          <button className="button-login m-[5px]" type="submit">
            LOGIN
          </button>
          <button className="button-login m-[5px]" type="submit">
            REGISTRE-SE
          </button>

          <p className="text-center ">ou</p>

          <button>Login com Facebook</button>
          <button>Login com Instagram</button>
        </form>
      </div>
    </div>
  );
}
