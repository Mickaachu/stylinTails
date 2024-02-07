'use client'
import { Header, DashboardHeader } from '.'
import { usePathname } from 'next/navigation'
function DynamicHeader() {
    const pathname = usePathname()

    if(pathname === '/dashboard') {
        return <DashboardHeader/>
    }
    return <Header/>
 
}

export default DynamicHeader