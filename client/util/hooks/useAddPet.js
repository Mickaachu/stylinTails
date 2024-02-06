import {useState} from 'react';
import axios from 'axios';


export const useAddPet = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
   
    const handleModal = () => {
        setShow(!show);
    }
    
    const addPet = async (data) => {
        setIsLoading(true);
        setError(null);
        const response = await axios.post('http://localhost:8000/addPet', data);
        
        if(response.data.error) {
            setError(response.data.error);
            console.log(response)
            setIsLoading(false);
        }
        else {
            
            setIsLoading(false);
            console.log(show)
        }


    }
    return {show, handleModal, addPet, error, isLoading};

}

