import React, { useState } from "react";
import { useAuth } from "../providers/auth";

const Login = () => {
    const [name, setName] = useState({
        name: ''
    })
    const { setUser } = useAuth()

    const handleLogin = () => {
        localStorage.setItem('user', JSON.stringify(name))
        setUser(name)
    }

    const handleLogout = () => {
        localStorage.removeItem('user')
        setUser({name: ""})
    }

    return (
        <div>
            <input type="text" onChange={(e) => setName({ name: e.target.value })} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Login;