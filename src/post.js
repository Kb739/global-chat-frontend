import React from "react";
export default function Post({ msg, user, isLocal }) {
    return (
        <>
            {isLocal ? '' : <h5 className="sender">{user.name}</h5>}
            <div className={`text-box ${isLocal ? 'local' : ''}`}>
                <p>{msg.content}</p>
            </div>
        </>
    )
}