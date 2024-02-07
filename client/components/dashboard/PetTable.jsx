function PetTable({data}) {
    
  return (
    <div className="container">
        <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
            <thead className="text-white">
                {
                    data.map((index) => {
                        return (
                            <tr key={`Category-${index}`} className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                <th className="p-3 text-left ">Name</th>
                                <th className="p-3 text-left">Breed</th>
                                <th className="p-3 text-left" width="110px">Actions</th>
                                
                            </tr>
                        )
                    })
                }
                
            </thead>
            <tbody className="flex-1 sm:flex-none">
               {
                data.map((pet) =>{
                    
                    return (
                        <tr key={pet._id} className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td className="border-grey-light border p-3 min-w-48">{pet.name}</td>
                            <td className="border-grey-light border p-3 truncate min-w-48">{pet.breed}</td>
                            <td className="border-grey-light border p-3 min-w-48 flex justify-evenly">
                                <button className="bg-red-400 px-4  rounded-full">Delete</button>
                                <button className="bg-[#CD53EC] px-4  rounded-full">Edit</button>
                            </td>
                            
                        </tr>
                    )
                })
               }
            </tbody>
        </table>
    </div>
  )
}

export default PetTable