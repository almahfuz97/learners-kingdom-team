import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userEmail, setUserEmail] = useState('');
    const [token, setToken] = useState('');

    const logout = () => {
        localStorage.removeItem('lk-token');
        setUser(null);
        setUserEmail('');
    }

    console.log(userEmail, 'userEmail')
    console.log(token, 'token')
    console.log(user, 'user')

    useEffect(() => {
        setToken(localStorage.getItem('lk-token'));
        if (token) {
            fetch(`${process.env.URL}/api/user/userInfo`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        setUser(data.data);
                        console.log(user)
                    }
                })
        }
    }, [token])

    const authInfo = {
        user,
        setUser,
        setUserEmail,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
