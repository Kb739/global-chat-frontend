import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const chatContext = createContext();
const API = 'http://localhost:3000/api/v1'

function ChatProvider(props) {
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

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
        const token = '';
        const requestOptions = {
            headers: { Authorization: `Bearer ${token}` }
        }
        try {
            const response = await fetch(`${API}/msgs`, requestOptions)
            if (response.status === 401) {
                return navigate("./login", { replace: true })
            }
            else {
                const result = await response.json()
                setChat(result)
            }
        }
        catch (e) {
            //navigate to error page
            console.log(e)
        }

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