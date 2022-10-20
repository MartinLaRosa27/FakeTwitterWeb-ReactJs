import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Registration } from "./components/registration/Registration.jsx";
import { UsuarioProvider } from "./context/UsuarioProvider.js";
import { TweetProvider } from "./context/TweetProvider";
import { RelacionUsuarioProvider } from "./context/RelacionUsuarioProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <UsuarioProvider>
      <TweetProvider>
      <RelacionUsuarioProvider>
      {localStorage.getItem("token") ? <App /> : <Registration />}
      </RelacionUsuarioProvider>
      </TweetProvider>
    </UsuarioProvider>
  </>
);
