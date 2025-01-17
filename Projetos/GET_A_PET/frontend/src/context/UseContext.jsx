import { createContext } from "react";

import useAuth from "../hooks/userAuth";

const Context = createContext();

function UserProvider({ children }) {
  const { authenticated, register, logout } = useAuth(); // importa as funçoes do useauth

  return <Context.Provider value={{ authenticated, register, logout }}>{children}</Context.Provider>;
}

export { Context, UserProvider };
