'use client'
import {useState, useEffect} from 'react'
import { Button } from ".."
import Table from "./Table"
import PetTable from './PetTable'
import AddPet from "./AddPet"
import { useAuthContextProvider } from "@/util/hooks/useAuthContextProvider"
import { useAddPet } from '@/util/hooks/useAddPet'

function DashboardPage() {
  const [showTable, setShowTable] = useState(false)
  const { handleModal, show, addPet, pets } = useAddPet()
  const { user } = useAuthContextProvider()

  
 
  return (
    <div className="pt-28 px-3 flex flex-col gap-4 justify-center items-center">
      <h1>Hi {user.user?.username}</h1>
      <div className="flex flex-col gap-2 max-w-72">

        <Button type="secondary">
          Schedule Appointment
        </Button>

        <Button type="border-secondary" handleClick={handleModal} >
          Add Pet
        </Button>

        <AddPet  state={show} handleClose={handleModal} addPet={addPet}/>
      </div>
      <div className="flex gap-3">
        <button onClick={() => setShowTable(false)} className={`underline ${showTable === false ? "text-[#bb41da] " : "text-black"}`}>
          Pets
        </button>
        <button onClick={() => setShowTable(true)}  className={`underline ${showTable === false ? "text-black" : "text-[#bb41da]"}`}>
          Appointment
        </button>
      </div>

      {!showTable && (
        <div>
          <h2 className="text-lg">Pets</h2>
          <div className="flex items-center justify-center h-full">
            <PetTable data={pets}/>  
          </div>
        </div>
      )}
      { showTable && (
        <div>
          <h2 className="text-lg">Appointments</h2>
          <div className="flex items-center justify-center h-full">
            <Table />  
          </div>
          
        </div>
        )
      }
    </div>
  )
}

export default DashboardPage