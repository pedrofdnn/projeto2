// "use client"; //so funciona se utilizar essa função para usar como lado cliente.
import React from "react";
import "./globals.css";
import LoginPage from "./LoginPage/page";

export default function Page() {
  return (
    <div className="main-container">
      <LoginPage />
    </div>
  );
}
