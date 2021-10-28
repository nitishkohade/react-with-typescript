import React from "react"
import { Login } from "./Login"

type PrivateProps = {
    isLoggedIn: boolean
    Component: React.ComponentClass<{
                                        name: string
                                    }>
}

export const Private = ({isLoggedIn, Component}: PrivateProps) => {
    if(isLoggedIn) {
        return <Component name={"d"} />
    }
    return <Login />
}