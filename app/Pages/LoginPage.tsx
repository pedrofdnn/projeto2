/* use client */
import { useState } from "react";
import Image from "next/image";
import img1 from "../Assets/icon1.png";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
            <Box
              className="rounded-md p-1"
              sx={{
                display: "flex",
                alignItems: "flex-end",
                backgroundColor: "#CAD2C5 ",
              }}
            >
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 1 }} />

              <TextField
                sx={{ fontSize: 28, width: 305 }}
                id="input-with-sx"
                label="Usuário"
                variant="standard"
                color="success"
                type="email"
              />
            </Box>
          </div>

          <div className="flex flex-col flex-wrap justify-evenly m-[5px]">
            <Box
              className="rounded-md p-1"
              sx={{
                backgroundColor: "#CAD2C5 ",
              }}
            >
              <FormControl
                sx={{ width: "34ch", marginLeft: 4 }}
                variant="standard"
                color="success"
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Senha
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ mr: -5, my: 1 }}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>

            {/* <TextField
              label="Senha"
              className="rounded-t-md rounded-tr-md"
              id="filled-basic"
              variant="filled"
              style={{ backgroundColor: "#CAD2C5 " }}
              color="success"
              type="password"
            /> */}
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

          <div className=" container-stipe my-1">
            <div className="stripe-left text-center"></div>
            <div className="m-[1em] text-center ">ou</div>
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
