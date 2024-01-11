import React from 'react'

function AboutHeroSection() {
  return (
    <div className="flex justify-center items-center min-h-[60vh] bg-[url('../public/assets/Images/aboutUscat.jpg')] bg-cover bg-no-repeat bg-center relative">
      <h1 className="relative z-10 text-white">About Us</h1>
      <div className="absolute bg-[#8F00FF] top-0 bottom-0 left-0 right-0 opacity-35"></div>
    </div>
  )
}

export default AboutHeroSection