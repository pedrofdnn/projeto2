import { Box, TextField } from "@mui/material";
import React from "react";

export default function UserForm() {
  return (
    <div>
      <form className="">
        <Box
        
          <TextField id="outlined-basic" label="Nome" variant="outlined" />
        </Box>

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
      </form>
    </div>
  );
}
