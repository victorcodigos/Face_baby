import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { notification } from "antd";
import { newComment } from "../../features/comments/commentsSlice";
import ErrorList from "antd/es/form/ErrorList";

const Comment = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    postId: _id,
  });

  const { title, body } = formData;
  const onChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (title === "" || body === "") {
        throw new ErrorList("Please fill in all fields.");
      }

      dispatch(newComment(formData));
      notification.success({
        message: "commentary is created sucessfully",
      });
      setFormData({ title: "", body: "" });
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.message,
      });
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="comment-title-container">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={onChange}
            value={title}
          />
        </div>
        <div className="comment-body-container">
          <textarea
            name="body"
            placeholder="Comment"
            onChange={onChange}
            value={body}
          />
        </div>
        <button type="submit" style={{ marginTop: "16px" }}>
          Submit
        </button>
      </form>
    </>
  );
};
export default Comment;
