"use client";
import React, { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
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
  const [showSuccessMessage] = useState(false);
  const [infoError, setInfoError] = useState(false);
  const [info, setInfo] = useState(false);
  const [open, setOpen] = useState(false);
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

    // Verificar se algum campo está vazio
    if (!userData.username || !userData.email || !userData.password) {
      setInfo(true);
      return;
    }

    // Verificar se o email já está cadastrado
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const existingData: UserData[] = JSON.parse(storedData);
      const emailExists = existingData.some(
        (user) => user.email.toLowerCase() === userData.email.toLowerCase()
      );
      if (emailExists) {
        setInfoError(true);
        return;
      }
    }

    // Adicionar novo usuário ao localStorage
    let updatedData = storedData ? JSON.parse(storedData) : [];
    updatedData.push(userData);
    localStorage.setItem("userData", JSON.stringify(updatedData));
    setOpen(true);
    setTimeout(() => {
      router.push("/?success=true");
    }, 2000);
  };

  //  função para fechar a mensagem de cadastro
  const handleCloseSuccess = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "") {
      return;
    }
    setOpen(false);
  };

  // função para fechar a mensagem de info
  const infoClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "") {
      return;
    }
    setInfo(false);
  };

  // função para fechar a mensagem de erro
  const handleCloseError = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "") {
      return;
    }
    setInfoError(false);
  };

  //   função de ocultar a senha
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <form className="flex flex-col p-28" onSubmit={handleSubmit}>
      {showSuccessMessage && (
        <div className="success-message">Usuário cadastrado com sucesso!</div>
      )}

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
      {/* mensagem de sucesso */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          variant="filled"
          sx={{ width: "100%", background: "#388e3c" }}
        >
          Cadastrado Realizado com Sucesso.
        </Alert>
      </Snackbar>

      {/* mensagem para preencher */}
      <Snackbar
        open={info}
        autoHideDuration={3000}
        onClose={infoClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={infoClose}
          severity="info"
          variant="filled"
          sx={{ width: "100%", background: "#0288d1" }}
        >
          Preencha os dados de cadastro.
        </Alert>
      </Snackbar>

      {/* mensagem de error */}
      <Snackbar
        open={infoError}
        autoHideDuration={3000}
        onClose={handleCloseError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseError}
          severity="error"
          variant="filled"
          sx={{ width: "100%", background: "#f44336" }}
        >
          Email já cadastrado. Por favor, insira um email diferente.
        </Alert>
      </Snackbar>

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
    </form>
  );
}
