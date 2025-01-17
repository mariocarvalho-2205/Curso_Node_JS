import styles from "./Message.module.css";
import { useState, useEffect } from "react";
import bus from "../../utils/bus"

const Message = () => {
  const [visibility, setVisibility] = useState(false);
  const [ message, setMessage ] = useState("")
  const [type, setType] = useState("");

  useEffect(() => {
    bus.addListener('flash', ({message, type}) => {
      setVisibility(true)  // torna a mensagem visivél
      setMessage(message)  // carrega a variavel com a mensagem que chega do bus
      setType(type)  // carrega a variavel com o tipo de mensagem
      // console.log("message comp message", message)  // ok chegou

      // setTimeout para a mensagem sumir automaticamente
      setTimeout(() => {
        setVisibility(false)  // muda o estado do visibility para false depois de um tempo
      }, 3000)

    })
  }, [visibility])

  return (
    visibility && (
      <div className={`${styles.message} ${styles[type]}`}>
        <p>{message}</p>
      </div>
    )
  );
};

export default Message;
