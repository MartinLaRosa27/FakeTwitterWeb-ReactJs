import React, { useState } from "react";
import { UseUsuario } from "../../hook/UseUsuario.js";
import { AiFillCloseCircle } from "react-icons/ai";
import { ocultarLoginSignIn } from "../../helper.js";

export const SignIn = () => {
  //
  const { postUsuario } = UseUsuario();

  //
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    passwordAux: "",
  });

  //
  const [mensaje, setMensaje] = useState({
    contenido: "",
    mostrar: false,
  });

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.password === usuario.passwordAux) {
      setMensaje({
        ...mensaje,
        mostrar: false,
      });
      postUsuario(usuario);
    } else {
      setMensaje({
        contenido: "Las contraseñas ingresadas no coinciden",
        mostrar: true,
      });
    }
  };

  //
  return (
    <div id="signIn" className="form-signin">
      <div className="container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="titulo">
            <h1 className="h3 mb-3 fw-normal">Crea tu cuenta</h1>
            <p onClick={() => ocultarLoginSignIn()}>
              <AiFillCloseCircle />
            </p>
          </div>
          {mensaje.mostrar ? (
            <>
              <div className="alert alert-danger" role="alert">
                {mensaje.contenido}
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="nombre"
              minLength={3}
              maxLength={50}
              required
              onChange={(e) => {
                setUsuario({
                  ...usuario,
                  nombre: e.target.value,
                });
              }}
            ></input>
            <label>Nombre:</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="apellido"
              minLength={3}
              maxLength={50}
              required
              onChange={(e) => {
                setUsuario({
                  ...usuario,
                  apellido: e.target.value,
                });
              }}
            ></input>
            <label>Apellido:</label>
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
              pattern="[a-zA-Z1-9]{8,25}"
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
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              placeholder="passwordAux"
              minLength={8}
              maxLength={25}
              pattern="[a-zA-Z1-9]{8,25}"
              required
              onChange={(e) => {
                setUsuario({
                  ...usuario,
                  passwordAux: e.target.value,
                });
              }}
            ></input>
            <label>Verifique Contraseña:</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Registrarse
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; FakeTwitterWeb 2022</p>
        </form>
      </div>
    </div>
  );
};
