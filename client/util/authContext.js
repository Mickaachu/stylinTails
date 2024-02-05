'use client';

import {createContext, useState, useEffect} from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedAuthToken = localStorage.getItem('authToken');
        if(storedUser && storedAuthToken) {
            setUser(JSON.parse(storedUser));
            setLoading(false);
        } else {
            setLoading(false);
        }

    },[])
    return (
        <AuthContext.Provider value={{user, setUser, loading, setLoading}}>
            {children}
        </AuthContext.Provider>
    )

    
}
export {AuthContext, AuthProvider}