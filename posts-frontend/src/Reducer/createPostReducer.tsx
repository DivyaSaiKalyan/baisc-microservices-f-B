import { Reducer } from "redux";

const initialState = {
  newpost: {},
  likes: 0,
};

const createPostReducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CREATEPOST":
      return { ...state, newpost: payload };
    case "LIKESINCRESS":
      return { ...state, likes: payload };

    default:
      return state;
  }
};

export default createPostReducer;
