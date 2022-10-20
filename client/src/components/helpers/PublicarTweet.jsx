import React, { useState } from "react";
import { UseTweet } from "../../hook/UseTweet.js";

export const PublicarTweet = (props) => {
  // -------------------------------------------------------------------------------- //
  const { postTweet } = UseTweet();

  // -------------------------------------------------------------------------------- //
  const [tweet, setTweet] = useState({
    usuarioId: props.usuario._id,
    contenido: "",
  });

  // -------------------------------------------------------------------------------- //
  const handleSubmit = (e) => {
    e.preventDefault();
    postTweet(tweet);
  };

  // -------------------------------------------------------------------------------- //
  return (
    <>
      <div className="offcanvas-header">
        <h5 id="offcanvasRightLabel">Publicar Tweet</h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="5"
              maxLength={140}
              minLength={1}
              required
              onChange={(e) =>
                setTweet({
                  ...tweet,
                  contenido: e.target.value,
                })
              }
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary buttontw">
            Publicar
          </button>
        </form>
      </div>
    </>
  );
};
