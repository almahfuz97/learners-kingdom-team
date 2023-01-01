import AuthProvider from '../context/AuthProvider'
import CartProvider from '../context/CartProvider'
import MainLayout from '../layout/MainLayout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </CartProvider>
      </AuthProvider>
    </>
  )
}
