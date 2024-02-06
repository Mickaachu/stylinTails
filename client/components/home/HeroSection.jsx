import Image from "next/image"
import { Images } from "@/constants"
import { Button } from "@/components"
import Link from "next/link"

function HeroSection() {
  return (
    <div className="flex min-h-[70vh] justify-center items-center px-3 ">
     <div className="flex flex-col gap-6 mt-24 lg:mt-0">
      <h1 className="max-w-[590px]">The best way to make your pet look and feel its best.
      </h1>
      <Link href="/register" >
        <Button  type="primary">Book an Appointment now!</Button>
      </Link>
     </div>
     <div className="hidden lg:block mt-40">
      <Image src={Images.doghero} alt="cute dog sitting" width={439} heigh={616}/>
     </div>
    </div>
  )
}

export default HeroSection