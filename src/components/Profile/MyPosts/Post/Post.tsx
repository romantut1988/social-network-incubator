import React from "react";
import s from "./Post.module.css"

export const Post = () => {
    return (
        <div className={s.item}>
            <img src={"https://avatars.mds.yandex.net/get-zen_doc/4079111/pub_605aacd949f41a2d655e9173_605aafb14807e8528b063e2a/scale_1200"}/>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}