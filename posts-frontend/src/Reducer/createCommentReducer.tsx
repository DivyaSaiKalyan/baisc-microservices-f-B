import { Reducer } from "redux";

const initialState = {
  newComment: {},
};

const createCommentReducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CREATECOMMENT":
      return { ...state, newComment: payload };

    default:
      return state;
  }
};

export default createCommentReducer;
