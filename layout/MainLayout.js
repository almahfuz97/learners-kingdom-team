import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default function MainLayout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
