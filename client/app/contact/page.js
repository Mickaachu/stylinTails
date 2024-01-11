import { Images } from "@/constants"

import Image from "next/image"

function Contact() {
  return (
    <div className="py-20 px-3 flex flex-col lg:flex-row justify-center items-center md:py-36 lg:gap-10">
        <div ><Image src={Images.ContactUs} width={434} height={644} /></div>
        <div className="md:w-full lg:w-[40%]">
            <form action="" className="flex flex-col justify-center gap-3 ">
                <h1 className="text-center">Get in touch</h1>
                <label htmlFor="name">Name</label>
                <input type="text"/>
                <label htmlFor="email">Email</label>
                <input type="email" />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <button className="bg-[#CD53EC] py-2 px-8 rounded-full">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact