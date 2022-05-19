import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

export const Profile = () => {
    return (
        <div>
            <div>
                <img src={"https://klike.net/uploads/posts/2019-01/1547365376_1.jpg"}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}