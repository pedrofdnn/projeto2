import React from "react";
import "../globals.css";
import "../Styles/CreatePages.css";
import UserForm from "../Components/UserForm";

export default function CreatUser() {
  return (
    <div className="main-container">
      <div className="container-geral flex flex-row justify-around">
        <div className="flex flex-row justify-center m-[2em]">
          <h1 className="text-4xl">Cadastro de usuários</h1>
        </div>

        {/* <UserForm /> */}
      </div>
    </div>
  );
}
