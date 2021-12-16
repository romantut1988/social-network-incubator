import React from "react";
import s from './Post.module.css';

const Post = (props: { message: any; }) => {

    return (
        <div className={s.item}>
            <img src='https://eugeneronin.com/wp-content/uploads/2010/01/avatar.jpg'/>
            { props.message }
            <div>
                {/*<span>like</span> { props.likesCount }*/}
            </div>
        </div>
    )
}

export default Post;