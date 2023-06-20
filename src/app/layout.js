import Navbar from '@/components/utilities/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/utilities/Footer'
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
