import { FETCH_AUTHORS } from "../actions/actionTypes";

const initialState = {
  authors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTHORS:
      const authors = action.payload;
      return {
        ...state,
        authors: authors
      };
    default:
      return state;
  }
};
