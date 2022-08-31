import React from "react"
import { AuthContext } from "../providers/auth"

const Profile = () => {
    const { user, setUser } = React.useContext(AuthContext) 

    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    )
}

export default Profile