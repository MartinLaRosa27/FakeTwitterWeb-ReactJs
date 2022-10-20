import { useContext } from "react";
import TweetContext from "../context/TweetProvider.js";

export const UseTweet = () => {
  return useContext(TweetContext);
};
