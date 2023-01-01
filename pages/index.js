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
import { getBooks, getCategories, getMostRatedBooks, getMostSoldBooks, getRecentlyAddedBooks, getReviews } from './api/util/getDataFromDB'
import GiftBook from '../components/GiftBook/GiftBook'
import Statistics from '../components/Statistics/Statistics'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre'
import dynamic from 'next/dynamic'
import Loading from '../components/Loader/Loading'

const inter = Inter({ subsets: ['latin'] })

const DynamicFeatured = dynamic(() => import('../components/FeaturedCategory/FeaturedCategory'), { loading: () => <div className='flex justify-center my-6'><Loading /></div>, ssr: false })

const DynamicRecentlyAdded = dynamic(() => import('../components/RecentlyAdded/RecentlyAdded'), { loading: () => '', ssr: false })

const DynamicPopularBooks = dynamic(() => import('../components/PopularBooks/PopularBooksContainer'), { loading: () => '', ssr: false })

const DynamicReview = dynamic(() => import('../components/Review/Review'), { loading: () => <div className='flex justify-center my-6'><Loading /></div>, ssr: false })




export default function Home({ categories, books, recentlyAdded, mostRatedBooks, mostSoldBooks, reviews }) {
  return (
    <div>
      <Head>
        <title>
          Learner's Kingdom
        </title>
      </Head>
      <Banner books={books} />
      {/* <DynamicBanner book={books} /> */}
      {/* <FeaturedCategory categories={categories} /> */}

      <DynamicFeatured categories={categories} />
      {/* <RecentlyAdded recentlyAdded={recentlyAdded} /> */}
      <DynamicRecentlyAdded recentlyAdded={recentlyAdded} />

      <GiftBook></GiftBook>
      {/* <PopularBooksContainer mostRatedBooks={mostRatedBooks} mostSoldBooks={mostSoldBooks} />
       */}
      <DynamicPopularBooks mostRatedBooks={mostRatedBooks} mostSoldBooks={mostSoldBooks} />
      <WhoWeAre></WhoWeAre>
      {/* <Review reviews={reviews} /> */}
      <DynamicReview reviews={reviews} />
      <Statistics></Statistics>
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
  const mostSoldBooks = await getMostSoldBooks();
  const reviews = await getReviews();
  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
      books: JSON.parse(JSON.stringify(books)),
      recentlyAdded: JSON.parse(JSON.stringify(recentlyAdded)),
      mostRatedBooks: JSON.parse(JSON.stringify(mostRatedBooks)),
      mostSoldBooks: JSON.parse(JSON.stringify(mostSoldBooks)),
      reviews: JSON.parse(JSON.stringify(reviews)),
    }
  }

}
