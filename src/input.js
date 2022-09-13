import React, { useEffect, useState, useRef, useContext } from "react";
import { chatContext } from "./contexts/chatContext";

export default function Input() {
    const [msg, setMsg] = useState({
        content: ''
    })
    const { createMsg } = useContext(chatContext)
    const ref = useRef(null)

    function handleChange(e) {
        setMsg({ content: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault();
        ref.current.focus();
        if (msg.content) {
            setMsg({ content: '' })
            createMsg(msg)
            resetSize()
        }
    }

    function resetSize() {
        ref.current.rows = 2;
    }

    function handleSize() {
        const textbox = ref.current;
        const letterWidth = 9;//hardcoded number , not gonna be in final version
        const textWidth = textbox.value.length * letterWidth;
        const rows = Math.ceil(textWidth / textbox.clientWidth);
        textbox.rows = Math.min(5, Math.max(rows, 2));
    }

    useEffect(() => {
        window.addEventListener('resize', handleSize)
        return () => {
            window.removeEventListener('resize', handleSize);
        }
    })

    return (
        <form className='input-section' onSubmit={handleSubmit}>
            <div className="box-wrapper">
                <textarea onChange={handleChange} value={msg.content} onKeyDown={e => {
                    if (e.key === "Enter")
                        handleSubmit(e)
                }} ref={ref} onInput={handleSize} autoFocus={true} />
            </div>
            <button type="submit" className="send">Send</button>
        </form>
    )
}