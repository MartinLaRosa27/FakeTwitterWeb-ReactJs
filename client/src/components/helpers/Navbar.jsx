import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { UseUsuario } from "../../hook/UseUsuario.js";
import { Conectarse } from "../Conectarse.jsx";
import { MiMundo } from "../MiMundo.jsx";
import { Mundo } from "../Mundo.jsx";
import { Error } from "./Error.jsx";

export const Navbar = () => {
  //
  const usuario = jwt_decode(localStorage.getItem("token"));

  // -------------------------------------------------------------------------------- //
  const { salirUsuario } = UseUsuario();

  // -------------------------------------------------------------------------------- //
  const handelClick = () => {
    salirUsuario();
  };

  // -------------------------------------------------------------------------------- //
  return (
    <BrowserRouter>
      <nav id="navbar">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Mundo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/mi-mundo" className="nav-link">
              Mis Tweets
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/conectarse" className="nav-link">
              Conectarse
            </NavLink>
          </li>
          <li className="nav-item">
            <p className="nav-link" onClick={() => handelClick()}>
              Cerrar Sesión
            </p>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Mundo usuario={usuario} />}></Route>
        <Route path="/mi-mundo" element={<MiMundo usuario={usuario} />}></Route>
        <Route
          path="/conectarse"
          element={<Conectarse usuario={usuario} />}
        ></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
