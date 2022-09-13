import React, { useContext } from "react";
import { chatContext } from "./contexts/chatContext";
import Post from "./post";

export default function Chat() {
    const { chat } = useContext(chatContext)

    const postElements = chat.map(post => {
        const localMsgs = JSON.parse(sessionStorage.getItem('msgs')) || []
        const isLocal = localMsgs.includes(post.id);
        return <li key={post.id} className={`post ${isLocal ? 'local' : ''}`}>
            <Post post={post} isLocal={isLocal} /></ li >
    })

    return (
        <ul className="chat-list">
            {postElements}
        </ul>
    )
}