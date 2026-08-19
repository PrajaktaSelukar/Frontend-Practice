import React, { useState, useContext } from "react"
import UserContext from "../context/UserContext"

function Profile() {
    const { user } = useContext(UserContext)

    if(!user) {
        return <div>Please login first</div>
    }

    return (
        <div>
            <h2>Profile</h2>
            <p>Welcome, {user.userName}!</p>
        </div>
    )
}

export default Profile