import React from "react";
import s from "../MyPosts/MyPosts.module.css";
import {Post as PostItem} from "./Post/Post";
import {Post} from "../../../types/Posts";

type MyPostsType = {
    posts: Array<Post>
}

export const MyPosts = (props: MyPostsType) => {
    let postsElements = props.posts.map(p => <PostItem message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}