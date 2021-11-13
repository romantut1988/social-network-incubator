import React from "react";
import s from './Profile.module.css';
import Post from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://share.america.gov/wp-content/uploads/2018/06/international-waters-freedom-of-navigation-DY8ERP.jpg'/>
            </div>
            <div>
                avatar + description
            </div>
            <Post/>
        </div>
    );
}

export default Profile;