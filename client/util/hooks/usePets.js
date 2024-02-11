import {useState, useEffect} from 'react';
import axios from 'axios';


export const usePets = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [pets, setPets] = useState([]);
    const apiRoute = 'https://stylin-tails-api.onrender.com'
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
       if(user) {
        getPets(user.user?._id);
       }
        
    },[])
    

    const handleModal = () => {
        setShow(!show);
    }

    const getPets = async (id) => {
        setIsLoading(true);
        setError(null);
        const response = await axios.get(`${apiRoute}/${id}`);
        
        if(response.data.error) {
            setError(response.data.error);
            setIsLoading(false);
        }
        else {
            setIsLoading(false);
            setPets(response.data)
        }
    }

    const addPet = async (data) => {
        setIsLoading(true);
        setError(null);
        const response = await axios.post(`${apiRoute}/addPet`, data);
        
        if(response.data.error) {
            setError(response.data.error);
            setIsLoading(false);
        }
        else {
            setIsLoading(false);
            setPets(response.data.pets)
           
        }   


    }
    const deletePet = async (user,id) => {
       
        setIsLoading(true);
        setError(null);
        const response = await axios.delete(`${apiRoute}/deletePet/${user}/${id}`);
        
        if(response.data.error) {
            setError(response.data.error);
            setIsLoading(false);
        }
        else {
            setIsLoading(false);
            setPets(response.data.pets)
        }
    }
    const updatePet = async (data) => {
        setIsLoading(true);
        setError(null);
        const response = await axios.put(`${apiRoute}/updatePet`, data);
        
        if(response.data.error) {
            setError(response.data.error);
            setIsLoading(false);
        }
        else {
            setIsLoading(false);
            setPets(response.data.pets)
        }
    }

   
    
    return {show, handleModal, addPet, error, isLoading, getPets, pets, deletePet, updatePet};

}

