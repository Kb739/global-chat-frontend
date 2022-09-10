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
                    <h3>alias:</h3>
                    <input name="name" value={user.name} />
                </label>
            </form>
        </div>
    )
}