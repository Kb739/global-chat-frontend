import React from "react";
export default function Post(props) {
    const { post: { time, msg, user }, isLocal } = props;
    return (
        <>
            {isLocal ? '' : <h5 className="sender">{user.name}</h5>}
            <div className={`text-box ${isLocal ? 'local' : ''}`}>
                <p>{msg.content}</p>
                {time ? <h5 className="post-time">{formatTimeHM(time)}</h5> : ''}
            </div>
        </>
    )
}
function formatTimeHM(time) {
    const date = Array.from(new Date(time).toLocaleTimeString())
    date.splice(-6, 3)
    return date.join('').toLowerCase();
}