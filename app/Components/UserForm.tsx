import { Box, TextField } from "@mui/material";
import React from "react";

export default function UserForm() {
  return (
    <form className="flex flex-col ">
      <Box>
        <TextField
          sx={{ fontSize: 28, width: 310, textAlign: "center" }}
          id="input-with-sx"
          label="Usuário:"
          variant="standard"
          color="success"
          type="text"
        />
      </Box>
      <br />
      <Box>
        <TextField
          sx={{ fontSize: 28, width: 310 }}
          id="input-with-sx"
          label="Email:"
          variant="standard"
          color="success"
          type="email"
        />
      </Box>
    </form>
  );
}
