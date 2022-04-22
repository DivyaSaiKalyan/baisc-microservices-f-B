import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { createPost } from "./../Actions/action";

const CreatePost: React.FC = (props: any) => {
  const { createPost } = props;
  const [data, setData] = useState({
    title: "",
    url: "",
  });
  const changeHandler = (event: any) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const onclickHandler = async (event: any) => {
    event.preventDefault();
    await axios.post("http://localhost:3000/post/createpost", data);
    alert("post succsfully created");
    createPost(data);

    console.log(data);
    setData({
      title: "",
      url: "",
    });
  };
  return (
    <div className="container">
      <h5 className="text-center mt-3">Create Post</h5>
      <div className="d-flex">
        <label className="col-1">Enter Title:</label>
        <input
          type="text"
          placeholder="enter title of the image"
          className="form-control"
          name="title"
          value={data.title}
          onChange={changeHandler}
        />
        &nbsp;&nbsp;
        <label className="col-1"> Enter Url:</label>
        <input
          type="text"
          placeholder="enter image of the url"
          className="form-control"
          name="url"
          value={data.url}
          onChange={changeHandler}
        />{" "}
        &nbsp;
        <input
          type="submit"
          className="btn btn-success btn-sm"
          onClick={onclickHandler}
        />
      </div>
    </div>
  );
};

export default connect(null, { createPost })(CreatePost);
