import AuthProvider from '../context/AuthProvider'
import MainLayout from '../layout/MainLayout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AuthProvider>
    </>
  )
}
