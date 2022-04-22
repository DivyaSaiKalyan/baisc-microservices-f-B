import { Reducer } from "redux";

const initialState = {
  stateAllComments: [],
};

const allCommentsReducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ALLCOMMENTS":
      return { ...state, stateAllComments: payload };

    default:
      return state;
  }
};

export default allCommentsReducer;
