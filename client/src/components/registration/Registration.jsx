import React from "react";
import { Helmet } from "react-helmet";
import { AiOutlineTwitter } from "react-icons/ai";
import { Login } from "./Login.jsx";
import { SignIn } from "./SignIn.jsx";
import { mostrarLogin, mostrarSignIn } from "../../helper.js";

export const Registration = () => {
  return (
    <>
      <Helmet>
        <title>FakeTwitterWeb | Iniciar Sesión</title>
      </Helmet>
      <div id="registration" className="row ocultar">
        <div className="col-5">
          <h1>
            <AiOutlineTwitter />
          </h1>
        </div>
        <div className="col-7">
          <h3>
            <AiOutlineTwitter />
          </h3>
          <h1>
            Lo que está <br />
            pasando ahora
          </h1>
          <h2>Únete a FakeTwitter hoy mismo.</h2>
          <div className="boton_registro">
            <button onClick={() => mostrarSignIn()}>
              Regístrate con tu email
            </button>
            <p>
              Al registrarte, aceptas los <span>Términos de servicio</span> y la
              <span> Política de privacidad</span>, incluida la política de
              <span> Uso de Cookies</span>.
            </p>
          </div>
          <div className="boton_login">
            <p>¿Ya tienes una cuenta?</p>
            <button onClick={() => mostrarLogin()}>Iniciar sesión</button>
          </div>
        </div>
      </div>
      <SignIn />
      <Login />
    </>
  );
};
