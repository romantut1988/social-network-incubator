import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + " " + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

type MessageType = {
    message: string
    id: number
}

export const Message = (props: MessageType) => {
    return  <div className={s.dialog}>{props.message}</div>
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id={1}/>
                <DialogItem name="Andrey" id={2}/>
                <DialogItem name="Sveta" id={3}/>
                <DialogItem name="Sasha" id={4}/>
                <DialogItem name="Viktor" id={5}/>
                <DialogItem name="Valera" id={6}/>

            </div>
            <div className={s.messages}>
                <Message message="Hi" id={1}/>
                <Message message="Howe is your it-kamasutra" id={2}/>
                <Message message="Yo" id={3}/>
                <Message message="Yo"id={4}/>
                <Message message="Yo"id={5}/>
            </div>
        </div>
    )
}