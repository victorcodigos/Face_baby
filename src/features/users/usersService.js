import axios from "axios";

const API_URL = "http://localhost:3000";

const follow = async (_id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.put(API_URL + "users/follow" + _id, {},
        {
            headers: { authorization: token },
        }
    );

    return res.data;
};

const unfollow = async (_id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.put(API_URL + "users/unfollow" + _id, {},
        {
            headers: { authorization: token },
        }
    )
}


const usersService = {
    follow,
    unfollow

};

export default usersService;