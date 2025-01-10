import bus from "../utils/bus";

/**
 * essa função pega as mensagems e trata para enviar para as paginas as mensagens atraves de evento
 */

export default function useFlashMessage() {
  function setFlashMessage(msg, type) {
    bus.emit("flash", {
      message: msg,
      type: type,
    });
  }
  return { setFlashMessage };
}
