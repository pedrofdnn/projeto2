import React from "react";
import Image from "next/image";
import img1 from "../Assets/icon1.png";

export default function LoginPage() {
  return (
    <div className="log-container flex flex-row flex-wrap justify-evenly items-center content-center">
      <div className="oxygen font-bold tirtle-login flex flex-col">
        <h1 className="tirtle-login text-4xl ">Bem Vindo</h1>

        <Image
          src={img1}
          alt={"ícone do login"}
          className="bg-icon1 bg-center bg-no-repeat"
        />

        <h2 className="flex flex-row-reverse text-xl">
          Logue para ter acesso ao nosso acervo de filmes.
        </h2>
      </div>

      <form>
        <h1>Loca Filmes</h1>
        <label>Email: </label>
        <input type="text" />

        <label>Senha: </label>
        <input type="password" />
        <button type="submit">Efetuar Login</button>
        <button type="submit">Registre-se</button>
        <p>ou</p>

        <button>Login com Facebook</button>
        <button>Login com Instagram</button>
      </form>
    </div>
  );
}
