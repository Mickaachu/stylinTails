import StaffCard from "./StaffCard"
import { Images } from "@/constants"
function StaffSection() {
  return (
    <div className="flex flex-col justify-center items-center py-7 px-5">
        <h2>Meet the Staff</h2>
        <div className="flex flex-col lg:flex-row lg:justify-around lg:items-end lg:gap-16">
            <StaffCard image={Images.staff1} Name="Sera"/>
            <StaffCard image={Images.staff2} Name="Katie"/>
            <StaffCard image={Images.staff3} Name="Jacob"/>
        </div>
    </div>
  )
}

export default StaffSection