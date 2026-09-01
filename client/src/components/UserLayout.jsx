import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import CommonIcons from './CommonIcons'

const UserLayout = () => {
    return (
        <>
            <ScrollToTop />
            <CommonIcons />
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default UserLayout