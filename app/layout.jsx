import './globals.css'
import Navbar from './Navbar'

import { Poppins } from 'next/font/google'
const font = Poppins({ subsets: ['latin'], weight: ['400','500','600'] })

export const metadata = {
  title: 'Iosif-Ioan',
  description: 'Personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id='root' className={font.className}>
          {children}
          <Navbar/>
        </div>
      </body>
    </html>
  )
}
