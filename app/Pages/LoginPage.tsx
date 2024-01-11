import React from "react";
import Image from "next/image";
import img1 from "../Assets/icon1.png";
import { Button, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function LoginPage() {
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

        <form className="box-form flex flex-col flex-wrap justify-evenly">
          <div className="flex flex-col flex-wrap justify-evenly m-[5px]">
            <TextField
              label="Email"
              className="rounded-t-md rounded-tr-md"
              id="filled-basic"
              variant="filled"
              style={{ backgroundColor: "#CAD2C5 " }}
              color="success"
              type="email"
            />
          </div>

          <div className="flex flex-col flex-wrap justify-evenly m-[5px]">
            <TextField
              label="Senha"
              className="rounded-t-md rounded-tr-md"
              id="filled-basic"
              variant="filled"
              style={{ backgroundColor: "#CAD2C5 " }}
              color="success"
              type="password"
            />
          </div>

          <br />
          <div className="flex flex-col mx-2 items-stretch">
            <Button
              className="button-login mx-4"
              variant="contained"
              color="success"
              type="submit"
            >
              LOGIN
            </Button>
            <br />
            <Button
              className="button-login"
              variant="contained"
              color="success"
              type="submit"
            >
              REGISTRE-SE
            </Button>
          </div>

          <div className="my-2">
            <div className="stripe-left"></div>
            <div className="text-center ">ou</div>
            <div className="stripe-right"></div>
          </div>

          <div className="flex flex-wrap justify-around items-stretch ">
            <Button
              className="button-login"
              variant="contained"
              color="primary"
              startIcon={<FacebookIcon />}
            >
              Facebook
            </Button>

            <Button
              className="button-login"
              variant="contained"
              color="secondary"
              startIcon={<InstagramIcon />}
            >
              Instagram
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
