
function AboutSection() {
  return (
    <div className="bg-[#F2F2F2] flex flex-col  mt-4 mb-4 md:mt-40 md:flex-row-reverse min-h-[70vh] ">
      <div className="flex flex-col  px-8 pt-11  pb-8  md:w-[60%] md:pt-20">
        <h2 >About Us</h2>
        <p className="max-w-[672px]">
          Stylin Tails is a full-service pet grooming salon dedicated to providing your furry friends with the highest quality of care. We use only the best products and techniques to ensure that your pet's coat is clean, healthy, and stylish. <br /> <br />We also take the time to get to know your pet and their individual needs.
        </p>
        <button className="bg-[#00FFF0] mt-6 font-semibold py-2 px-4 rounded-full max-w-[326px]">
          Set an Appointment now!
        </button>
      </div>
      <div className="bg-[url('../public/assets/Images/aboutUs.jpg')] min-h-[60vh] md:w-[40%] md:bg-center md:h-auto bg-cover">
        
      </div>
    </div>
  )
}

export default AboutSection