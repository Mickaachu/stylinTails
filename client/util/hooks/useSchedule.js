import { useAuthContextProvider } from "./useAuthContextProvider";
import {useState, useEffect} from 'react'
import axios from 'axios'
export const useSchedule = () => {
    
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [schedules, setSchedules] = useState([]);
    const { user } = useAuthContextProvider()
    const handleShow = () => {
        setShowModal(!showModal);
    }
    useEffect(() => {
        getAllSchedule()
    }, [])

    const getAllSchedule = async () => {
        setIsLoading(true);
        setError(null);
        const response = await axios.get(`http://localhost:8000/getAllSchedule/${user.user._id}`);
        if(response.data.error) {
            setError(response.data.error);
            setIsLoading(false);
        }
        else {
            setIsLoading(false);
            setSchedules(response.data);
        }
    }
    

    const addSchedule = async (data) => {
       setIsLoading(true);
       setError(null);
        const response = await axios.post('http://localhost:8000/addSchedule', data);
        if(response.data.error) {
            setError(response.data.error);
            setIsLoading(false);

        }
        else {
            setIsLoading(false);
            getAllSchedule()
        }
    }

    const updateSchedule = async (data) => {
        setIsLoading(true);
        setError(null);
        const response = await axios.put('http://localhost:8000/updateSchedule', data);
        if(response.data.error) {
            setError(response.data.error);
            setIsLoading(false);
        }
        else {
            setIsLoading(false);
            getAllSchedule()
        }
    }
    const deleteSchedule = async (id) => {
        setIsLoading(true);
        setError(null);
        const response = await axios.delete(`http://localhost:8000/deleteSchedule/${id}`);
        if(response.data.error) {
            setError(response.data.error);
            setIsLoading(false);
        }
        else {
            setIsLoading(false);
            getAllSchedule()
        }
    }

    

    return {addSchedule, showModal, handleShow , error, isLoading, schedules, updateSchedule, deleteSchedule}
}