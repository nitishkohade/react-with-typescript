import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const User = () => {

    // const [user, setUser] = useState<null|AuthUser>(null)

    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: "nitish",
            email: "nitish@gmail.com"
        })
    }
    const handleLogout = () => {
        // setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is logged in/ logged out {user.email}</div>
        </div>
    )
}