import api from "../utils/api";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // manipula as urls e enviando o usuario para outra url ex: home
import useFlashMessage from "../hooks/useFlashMessage";

export default function useAuth() {
  const [ authenticated, setAutheticated ] = useState(false)
  const { setFlashMessage } = useFlashMessage(); // aqui chama a função do flash message
  const navigate = useNavigate();

  // inserir o token automatico na api quando o usuario acessa uma pagina
  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`  // envia o token para a api
      setAutheticated(true)  // muda o estado do authenticated
    }
  }, [])


  async function register(user) {
    const msgText = "Cadastro realizado com sucesso!";
    const msgType = "sucess";
    // console.log("User auth",user)  // ok chegou

    try {
      const response = await api.post("/users/register", user);
      const data = await response.data;

      setFlashMessage(msgText, msgType); // aqui e passado a mensagem para o hook flashmessage
      
      // console.log("contextoauth", data.token); // ok chegou

      await authUser(data)  // chama a função para salvar o usuario no local storage e navegar para a rota barra
    } catch (error) {
      // console.error(error);  // ok chegou
      const msgText = error.response.data.message;
      const msgType = "error";
      setFlashMessage(msgText, msgType); // aqui e passado a mensagem para o hook flashmessage
    }
  }

  async function authUser(data) {  // função para salvar o usuario no local storage e navegar para a rota barra
    setAutheticated(true)  // muda o estado do authenticated
    localStorage.setItem("token", JSON.stringify(data.token))

    navigate('/')
  }

  return {
    authenticated,
    register,
  };
}
