import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userEmail, setUserEmail] = useState('');
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(true)

    const logout = () => {
        localStorage.removeItem('lk-token');
        setUser(null);
        setUserEmail('');
        setToken('')
    }

    console.log(userEmail, 'userEmail')
    console.log(token, 'token')
    console.log(user, 'user')

    useEffect(() => {
        console.log('ami useeffect er vitore')
        setToken(localStorage.getItem('lk-token'));
    }, [userEmail])

    useEffect(() => {

        fetch(`${process.env.URL}/api/user/userInfo`, {
            headers: {
                authorization: `bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setUser(data.data);
                }
                setLoading(false);

            })
            .catch(err => {
                setLoading(false);
                setUser();
            })

    }, [token, userEmail])

    const authInfo = {
        user,
        setUser,
        setUserEmail,
        logout,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
