import Image from "next/image"
import { Images } from "@/constants"
function HeroSection() {
  return (
    <div className="flex min-h-[70vh] justify-center items-center">
     <div className="flex flex-col gap-6">
      <h1 className="max-w-[590px]">The best way to make your pet look and feel its best.
      </h1>
      <button className="bg-[#00FFF0] max-w-[326px] font-bold py-2 px-4 rounded-full">
        Set an Appointment now!
      </button>
        
     </div>
     <div className="hidden lg:block ">
      <Image src={Images.doghero} alt="cute dog sitting" />
     </div>
    </div>
  )
}

export default HeroSection