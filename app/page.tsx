"use client"; //so funciona se utilizar essa função para usar como lado cliente.
import React from "react";
import LoginPage from "./Pages/LoginPage";

export default function Page() {
  return (
    <div className="main-container">
      <LoginPage />
    </div>
  );
}
