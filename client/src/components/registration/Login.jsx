import React, { useState } from "react";
import { UseUsuario } from "../../hook/UseUsuario.js";
import { AiFillCloseCircle } from "react-icons/ai";
import { ocultarLoginSignIn } from "../../helper.js";

export const Login = () => {
  //
  const { verificarUsuario } = UseUsuario();

  //
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    verificarUsuario(usuario);
  };

  //
  return (
    <div id="login" className="form-signin">
      <div className="container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="titulo">
            <h1 className="h3 mb-3 fw-normal">Iniciar sesión</h1>
            <p onClick={() => ocultarLoginSignIn()}>
              <AiFillCloseCircle />
            </p>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              minLength={5}
              maxLength={255}
              required
              onChange={(e) => {
                setUsuario({
                  ...usuario,
                  email: e.target.value,
                });
              }}
            ></input>
            <label>Email:</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              placeholder="password"
              minLength={8}
              maxLength={25}
              required
              onChange={(e) => {
                setUsuario({
                  ...usuario,
                  password: e.target.value,
                });
              }}
            ></input>
            <label>Contraseña:</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Iniciar
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; FakeTwitterWeb 2022</p>
        </form>
      </div>
    </div>
  );
};
