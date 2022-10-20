import React from "react";
import { MisTweet } from "./helpers/MisTweets.jsx";
import { PublicarTweet } from "./helpers/PublicarTweet.jsx";

export const MiMundo = (props) => {
  // -------------------------------------------------------------------------------- //
  return (
    <div id="mundo" className="container">
      <div>
        <h1 className="text-center titulo">Mis Tweets</h1>
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
      <MisTweet usuario={props.usuario} />
    </div>
  );
};
