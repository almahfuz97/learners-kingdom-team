import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar/Navbar'
import RecentlyAdded from '../components/RecentlyAdded/RecentlyAdded'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar />
      <RecentlyAdded />
    </div>
  )
}
