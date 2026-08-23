import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { Routes, Route } from "react-router-dom"
// import HomePage from './pages/HomePage'
// import AboutPage from './pages/AboutPage'
// import ContactPage from './pages/ContactPage'
// import ProductsPage from './pages/ProductPage'
// import ServicePage from './pages/ServicePage'
// import ProductDetail from './pages/ProductDetail'
import CommonIcons from './components/CommonIcons'
import { lazy, Suspense } from 'react'
import Fallback from './components/Fallback'
const HomePage = lazy(() => import("./pages/HomePage"))
const AboutPage = lazy(() => import("./pages/AboutPage"))
const ContactPage = lazy(() => import("./pages/ContactPage"))
const ProductsPage = lazy(() => import("./pages/ProductPage"))
const ServicePage = lazy(() => import("./pages/ServicePage"))
const ProductDetail = lazy(() => import("./pages/ProductDetail"))

const App = () => {
  return (
    <>

      <ScrollToTop />
      <Navbar />
      <CommonIcons />

      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/products/anaesthesia/uniblocker" element={<ProductDetail />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  )
}

export default App