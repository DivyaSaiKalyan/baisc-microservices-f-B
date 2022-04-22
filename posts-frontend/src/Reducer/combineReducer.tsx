import { combineReducers } from "redux";
import createPostReducer from "./createPostReducer";
import allPostsReducer from "./allPostsReducer";
import allCommentsReducer from "./allCommentsReducer";
import createCommentReducer from "./createCommentReducer";

const reducer = combineReducers({
  createPostReducer: createPostReducer,
  allPostsReducer: allPostsReducer,
  allCommentsReducer: allCommentsReducer,
  createCommentReducer: createCommentReducer,
});

export default reducer;
