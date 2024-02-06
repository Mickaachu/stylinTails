'use client'
import {useState} from 'react'
import { Button } from ".."
import Table from "./Table"
import AddPet from "./AddPet"
import { useAuthContextProvider } from "@/util/hooks/useAuthContextProvider"
import { useAddPet } from '@/util/hooks/useAddPet'

function DashboardPage() {

  const { user } = useAuthContextProvider()
  const { handleModal, show } = useAddPet()
  
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

        <AddPet  state={show} handleClose={handleModal}/>
      </div>
      <div>
        <h2 className="text-lg">Appointments</h2>
        <div className="flex items-center justify-center h-full">
          <Table />  
        </div>
        
      </div>
    </div>
  )
}

export default DashboardPage