import React, { useEffect } from "react";
import Post from "../Post/Post";
import { getAll } from "../../features/posts/postsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { reset } from "../../features/auth/authSlice";



const Posts = () => {

    const { isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(async () => {
        await dispatch(getAll());
        dispatch(reset());
    }, []);

    if (isLoading) {
        return <h1>Cargando posts...</h1>;

    }

    return (
        <div>
            <h1>Posts</h1>
            <Post />
        </div>
    );
};

export default Posts;