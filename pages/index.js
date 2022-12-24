import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='mt-4'>
      <h3 className=' text-2xl text-center'>Hello Coders!</h3>
      <h1 className=' text-4xl text-center'>Welcome to your first Team Project</h1>
    </div>
  )
}
