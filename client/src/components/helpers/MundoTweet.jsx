import React, { useEffect } from "react";
import { UseTweet } from "../../hook/UseTweet.js";

export const MundoTweet = () => {
  // -------------------------------------------------------------------------------- //
  const { getTweets, tweets } = UseTweet();

  // -------------------------------------------------------------------------------- //
  useEffect(() => {
    getTweets();
  }, []);

  // -------------------------------------------------------------------------------- //
  return (
    <div id="mundotweet">
      {tweets.map((tweet) => {
        return (
          <div className="card" key={tweet._id}>
            <div className="card-header">
              {tweet.nombreCompleto} | {tweet.fecha}
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{tweet.contenido}</p>
              </blockquote>
            </div>
          </div>
        );
      })}
    </div>
  );
};
