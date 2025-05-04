import styles from "./Message.module.css";
import { useState, useEffect } from "react";
import bus from "../../utils/bus"

const Message = () => {
  const [visibility, setVisibility] = useState(false);
  const [ message, setMessage ] = useState("")
  const [type, setType] = useState("");

  useEffect(() => {
    // Define a função handler fora do addListener para poder referenciá-la na remoção
    const handleFlashMessage = ({message, type}) => {
      setVisibility(true);  // torna a mensagem visível
      setMessage(message);  // carrega a variável com a mensagem que chega do bus
      setType(type);  // carrega a variável com o tipo de mensagem
      
      // setTimeout para a mensagem sumir automaticamente
      const timer = setTimeout(() => {
        setVisibility(false);  // muda o estado do visibility para false depois de um tempo
      }, 3000);
      
      // Este retorno não funciona aqui, ele deve estar no retorno do useEffect
      return () => clearTimeout(timer);
    };

    // Adiciona o event listener
    bus.addListener('flash', handleFlashMessage);

    // Função de cleanup para remover o listener quando o componente for desmontado
    return () => {
      bus.removeListener('flash', handleFlashMessage);
    };
  }, []); // Array de dependências vazio para executar apenas na montagem e desmontagem


  return (
    visibility && (
      <div className={`${styles.message} ${styles[type]}`}>
        <p>{message}</p>
      </div>
    )
  );
};

export default Message;
