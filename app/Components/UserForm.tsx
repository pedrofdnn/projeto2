import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function UserForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [storedName, setStoredName] = useState("");

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

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mx-2 items-stretch">
        <Button
          className="button-login mx-4"
          variant="contained"
          color="success"
          type="button"
          onClick={() => router.push("/HomePage")}
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
    </form>
  );
}
