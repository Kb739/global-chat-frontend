import React from "react";
export default function Login() {
    const [user, setUser] = React.useState([])
    function handleChange(e) {
        setUser({
            name: e.target.value
        })
    }
    return (
        <div className="login">
            <form className="login-form">
                <label className="input-label">
                    <h3>Alias</h3>
                    <input name="name" value={user.name} autoFocus={true} required={true} />
                </label>
                <button className="enter" type="submit">Let me in</button>
            </form>
        </div>
    )
}