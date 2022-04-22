import { Dispatch } from "redux";
import axios from "axios";

export const createPost = (value: any) => async (dispatch: Dispatch) => {
  dispatch({
    type: "CREATEPOST",
    payload: value,
  });
};

export const allPosts = (value: any) => (dispatch: Dispatch) => {
  dispatch({
    type: "AllPOSTS",
    payload: value,
  });
};

export const allComments = (value: any) => (dispatch: Dispatch) => {
  dispatch({
    type: "ALLCOMMENTS",
    payload: value,
  });
};

export const createComment =
  (comment: string, postId: number) => async (dispatch: Dispatch) => {
    const value = {
      comment: comment,
      postId: postId,
    };

    await axios.post("http://localhost:3000/post/createComment", value);
    dispatch({
      type: "CREATECOMMENT",
      payload: value,
    });
  };

export const likeIncress =
  (id: number, value: number) => async (dispatch: Dispatch) => {
    const res = await axios.put(
      `http://localhost:3000/post/addLike/${id}/${value}`
    );
    console.log(res);

    dispatch({
      type: "LIKESINCRESS",
      payload: value,
    });
  };
