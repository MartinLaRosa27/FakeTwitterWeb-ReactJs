import React, { useState } from "react";
import { UseRelacionUsuario } from "../hook/UseRelacionUsuario.js";
import { UsuariosRelacionados } from "./helpers/UsuariosRelacionados.jsx";

export const Conectarse = (props) => {
  // -------------------------------------------------------------------------------- //
  const [nombre, setNombre] = useState("");

  // -------------------------------------------------------------------------------- //
  const { getUsuarioParametros } = UseRelacionUsuario();

  // -------------------------------------------------------------------------------- //
  const handleSubmit = (e) => {
    e.preventDefault();
    getUsuarioParametros(nombre);
  };

  // -------------------------------------------------------------------------------- //
  return (
    <div id="conectarse" className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3 className="text-center">Busar usuario</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="nombre"
            minLength={3}
            maxLength={50}
            required
            onChange={(e) => setNombre(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary buttontw">
          Buscar
        </button>
      </form>

      <UsuariosRelacionados usuario={props.usuario} />
    </div>
  );
};
