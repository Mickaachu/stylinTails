'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Icons } from "@/constants"

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

  return (
    <header className="pt-2 px-4 fixed w-full bg-white z-50 ">
        <div className="flex justify-between items-center w-full">
            <Link href="/"><Image src={Icons.logo} alt="stylin tails"/></Link>
            <div className="block md:hidden">
                <button onClick={handleMenu}>
                    <Image src={Icons.menu}/>
                </button>
                {showMenu && (
                    <div className="absolute top-0 h-screen bottom-0 left-0 right-0 bg-white p-5 ">
                    <div className="flex justify-end">
                        <button onClick={handleMenu} >
                            <Image src={Icons.close} width={36} height={36}/>
                        </button>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-32 gap-5">
                        <Link href="/">Home</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                        <Link href="/" className="bg-[#CD53EC] py-2 px-8 rounded-full">Signup Now</Link>
                    </div>
                </div>
                )}
            </div>
            <div className="hidden md:flex justify-center items-center gap-5 lg:gap-10 ">
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/register" className="bg-[#CD53EC] py-2 px-8 rounded-full">Signup Now</Link>
            </div>
        </div>
    </header>
  )
}

export default Header