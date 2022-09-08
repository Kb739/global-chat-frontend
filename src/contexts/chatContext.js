import React, { useState, createContext, useEffect } from "react";

const chatContext = createContext();
const API = 'http://localhost:3000/api/v1'

function ChatProvider(props) {
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(true);

    async function createMsg(msg) {
        const requestOptions = {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(msg)
        }
        const response = await fetch(`${API}/msgs`, requestOptions)
        const newMsgID = await response.json()
        //store this id for local message identification
        setLoading(true)
    }

    async function fetchChat() {
        const response = await fetch(`${API}/msgs`)
        const result = await response.json()
        console.log(result)
        setChat(result)
        setLoading(false)
    }

    useEffect(() => {
        if (loading) {
            fetchChat()
        }
    }, [loading])
    return (
        <chatContext.Provider value={{ chat, createMsg }}>
            {props.children}
        </chatContext.Provider>
    )
}
export { ChatProvider, chatContext }