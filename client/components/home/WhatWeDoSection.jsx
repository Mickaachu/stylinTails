import Card from "../common/Card"
import { Icons } from "@/constants"
function WhatWeDoSection() {
  return (
    <div className="py-5 px-3 flex flex-col justify-center items-center">
      <h2>What we do</h2>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
        <Card image={Icons.bathAndBrush} title="Bath and Brush" description="This is a great option for pets that don't need a full haircut. It includes a bath, brush-out, and nail trim." />
        <Card image={Icons.fullGrooming} title="Full Grooming" description="This includes a bath, haircut, nail trim, ear cleaning, and anal gland expression." />
        <Card image={Icons.nailTrim} title="Nail Trim" description="This is a quick and easy way to keep your pet's nails trimmed and healthy." />
        <Card image={Icons.earCleaning} title="Ear Cleaning" description="This is important for keeping your pet's ears clean and free of dirt and debris." />

      </div>
    </div>
  )
}

export default WhatWeDoSection