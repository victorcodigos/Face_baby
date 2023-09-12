import axios from "axios";

const API_URL = "http://localhost:3000";

const newComment = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.post(API_URL + "/create/comment" ,{
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const commentsService = {
    newComment
  };
  
  export default commentsService;