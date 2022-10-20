import React from "react";
import { MundoTweet } from "./helpers/MundoTweet.jsx";
import { PublicarTweet } from "./helpers/PublicarTweet.jsx";

export const Mundo = (props) => {
  // -------------------------------------------------------------------------------- //
  return (
    <div id="mundo" className="container">
      <div>
        <h1 className="text-center titulo">
          Ultimas noticias de todo el mundo...
        </h1>
        <button
          className="btn btn-primary buttontw"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Publicar Tweet
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <PublicarTweet usuario={props.usuario} />
        </div>
      </div>
      <MundoTweet />
    </div>
  );
};
