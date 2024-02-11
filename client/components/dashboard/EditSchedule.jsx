import {useState, useEffect} from 'react'
import { Icons } from '@/constants'
import { Button } from ".."
import Image from "next/image"
function EditSchedule({data, handleClose, state, updateSchedule, pets}) {
    const [schedule, setSchedule] = useState({
        petId: data.pet._id,
        time: data.time,
        date: data.date,
        service: data.service,
        user: data.user,
        _id: data._id
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        await updateSchedule(schedule)
        handleClose()
    }
    const handleFormChange = (e) => {
        e.preventDefault()
        setSchedule({...schedule, [e.target.name] : e.target.value})
    }
    useEffect(() => {
        setSchedule({
            petId: data.pet._id,
            time: data.time,
            date: data.date,
            service: data.service,
            user: data.user,
            _id: data._id
        })
        console.log(data)
    }, [data])


if(state === false) return null
  return (
    <div className="absolute bg-white p-5 right-0 left-0  top-0 bottom-0 m-auto shadow-lg max-w-96 max-h-[460px] rounded-sm">
        <div className="flex justify-end">
            <button onClick={handleClose} >
            <Image src={Icons.close} width={25} height={25} alt="close add pet modal"/>
            </button>
        </div>
        <h2>Edit</h2>
        <form action="#" method="POST" className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
                <label htmlFor="petId">Schedule for</label>
                <select name="petId" id="name" defaultValue={data.pet._id}  onChange={handleFormChange}>
                    
                    <option disabled >Select a pet</option>
                    {pets.map(pet => (
                        <option value={pet._id} key={pet._id}>{pet.name}</option>
                    ))}
                    
                </select>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="time">
                    Time
                </label>
                
                <input type="time" defaultValue={data.time}  name="time" id=""time onChange={handleFormChange}/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="date">
                    Date
                </label>
                
                <input type="date" defaultValue={data.date.slice(0, 10)} name="date" id="date" onChange={handleFormChange} />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="service">
                    Service
                </label>
                
                <select name="service" id="service" defaultValue={data.service} onChange={handleFormChange}>
                    <option disabled >Select a Service</option>
                    <option value="Bath and Brush">Bath and Brush</option>
                    <option value="Full Grooming">Full Grooming</option>
                    <option value="Teeth Cleaning">Teeth Cleaning</option>
                    <option value="Nail Trim">Nail Trim</option>
                    <option value="Ear Clean">Ear Clean</option>
                </select>
            </div>

            <Button>Submit</Button>
        </form>
    </div>
  )
}

export default EditSchedule