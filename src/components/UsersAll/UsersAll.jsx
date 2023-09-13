import React, { useEffect } from "react";
import { getAll } from "../../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPersonPlusFill, BsFillPersonDashFill } from "react-icons/bs";
import { Card } from "antd";
import { follow, unfollow } from "../../features/users/usersSlice";
import "./UsersAll.scss"

const UsersAll = () => {
    
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users)

    const {user } = useSelector(state => state.auth)


    useEffect(() => {
        dispatch(getAll());
    }, []);



    const handleFollowClick = (_id) => {
        dispatch(follow(_id));

    };

    const handleUnfollowClick = (_id) => {
        dispatch(unfollow(_id))
    };

    return (
        <>
            <div className="div-main">
            {users && users.map((u) => {
                const isAlreadyFollowed = u.followers.includes(user._id)
                console.log(user._id)
                return(
                    <div key={u._id}>
                        <Card className="card">
                            <p className="user">{u?.username}</p>
                            {isAlreadyFollowed ? <button className="button-" type="button" style={{ backgroundColor: '#93CFE4' }} onClick={()=>handleUnfollowClick(u._id)}>
                                <BsFillPersonDashFill /> Unfollow
                            </button>:   <button className="button-" type="button" style={{ backgroundColor: '#93CFE4' }} onClick={()=>handleFollowClick(u._id)}>
                                <BsFillPersonPlusFill /> Follow
                            </button> }   
                        </Card>
                    </div>
                )})}
            </div>
        </>
    );
};

export default UsersAll;