import { Lexend } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/util/authContext'
import {  Footer, CalltoAction, DynamicHeader } from '@/components'

const lexend = Lexend({subsets: ['latin']})
export const metadata = {
  title: 'Stylin Tails',
  description: 'The best way to make your pet look and feel its best.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="scroll-smooth" >
      <body className={lexend.className}>
        <AuthProvider>
          <DynamicHeader />
          {children} 
          <CalltoAction />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
