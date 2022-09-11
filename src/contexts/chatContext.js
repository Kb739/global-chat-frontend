import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const chatContext = createContext();
const API = 'http://localhost:3000/api/v1'

function ChatProvider(props) {
    const [chat, setChat] = useState([]);
    const [load, setLoad] = useState(true);
    const navigate = useNavigate()

    async function createMsg(msg) {
        const requestOptions = {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(msg)
        }
        const response = await fetch(`${API}/msgs`, requestOptions)
        const newMsgID = await response.json()
        //store this id for local message identification; session storage
        setLoad(true)
    }

    async function fetchChat() {
        try {
            const response = await fetch(`${API}/msgs`)
            const result = await response.json()
            setChat(result)
            setLoad(false)
        }
        catch (e) {
            // console.log(e)
        }

    }

    useEffect(() => {
        if (load) {
            fetchChat()
        }
    }, [load])

    return (
        <chatContext.Provider value={{ chat, createMsg }}>
            {props.children}
        </chatContext.Provider>

    )
}
export { ChatProvider, chatContext }