import { createContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const UsuarioContext = createContext();

export const UsuarioProvider = (props) => {
  // -------------------------------------------------------------------------------- //
  const postUsuario = async (usuario) => {
    const url = `http://${process.env.REACT_APP_BACKEND_URL}/post-usuario`;
    try {
      const respuesta = await axios.post(url, {
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        password: usuario.password,
      });
      Swal.fire({
        title: "Registro Correcto",
        text: respuesta.data.mensaje,
      });
      window.location.reload();
    } catch (e) {
      Swal.fire({
        title: "Registro Incorrecto",
        text: e.response.data.mensaje,
      });
    }
  };

  // -------------------------------------------------------------------------------- //
  const verificarUsuario = async (usuario) => {
    const url = `http://${process.env.REACT_APP_BACKEND_URL}/verificar-usuario`;
    try {
      const respuesta = await axios.post(url, {
        email: usuario.email,
        password: usuario.password,
      });
      const { token } = respuesta.data;
      localStorage.setItem("token", token);
      Swal.fire({
        title: "Login Correcto",
        text: "Has iniciado sesión",
      });
      window.location.reload();
    } catch (e) {
      Swal.fire({
        title: "Login Incorrecto",
        text: e.response.data.mensaje,
      });
    }
  };

  // -------------------------------------------------------------------------------- //
  const salirUsuario = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  // -------------------------------------------------------------------------------- //
  return (
    <UsuarioContext.Provider
      value={{ postUsuario, verificarUsuario, salirUsuario }}
    >
      {props.children}
    </UsuarioContext.Provider>
  );
};

export default UsuarioContext;
