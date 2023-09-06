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
  

const postsService = {
  getAll,
  getById,
  getPostByName
};

export default postsService;
