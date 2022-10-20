import { createContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const TweetContext = createContext();

export const TweetProvider = (props) => {
  // -------------------------------------------------------------------------------- //
  const [tweets, setTweets] = useState([]);

  // -------------------------------------------------------------------------------- //
  const postTweet = async (tweet) => {
    try {
      const respuesta = await axios.post(
        `http://${process.env.REACT_APP_BACKEND_URL}/post-tweet`,
        {
          usuarioId: tweet.usuarioId,
          contenido: tweet.contenido,
        }
      );
      Swal.fire({
        title: "EXITO",
        text: respuesta.data.mensaje,
      });
      window.location.reload();
    } catch (e) {
      Swal.fire({
        title: "ERROR",
        text: e.response.data.mensaje,
      });
    }
  };

  // -------------------------------------------------------------------------------- //
  const getTweets = async () => {
    const respuesta = await axios.get(
      `http://${process.env.REACT_APP_BACKEND_URL}/get-tweets`
    );
    setTweets(respuesta.data);
  };

  // -------------------------------------------------------------------------------- //
  const getTweetsParametros = async (id) => {
    await axios
      .get(`http://${process.env.REACT_APP_BACKEND_URL}/get-tweets/${id}`)
      .then((respuesta) => {
        setTweets(respuesta.data);
      });
  };

  // -------------------------------------------------------------------------------- //
  const deleteTweetParametros = async (id) => {
    try {
      const respuesta = await axios.delete(
        `http://${process.env.REACT_APP_BACKEND_URL}/delete-tweet/${id}`
      );
      Swal.fire({
        title: "Tweet Eliminado",
        text: respuesta.data.mensaje,
      });
      window.location.reload();
    } catch (e) {
      Swal.fire({
        title: "Error",
        text: e.response.data.mensaje,
      });
    }
  };

  // -------------------------------------------------------------------------------- //
  return (
    <TweetContext.Provider
      value={{
        postTweet,
        tweets,
        getTweets,
        getTweetsParametros,
        deleteTweetParametros,
      }}
    >
      {props.children}
    </TweetContext.Provider>
  );
};

export default TweetContext;
