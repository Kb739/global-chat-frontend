import React, { useState, createContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
const chatContext = createContext();
const API = 'http://localhost:5000/api/v1'

function getSessionUser() {
    const user = JSON.parse(sessionStorage.getItem('user'))
    return user && user.name ? user : null;
}

function ChatProvider(props) {
    console.log('chat')
    const [chat, setChat] = useState([]);
    const navigate = useNavigate()


    async function createMsg(msg) {
        const user = getSessionUser()
        if (user) {
            const requestOptions = {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ user, msg })
            }
            try {
                const response = await fetch(`${API}/msgs`, requestOptions)
                const postID = await response.json()
                const localMsgs = JSON.parse(sessionStorage.getItem('msgs')) || []
                sessionStorage.setItem('msgs', JSON.stringify([...localMsgs, postID]))
            } catch (e) {
                //console.log(e)
            }
        } else {
            navigate('/', { replace: true })
        }
    }

    const fetchChat = useCallback(async () => {
        const user = getSessionUser()
        if (user) {
            try {
                const response = await fetch(`${API}/msgs`)
                const result = await response.json()
                setChat(result)
            }
            catch (e) {
                // console.log(e)
            }
        } else {
            navigate('/', { replace: true })
        }
    }, [navigate])

    useEffect(() => {
        const Interval = setInterval(() => { fetchChat() }, 1000)
        return () => clearInterval(Interval)
    }, [fetchChat])

    return (
        <chatContext.Provider value={{ chat, createMsg }}>
            {props.children}
        </chatContext.Provider>

    )
}
export { ChatProvider, chatContext }