import AuthProvider from '../context/AuthProvider'
import CartProvider from '../context/CartProvider'
import MainLayout from '../layout/MainLayout'
import '../styles/globals.css'
import dynamic from 'next/dynamic'

// const DynamicIndex = dynamic(() => import('../pages/index'))

export default function App({ Component, pageProps }) {
  return (
    <div className='overflow-x-hidden'>
      <AuthProvider>
        <CartProvider>
          <MainLayout>
            {
              Component.PageLayout ? (
                <Component.PageLayout>
                  <Component {...pageProps} />
                </Component.PageLayout>
              ) : (
                <Component {...pageProps} />
              )
            }

          </MainLayout>
        </CartProvider>
      </AuthProvider>
    </div>
  )
}
