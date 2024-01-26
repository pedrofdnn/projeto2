"use client";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";

export default function UserForm() {
  const [showPassword, setShowPassword] = useState(false);

  //   função de ocultar a senha
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <form className="flex flex-col p-28  ">
      <Box>
        <TextField
          sx={{ fontSize: 28, width: 310 }}
          id="input-with-sx"
          label="Nome:"
          variant="standard"
          color="success"
          type="text"
        />
      </Box>
      <br />
      <TextField
        sx={{ fontSize: 28, width: 310 }}
        id="input-with-sx"
        label="Email:"
        variant="standard"
        color="success"
        type="email"
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
        type="button"
      >
        CADASTRAR
      </Button>
      <br />
      <Button
        className="button-login mx-4"
        variant="contained"
        color="success"
        type="button"
      >
        vOLTAR
      </Button>
    </form>
  );
}
