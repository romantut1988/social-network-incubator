import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message as MessageItem} from "./Message/Message";
import {Dialog} from "../../types/Dialogs";
import {Message} from "../../types/Message";

export type DialogsProps = {
        dialogs: Array<Dialog>
        messages: Array<Message>
}

export const Dialogs = (props: DialogsProps) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messages.map(message => <MessageItem message={message.message} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}