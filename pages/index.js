import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar />
      <NewsLetter></NewsLetter>
      <Footer />
    </div>
  )
}
