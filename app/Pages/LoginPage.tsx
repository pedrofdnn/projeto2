import React from "react";

export default function LoginPage() {
  return (
    <div>
      <div>
        <h1>Bem Vindo</h1>
        <h4>Logue para ter acesso ao nosso acervo de filmes.</h4>
      </div>

      <form>
        <label>Email: </label>
        <input type="text" />

        <label>Senha: </label>
        <input type="password" />
        <button type="submit">Efetuar Login</button>
        <p>ou</p>

        <button>Login com Facebook</button>
        <button>Login com Instagram</button>
      </form>
    </div>
  );
}
