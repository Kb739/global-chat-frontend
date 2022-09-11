import React from "react"
import Chat from "./chat";
import Input from "./input";
export default function Home() {
    return (
        <div className="home">
            <header></header>
            <main>
                <Chat />
            </main>
            <footer>
                <Input />
            </footer>
        </div>
    )
}