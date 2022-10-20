import React, { useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { UseTweet } from "../../hook/UseTweet.js";

export const MisTweet = (props) => {
  // -------------------------------------------------------------------------------- //
  const { getTweetsParametros, tweets, deleteTweetParametros } = UseTweet();

  // -------------------------------------------------------------------------------- //
  useEffect(() => {
    getTweetsParametros(props.usuario._id);
  }, []);

  const handleClick = (id) => {
    deleteTweetParametros(id);
  };

  // -------------------------------------------------------------------------------- //
  return (
    <div id="mis_tweet">
      {tweets.map((tweet) => {
        return (
          <div className="card" key={tweet._id}>
            <div className="card-header">
              <p onClick={() => handleClick(tweet._id)}>
                <AiFillCloseCircle />
              </p>
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
