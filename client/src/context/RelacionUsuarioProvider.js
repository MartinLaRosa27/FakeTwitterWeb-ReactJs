import { createContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const RelacionUsuarioContext = createContext();

export const RelacionUsuarioProvider = (props) => {
  // -------------------------------------------------------------------------------- //
  const [usuarioBuscado, setUsuarioBuscado] = useState([]);

  // -------------------------------------------------------------------------------- //
  const getUsuarioParametros = async (nombre) => {
    await axios
      .get(`http://${process.env.REACT_APP_BACKEND_URL}/get-usuario/${nombre}`)
      .then((respuesta) => {
        setUsuarioBuscado(respuesta.data);
      });
  };

  // -------------------------------------------------------------------------------- //
  const postRelacionUsuario = async (user1, user2) => {
    try {
      const respuesta = await axios.post(
        `http://${process.env.REACT_APP_BACKEND_URL}/post-relacion-usuario`,
        {
          user1,
          user2,
        }
      );
      Swal.fire({
        title: "EXITO",
        text: respuesta.data.mensaje,
      });
    } catch (e) {
      Swal.fire({
        title: "ERROR",
        text: e.response.data.mensaje,
      });
    }
  };

  // -------------------------------------------------------------------------------- //
  return (
    <RelacionUsuarioContext.Provider
      value={{ getUsuarioParametros, usuarioBuscado, postRelacionUsuario }}
    >
      {props.children}
    </RelacionUsuarioContext.Provider>
  );
};

export default RelacionUsuarioContext;
