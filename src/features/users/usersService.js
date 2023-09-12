import axios from "axios";

const API_URL = "http://localhost:3000";

const getAll = async () => {
    const res = await axios.get(API_URL + "/users/getallusers" );

    
  
    return res.data;
  };

const follow = async (_id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.put(API_URL + "/users/follow/" + _id, {},
        {
            headers: { authorization: token },
        }
    );
    return res.data;
};

const unfollow = async (_id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.put(API_URL + "/users/unfollow/" + _id, {},
        {
            headers: { authorization: token },
        }
    )
    return res.data
}



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
    follow,
    unfollow,
    getAll
    
    
    
  };
  
  export default usersService;
