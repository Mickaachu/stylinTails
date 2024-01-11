import { Lexend } from 'next/font/google'
import './globals.css'
const lexend = Lexend({subsets: ['latin']})
import { Header, Footer, CalltoAction } from '@/components'

export const metadata = {
  title: 'Stylin Tails',
  description: 'The best way to make your pet look and feel its best.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" >
      <body className={lexend.className}>
        <Header />
        {children}
        <CalltoAction />
        <Footer />
      </body>
    </html>
  )
}
