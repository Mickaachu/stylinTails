import React from 'react'

function CalltoAction() {
  return (
    <div className="bg-[url('../public/assets/Images/cta-mobile.jpg')] md:bg-[url('../public/assets/Images/cta-desktop.jpg')] bg-center bg-cover min-h-[80vh] md:min-h-[40vh] flex flex-col justify-center items-center px-5 text-white relative gap-3 md:flex-row md:gap-7 md:py-[40px] md:px-10">
      <h2 className="relative z-10 max-w-[591px]">Your pet deserves to look and feel their best. Let us help!</h2>
      <button className="relative z-10 border-[2px] py-2 px-5 rounded-full">Book an Appointment</button>
      <div className="bg-[#8F00FF] opacity-70 absolute top-0 bottom-0 left-0 right-0"></div>
    </div>
  )
}

export default CalltoAction