import React, { useContext } from "react";
import { chatContext } from "./contexts/chatContext";

export default function Chat() {
    const { chat } = useContext(chatContext)

    const postElements = chat.map(post => {
        const localMsgs = JSON.parse(sessionStorage.getItem('msgs')) || []
        const classes = `text-box ${localMsgs.includes(post.id) ? 'local' : ''}`
        return <li key={post.id} className={classes}>{post.msg.content}</ li >
    })

    return (
        <ul className="chat-list">
            {postElements}
        </ul>
    )
}