import React from "react";
import "../globals.css";
import { Box, TextField } from "@mui/material";

export default function CreatUser() {
  return (
    <div className="main-container">
      <div>
        <h1>Cadastro de usuários</h1>
        <span>teste</span>
      </div>

      <form action="">
        <div className="">
          <Box>
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
      </form>
    </div>
  );
}
