import { Reducer } from "redux";

const initialState = {
  allposts: [],
};

const allPostsReducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "AllPOSTS":
      return { ...state, allposts: payload };

    default:
      return state;
  }
};

export default allPostsReducer;
