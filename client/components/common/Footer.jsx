'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Icons } from '@/constants'
import { useAuthContextProvider } from '@/util/hooks/useAuthContextProvider'
function Footer() {
  const { user } = useAuthContextProvider()
  if(user) return null;
  return (
    <div className="bg-[#A3DAF3] flex flex-col justify-center items-center py-11 px-8 gap-14 md:flex-row md:justify-evenly ">
      <div>
        <Image src={Icons.footerLogo} alt="StylinTails" width={286} height={128} />
        <p className="max-w-[400px]">Stylin Tails is a full-service pet grooming salon dedicated to providing your furry friends with the highest quality of care. We use only the best products and techniques to ensure that your pet&#39;s coat is clean, healthy, and stylish. </p>
      </div>
      <div className="flex gap-5 md:gap-10">
        <div>
          <ul className="flex flex-col gap-5">
            <li> <p className="font-bold">PAGES</p></li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <a href="/about#whatwedo" >Services</a>
            </li>
            <li>
              <Link href="/contact">Contact us</Link>
            </li>
            <li>
              <Link href="/register">Booking</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-5">
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <p>Follow us on</p>
              <ul className="flex gap-4">
                <li>
                  <Link href="/"><Image src={Icons.facebook} width={36} height={36} /></Link>
                </li>
                <li>
                  <Link href="/"><Image src={Icons.instagram} width={36} height={36} /></Link>
                </li>
              </ul>
            </li>
          </ul>
          
         
        </div>
      </div>
    </div>
  )
}

export default Footer