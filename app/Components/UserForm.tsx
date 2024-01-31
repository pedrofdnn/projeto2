"use client";
import React, { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Snackbar,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface UserData {
  username: string;
  email: string;
  password: string;
}

export default function UserForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // configuração de rota
  const router = useRouter();

  // captura as informações do input.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Armazenar os dados no localStorage
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const storedData = localStorage.getItem("userData");
    let existingData = [];
    if (storedData) {
      existingData = JSON.parse(storedData);
    }
    existingData.push(userData);
    localStorage.setItem("userData", JSON.stringify(existingData));
    setOpenSnackbar(true);
    setTimeout(() => setOpenSnackbar(false), 6000); // Fecha o Snackbar após 6 segundos
    router.push("/?success=true");
  };

  //   função de ocultar a senha
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <form className="flex flex-col p-28" onSubmit={handleSubmit}>
      {showSuccessMessage && (
        <div className="success-message">Usuário cadastrado com sucesso!</div>
      )}
      <Box>
        <TextField
          sx={{ fontSize: 28, width: 310 }}
          id="input-name"
          type="text"
          label="Nome:"
          variant="standard"
          color="success"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
      </Box>
      <br />
      <TextField
        sx={{ fontSize: 28, width: 310 }}
        id="input-email"
        label="Email:"
        variant="standard"
        color="success"
        type="email"
        name="email"
        value={userData.email}
        onChange={handleInputChange}
      />
      <br />
      <Box
        className="rounded-md"
        sx={{
          backgroundColor: "#CAD2C5 ",
        }}
      >
        <FormControl sx={{ width: "35ch" }} variant="standard" color="success">
          <InputLabel htmlFor="standard-adornment-password">Senha:</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            endAdornment={
              <InputAdornment position="start">
                <IconButton
                  sx={{ mr: -2 }}
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
      <br />
      <Button
        className="button-login mx-4"
        variant="contained"
        color="success"
        type="submit"
      >
        CADASTRAR
      </Button>
      <br />
      <Button
        className="button-login mx-4"
        variant="contained"
        color="success"
        type="button"
        onClick={() => router.push("/")}
      >
        vOLTAR
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Usuário cadastrado com sucesso!"
      />
    </form>
  );
}
