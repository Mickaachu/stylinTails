'use client';
import Image from "next/image";
const Card = ({image, title, description}) => {
  return (
    <div className="pt-7 px-9 pb-10 flex flex-col justify-center items-center text-center bg-[#A15ED6] gap-2 max-w-[381px] min-h-[305px]">
        <Image src={image} alt={title} width={112} height={100} />
        <p className="text-white text-2xl font-bold">{title}</p>
        <p className="text-[#ECECEC] ">{description}</p>
    </div>
  )
}

export default Card