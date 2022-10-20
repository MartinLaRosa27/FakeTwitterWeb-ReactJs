import React from "react";
import { UseRelacionUsuario } from "../../hook/UseRelacionUsuario.js";

export const UsuariosRelacionados = (props) => {
  // -------------------------------------------------------------------------------- //
  const { usuarioBuscado, postRelacionUsuario } = UseRelacionUsuario();

  // -------------------------------------------------------------------------------- //
  const handleClick = (id) => {
    postRelacionUsuario(props.usuario._id, id);
  };

  // -------------------------------------------------------------------------------- //
  return (
    <div id="usuario_buscado">
      {usuarioBuscado.map((usuario) => {
        return (
          <div className="card" key={usuario._id}>
            <div className="card-body">
              <h5 className="card-title">{`${usuario.nombre} ${usuario.apellido}`}</h5>
              <a
                href="/"
                className="btn btn-primary"
                onClick={() => handleClick(usuario._id)}
              >
                Agregar
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
