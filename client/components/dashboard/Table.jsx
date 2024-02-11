import { useSchedule } from "@/util/hooks/useSchedule"
import {useState, useEffect} from 'react'
import EditSchedule from "./EditSchedule"


function Table({data, deleteSchedule, user, pets, updateSchedule}) {
    const { showModal, handleShow } = useSchedule()
    const [scheduleToPass, setScheduleToPass] = useState({
        pet: {},
        time: "",
        date: "",
        service: "",
        user: ""
    })
    const handleDelete = (id) => {
        deleteSchedule(id)
    }
    const handleEdit = (editedData) => {
        setScheduleToPass(editedData)
        handleShow()
    }

    

  return (
    <div className="container">
       {
        !data.length && <h3 className="text-center py-6 font-bold">No Schedule</h3>
       }
       {
        data.length > 0 && (
            <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
            <EditSchedule data={scheduleToPass}  handleClose={handleShow} updateSchedule={updateSchedule} pets={pets} state={showModal} />

            <thead className="text-white">
                {
                    data.map((index) => (
                        <tr key={index} className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                            <th className="p-3 text-left">Pet&apos;s Name</th>
                            <th className="p-3 text-left">Time </th>
                            <th className="p-3 text-left" width="110px">Date</th>
                            <th className="p-3 text-left" width="110px">Service</th>
                            <th className="p-3 text-left" width="110px">Actions</th>
                        
                        </tr>
                    ))
                }
                
            </thead>
            <tbody className="flex-1 sm:flex-none">
               {
                data.map((schedule) => (
                    <tr key={schedule._id} className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                        <td className="border-grey-light border p-3 min-w-48">{schedule.pet.name}</td>
                        <td className="border-grey-light border p-3 truncate min-w-48">{schedule.time.toString()}</td>
                        <td className="border-grey-light border p-3 truncate min-w-48">{schedule.date.slice(0, 10)}</td>
                        <td className="border-grey-light border p-3 truncate min-w-48">{schedule.service}</td>
                        <td className="border-grey-light border p-3 min-w-48 flex justify-evenly">
                            <button className="bg-red-400 px-4  rounded-full" onClick={() => handleDelete(schedule._id)}>Delete</button>
                            <button onClick={() => handleEdit(schedule)}  className="bg-[#CD53EC] px-4  rounded-full">Edit</button>
                        </td>
                    </tr>
                )
                )
               }
            </tbody>
        </table>
        )
       }
    </div>
  )
}

export default Table