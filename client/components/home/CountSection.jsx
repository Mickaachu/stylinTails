import React from 'react'

function CountSection() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#A15ED6] flex flex-col p-14 rounded-3xl gap-3 md:gap-10 md:flex-row">
        <div className="flex justify-center items-center flex-col">
          <p className="text-white text-[48px]">3600+</p>
          <p className="text-[24px]">Happy Pets</p>
        </div>
        <div className="h-[2px] md:w-[2px] md:h-40 bg-[#A3DAF3]"></div>
        <div className="flex justify-center items-center flex-col">
          <p className="text-white text-[48px]">2000+</p>
          <p className="text-[24px]">Happy Customer</p>
        </div>
        <div className="h-[2px] bg-[#A3DAF3] md:w-[2px] md:h-40"></div>
        <div className="flex justify-center items-center flex-col">
          <p className="text-white text-[48px]">100</p>
          <p className="text-[24px]">Awards</p>
        </div>
      </div>
    </div>
  )
}

export default CountSection