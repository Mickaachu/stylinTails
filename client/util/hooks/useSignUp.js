import { useAuthContextProvider } from "./useAuthContextProvider";
import {useState} from 'react';
import axios from 'axios';

export const useSignUp = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContextProvider();

    const signUp = async (data) => {
        setIsLoading(true);
        setError(null);
        const response = await axios.post('http://localhost:8000/register', data);
        
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
    return {signUp, error, isLoading};
}