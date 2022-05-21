import React from "react";
import s from "./Post.module.css";

type PropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PropsType) => {
    return (
        <div className={s.item}>
            <img src={"https://avatars.mds.yandex.net/get-zen_doc/4079111/pub_605aacd949f41a2d655e9173_605aafb14807e8528b063e2a/scale_1200"}/>
            {props.message}
            <div>
                <span>Like</span> { props.likesCount}
            </div>
        </div>
    )
}