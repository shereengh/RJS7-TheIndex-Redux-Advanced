import { FETCH_BOOKS } from "./actionTypes";
import axios from "axios";

export const fetchBooks = () => {
  return async dispatch => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/books/");
      const books = response.data;
      dispatch({
        type: FETCH_BOOKS,
        payload: books
      });
    } catch (err) {
      console.error("SOMETHING WENT WRONG: ", err);
    }
  };
};
