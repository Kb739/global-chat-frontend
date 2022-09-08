import React, { useContext } from "react";
import { chatContext } from "./contexts/chatContext";

export default function Chat() {
    const { chat } = useContext(chatContext)

    const msgElements = chat.map(msg => {
        const classes = `text-box ${msg.id % 2 ? 'local' : ''}`
        return <li key={msg.id} className={classes}>{msg.content}</ li >
    })

    return (
        <ul className="chat-list">
            {msgElements}
        </ul>
    )
}