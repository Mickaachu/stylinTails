import { useAuthContextProvider } from "./useAuthContextProvider";
import {useState} from 'react';
import axios from 'axios';
export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContextProvider();
    const apiRoute = 'https://stylin-tails-api.onrender.com'
    const login = async (data) => {
        setIsLoading(true);
        setError(null);
        const response = await axios.post(`${apiRoute}/login`, data);
        
        if(response.data.error) {
            setError(response.data.error);
            console.log(response)
            setIsLoading(false);
        }
        else {
            localStorage.setItem('user', JSON.stringify(response.data) )

            dispatch({type: 'LOGIN', payload: response.data});
            
            setIsLoading(false);
        }

    }
    return {login, error, isLoading};

}

