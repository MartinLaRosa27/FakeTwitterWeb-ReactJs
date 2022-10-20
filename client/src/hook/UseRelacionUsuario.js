import { useContext } from "react";
import RelacionUsuarioContext from "../context/RelacionUsuarioProvider.js";

export const UseRelacionUsuario = () => {
  return useContext(RelacionUsuarioContext);
};
