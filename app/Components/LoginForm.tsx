import { useEffect, useState } from "react";
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
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";

// interface LoginFormProps {
//   showPassword: boolean;
//   handleClickShowPassword: () => void;
//   handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [storedName, setStoredName] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  // Função para lidar com a mudança no input
  const handleNameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(e.target.value);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Armazenar o nome no localStorage
    localStorage.setItem("user_name", name);
  };

  // Efeito para carregar o nome armazenado no localStorage quando a página é carregada
  useEffect(() => {
    const storedUserName = localStorage.getItem("user_name");
    if (storedUserName) {
      setStoredName(storedUserName);
    }
  }, []);

  //   função de ocultar a senha
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    // Verificar se o nome está presente antes de permitir a navegação
    if (name.trim() !== "") {
      // Verificar se o usuário existe no localStorage
      const storedUserName = localStorage.getItem("user_name");

      if (storedUserName && storedUserName === name) {
        // O usuário existe, fazer a navegação
        router.push("/HomePage");
      } else {
        // O usuário não existe, solicitar cadastro
        const shouldCreateAccount = window.confirm(
          "Usuário não encontrado. Deseja criar uma conta?"
        );

        if (shouldCreateAccount) {
          // Aqui você pode redirecionar para a página de criação de conta
          router.push("/CreatUser");
        }
      }
    } else {
      // Informar ao usuário que o campo está em branco
      alert("Por favor, insira seu nome para fazer login.");
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
        </div>

        <br />

        <div className="flex flex-col mx-2 items-stretch">
          <Button
            className="button-login mx-4"
            variant="contained"
            color="success"
            type="button"
            onClick={handleLogin}
          >
            LOGIN
          </Button>
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
  );
}
