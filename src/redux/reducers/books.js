import { FETCH_BOOKS } from "../actions/actionTypes";

const initialState = {
  books: []
};

const reducer (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      const books = action.payload;
      return {
        ...state,
        books: books
      };

    default:
      return state;
  }
};
