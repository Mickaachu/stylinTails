'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useAuthContextProvider } from "@/util/hooks/useAuthContextProvider"
import { Icons } from "@/constants"
import { useLogout } from "@/util/hooks/useLogout"
function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const {user} = useAuthContextProvider()
    const {logout} = useLogout()
    const handleMenu = () => {
        setShowMenu(!showMenu)
    }
    const closeMenu = () => {
        setShowMenu(false)
    }
    const handleLogout = () => {
        setShowMenu(!showMenu)
        logout()
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
                        <Link onClick={closeMenu}  href="/">Home</Link>
                        <Link onClick={closeMenu}   href="/about">About</Link>
                        <Link onClick={closeMenu}  href="/contact">Contact</Link>
                        {!user &&  <Link onClick={closeMenu}  href="/register" className="bg-[#CD53EC] py-2 px-8 rounded-full">Signup Now</Link>}
                        {user &&  <Link onClick={closeMenu}  href="/dashboard">Dashboard</Link>}
                        {user &&  <button onClick={handleLogout}>Log out</button>}
                    </div>
                </div>
                )}  
            </div>
          
                <div className="hidden md:flex justify-center items-center gap-5 lg:gap-10 ">
                    <Link onClick={closeMenu}  href="/">Home</Link>
                    <Link onClick={closeMenu}  href="/about">About</Link>
                    <Link href="/contact" onClick={closeMenu}  >Contact</Link>
                    { !user &&  <Link href="/register" className="bg-[#CD53EC] py-2 px-8 rounded-full" onClick={closeMenu}  >Signup Now</Link>}
                    {user &&  <Link onClick={closeMenu}  href="/dashboard">Dashboard</Link>}
                    {user &&  <button onClick={handleLogout}>Log out</button>}
                </div>
            
        </div>
    </header>
  )
}

export default Header