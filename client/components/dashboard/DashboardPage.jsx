'use client'
import { Button } from ".."
import Table from "./Table"
function DashboardPage() {

  return (
    <div className="pt-28 px-3 flex flex-col gap-4 justify-center items-center">
      <h1>Hi User</h1>
      <div className="flex flex-col gap-2 max-w-72">
        <Button type="secondary">
          Schedule Appointment
        </Button>
        <Button type="border-secondary">
          Add Pet
        </Button>
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