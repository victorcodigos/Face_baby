import axios from "axios";

const API_URL = "http://localhost:3000";

const getUserConnected = async () => {
    const token = JSON.parse(localStorage.getItem("token"))
  const res = await axios.get(API_URL + "/users/getuserconnected" ,  {
    headers: {
      authorization: token,
    },
  });
  return res.data;
};

const usersService = {
    getUserConnected,
    
    
    
  };
  
  export default usersService;