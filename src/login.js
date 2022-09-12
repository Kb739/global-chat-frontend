import React from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [user, setUser] = React.useState({ name: '' })
    const navigate = useNavigate()
    function handleChange(e) {
        setUser({
            name: e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        sessionStorage.setItem('user', JSON.stringify(user))
        navigate('/home', { replace: true })
    }
    return (
        <div className="login">
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="input-label">
                    <h3>Alias</h3>
                    <input type="text" name="name" value={user.name} onChange={handleChange} autoFocus={true} required={true} />
                </label>
                <button className="enter" type="submit">Let me in</button>
            </form>
        </div>
    )
}