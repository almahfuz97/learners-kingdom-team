import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import RecentlyAdded from '../components/RecentlyAdded/RecentlyAdded'
import Pricing from '../components/Pricing/Pricing'
import Review from '../components/Review/Review'
import PopularBooksContainer from '../components/PopularBooks/PopularBooksContainer'
import FAQ from '../components/FAQ/FAQ'
import FeaturedCategory from '../components/FeaturedCategory/FeaturedCategory'
import getCategory from '../util/getCategory'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ categories }) {
  return (
    <div>
      <Head>
        <title>
          Learner's Kingdom
        </title>
      </Head>
      <Banner />
      <FeaturedCategory categories={categories} />
      <RecentlyAdded />
      <PopularBooksContainer />
      <Review />
      <Pricing />
      <FAQ />
      <NewsLetter />
    </div>
  )
}


export async function getServerSideProps() {
  return getCategory();
}
