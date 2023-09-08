import axios from "axios";

const API_URL = "http://localhost:3000";

const getAll = async () => {
  const res = await axios.get(API_URL + "/posts/getall");

  return res.data;
};

const getById = async (_id) => {
  const res = await axios.get(API_URL + "/posts/id/" + _id);

  return res.data;
};

const getPostByName = async (postTitle) => {
  const res = await axios.get(API_URL + "/posts/title/" + postTitle);
  return res.data;
};

const deletePost = async (id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.delete(API_URL + "/posts/delete/" + id, {
    headers: {
      authorization: token,
    },
  });
  return res.data;
};

const likePost = async (_id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    
    const res = await axios.put(API_URL + "/posts/like/"+_id,{}, {
        headers: {
          authorization: token,
        },
      } );
    return res.data;
  };

  const dislikePost = async (_id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    
    const res = await axios.put(API_URL + "/posts/dislike/"+_id,{}, {
        headers: {
          authorization: token,
        },
      } );
    return res.data;
  };

  

  

  

const postsService = {
  getAll,
  getById,
  getPostByName,
  deletePost,
  likePost,
  dislikePost
  
  
};

export default postsService;
