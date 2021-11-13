import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://eugeneronin.com/wp-content/uploads/2010/01/avatar.jpg'/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;