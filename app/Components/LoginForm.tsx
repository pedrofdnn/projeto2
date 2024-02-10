import { useEffect, useState } from "react";
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
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";

interface UserData {
  username: string;
  email: string;
  password: string;
}

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();


  // Efeito para carregar o nome armazenado no localStorage quando a página é carregada
  useEffect(() => {
    const storedUserName = localStorage.getItem("username");
    if (storedUserName) {
      setName(storedUserName);
    }
  }, []);

  // Função para lidar com a mudança no input
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  //ele checa a mudança de senha quando acontece.
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin();
  };

  //  função de para fechar a mensagem de Error.
  const handleCloseError = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "") {
      return;
    }
    setInfo(false);
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

  // função de ocultar a senha
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // Função para lidar com o login
  const handleLogin = () => {
    // Verificar se o usuário existe no localStorage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const existingData: UserData[] = JSON.parse(storedUserData);
      console.log(storedUserData)
      const user = existingData.find(
        (user) =>
          user.email.toLowerCase() === name.toLowerCase() &&
          user.password === password
      );
      if (user) {
        // Armazenar o nome de usuário no localStorage
        localStorage.setItem("username", user.username);
        handleCloseSuccess();
        setTimeout(() => {
          router.push("/HomePage?success=true");
        }, 2000);
      } else {
        setOpen(true);
        return;
      }
    }
  
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="box-form flex flex-col flex-wrap justify-evenly"
      >
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
              label="Email"
              variant="standard"
              color="success"
              type="email"
              value={name}
              onChange={handleNameChange}

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
                value={password}
                onChange={handlePasswordChange}

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
        </div>

        <br />

        {/* botões de login e cadastro */}
        <div className="flex flex-col mx-2 items-stretch">
          <Button
            className="button-login mx-4"
            variant="contained"
            color="success"
            type="submit"
          >
            LOGIN
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
              sx={{ width: "100%", background: "#4caf50" }}
            >
              Seja Bem vindo `${localStorage.username}`.
            </Alert>
          </Snackbar>

          {/* alerta dos dados incorretos. */}
          <Snackbar
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            open={info}
            autoHideDuration={3000}
            onClose={handleCloseError}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={handleCloseError}
              severity="warning"
              variant="filled"
              sx={{ width: "100%", background: "#ff9800" }}
            >
              Por favor, insira seu email para fazer login
            </Alert>
          </Snackbar>

          <br />
          <Button
            className="button-login"
            variant="contained"
            color="success"
            type="button"
            onClick={() => router.push("/CreatUser")}
          >
            REGISTRE-SE
          </Button>
        </div>

        {/* separadores */}
        <div className=" container-stipe my-1">
          <div className="stripe-left text-center"></div>
          <div className="m-[1em] text-center ">ou</div>
          <div className="stripe-right"></div>
        </div>

        {/* botões de rede sociais */}
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
  );
}
