import { Button } from ".."
import Image from "next/image"
import {Icons} from '@/constants'
import { useState, useEffect } from "react" 

import { useAuthContextProvider } from "@/util/hooks/useAuthContextProvider"



function EditPet({state, handleClose, petId, petName, petBreed , updatePet}) {
  const {user} = useAuthContextProvider()
  const [data, setData] = useState({
    name: petName,
    breed: petBreed,
    user: user.user?._id,
    _id: petId
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updatePet(data)
    handleClose()
  }

  useEffect(() => {
    setData({
      name: petName,
      breed: petBreed,
      user: user.user?._id,
      _id: petId
    })
  },[petName, petBreed, petId])
  

  if(state === false) return null
  return (
    <div className="absolute bg-white p-5 right-0 left-0  top-0 bottom-0 m-auto shadow-lg max-w-96 max-h-72 rounded-sm">
      <div className="flex justify-end">
        <button onClick={handleClose} >
          <Image src={Icons.close} width={25} height={25} alt="close add pet modal"/>
        </button>
      </div>

      <form action="#" method="POST" className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Pet Name</label>
          <input type="text" name="name" defaultValue={petName} id="name" onChange={(e) => {setData({...data, [e.target.name] : e.target.value})}} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="breed">
            Breed
          </label>
          <p className="text-[10px]">if you don&apos;t know, please leave it empty</p>
          <input type="text" defaultValue={petBreed} name="breed" id="breed" onChange={(e) => {setData({...data, [e.target.name] : e.target.value})}} />
        </div>

        <Button>Submit</Button>
      </form>
    </div>
  )
}

export default EditPet