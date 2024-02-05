'use client';
import {useContext, useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/util/authContext';


const PrivateRoute = ({children}) => {
    const router = useRouter();
    const {user, loading} = useContext(AuthContext);

    useEffect(() => {
        if(!user && !loading) {
            router.push("/login")
        }
    }, [user, loading])

    if (loading) {
        return <p>Loading...</p>
    }

    if(!user) {
        return null
    }

    return children;

}

export default PrivateRoute;