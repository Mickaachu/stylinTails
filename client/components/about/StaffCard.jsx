import Image from "next/image"



function StaffCard({image,Name}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
        <Image src={image}/>
        <p className="text-3xl font-medium">{Name}</p>
    </div>
  )
}

export default StaffCard