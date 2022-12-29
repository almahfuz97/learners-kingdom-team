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
import { getBooks, getCategories, getMostRatedBooks, getRecentlyAddedBooks } from './api/util/getDataFromDB'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ categories, books, recentlyAdded, mostRatedBooks }) {
  console.log(categories)
  return (
    <div>
      <Head>
        <title>
          Learner's Kingdom
        </title>
      </Head>
      <Banner books={books} />
      <FeaturedCategory categories={categories} />
      <RecentlyAdded recentlyAdded={recentlyAdded} />
      <PopularBooksContainer mostRatedBooks={mostRatedBooks} />
      <Review />
      <Pricing />
      <FAQ />
      <NewsLetter />
    </div>
  )
}

export async function getServerSideProps() {
  const categories = await getCategories();
  const books = await getBooks();
  const recentlyAdded = await getRecentlyAddedBooks();
  const mostRatedBooks = await getMostRatedBooks();
  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
      books: JSON.parse(JSON.stringify(books)),
      recentlyAdded: JSON.parse(JSON.stringify(recentlyAdded)),
      mostRatedBooks: JSON.parse(JSON.stringify(mostRatedBooks)),
    }
  }

}
