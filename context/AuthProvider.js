import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState();

    // const token = localStorage.getItem('lk-token')
    const login = (data) => {

    }

    // useEffect(() => {
    //     fetch(`${process.env.URL}/api/user/userInfo?email=${user?.email}`, {
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('lk-token')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.success) {
    //                 setUser(data.data);
    //             }
    //             else {
    //                 setUser(null)
    //             }
    //         })

    // }, [])

    const authInfo = {}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
