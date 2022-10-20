import { useContext } from "react";
import UsuarioContext from "../context/UsuarioProvider";

export const UseUsuario = () => {
  return useContext(UsuarioContext);
};
