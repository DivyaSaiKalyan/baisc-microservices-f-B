import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  allComments,
  allPosts,
  createComment,
  likeIncress,
} from "../Actions/action";

const Header: React.FC = (props: any) => {
  const {
    allPosts,
    allposts,
    allComments,
    stateAllComments,
    createComment,
    likeIncress,
  } = props;
  const [comment, setComment] = useState("");
  //const [like, setLike] = useState();
  const [posts, setposts] = useState([
    {
      id: "",
      title: "",
      url: "",
      likes: "",
    },
  ]);
  const [allcomments, setAllComments] = useState([
    {
      id: "",
      postId: "",
      comment: "",
    },
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/post/getposts")
      .then((res) => allPosts(res.data))
      .then(() => setposts(allposts));
  }, [allPosts, allposts]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/comments/getcomments`)
      .then((res) => allComments(res.data))
      .then(() => setAllComments(stateAllComments));
  }, [allComments, stateAllComments]);

  const onclickHandler = async (comment: string, postId: number) => {
    createComment(comment, postId);
    setComment("");
  };

  // useEffect(() => {
  //   axios.put(`http://localhost:3000/post/addLike`);
  // }, []);

  const likeOnClickHandler = (id: number, value: number) => {
    likeIncress(id, value);
  };
  const onchangeHandler = (event: any) => setComment(event.target.value);
  return (
    <div>
      <div className="container">
        <div className="row">
          {posts.map((items: any) => (
            <div className="col col-3 mt-5" key={items.id}>
              <div className="card border-success mb-3">
                <div className="card-header bg-transparent border-success text-center">
                  {items.title}
                </div>
                <div className="card-body text-center ">
                  <img
                    alt="required"
                    src={items.url}
                    style={{ width: "100%", height: "150px" }}
                  />
                </div>
                <div className="card-footer bg-transparent border-success">
                  <span>
                    comments :{" "}
                    {
                      allcomments.filter((item) => item.postId === items.id)
                        .length
                    }
                  </span>
                  <span className="float-end">
                    <button
                      className="btn btn-sm btn-info "
                      onClick={() =>
                        likeOnClickHandler(items.id, items.likes + 1)
                      }
                    >
                      Like
                    </button>{" "}
                    : {items.likes}
                  </span>
                  <i className="fa fa-thumbs-o-up"></i>
                </div>
                <div className="d-flex">
                  <input
                    type="text"
                    placeholder="enter your comment"
                    className="form-control form-control-sm"
                    onChange={onchangeHandler}
                  />
                  <input
                    type="submit"
                    className="btn btn-success btn-sm"
                    onClick={() => onclickHandler(comment, items.id)}
                  />
                </div>
              </div>
              {allcomments.map((comm: any) => (
                <span key={comm.id}>
                  {comm.postId === items.id ? (
                    <div className="border border-secondary mt-1 rounded-3">
                      &nbsp;&nbsp;
                      {comm.comment}
                    </div>
                  ) : (
                    ""
                  )}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  allposts: state.allPostsReducer.allposts,
  stateAllComments: state.allCommentsReducer.stateAllComments,
});

export default connect(mapStateToProps, {
  allPosts,
  allComments,
  createComment,
  likeIncress,
})(Header);
