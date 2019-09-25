import { FETCH_AUTHORS } from "./actionTypes";
import axios from "axios";

export const fetchAuthors = () => {
  return async dispatch => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/authors/");
      const authors = response.data;
      dispatch({
        type: FETCH_AUTHORS,
        payload: authors
      });
    } catch (err) {
      console.error("SOMETHING WENT WRONG: ", err);
    }
  };
};
