import { Lexend } from 'next/font/google'
import './globals.css'

const lexend = Lexend({subsets: ['latin']})

export const metadata = {
  title: 'Stylin Tails',
  description: 'The best way to make your pet look and feel its best.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  )
}
