import { createContext } from "react";

import useAuth from "../hooks/userAuth";

const Context = createContext();  // essa e a função que sera importada nas paginas onde sera usada o user e funções

function UserProvider({ children }) {
  const { authenticated, register, logout, login, update } = useAuth(); // importa as funçoes do useauth

  return <Context.Provider value={{ authenticated, register, logout, login, update }}>{children}</Context.Provider>;
}

export { Context, UserProvider };
