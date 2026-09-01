import './App.css'
import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from 'react'
import Fallback from './components/Fallback'
import UserLayout from './components/UserLayout'
const HomePage = lazy(() => import("./pages/HomePage"))
const AboutPage = lazy(() => import("./pages/AboutPage"))
const ContactPage = lazy(() => import("./pages/ContactPage"))
const ProductsPage = lazy(() => import("./pages/ProductPage"))
const ServicePage = lazy(() => import("./pages/ServicePage"))
const ProductDetail = lazy(() => import("./pages/ProductDetail"))
const Dashboard = lazy(() => import("./admin/AdminDashboard"))
const AdminLayout = lazy(() => import("./admin/components/AdminLayout"))
const Layout = lazy(() => import("./admin/category/Layout"))
const Show = lazy(() => import("./admin/category/Show"))
const Edit = lazy(() => import("./admin/category/Edit"))
const Add = lazy(() => import("./admin/category/Add"))

const App = () => {
  return (
    <>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/products/:category/:slug" element={<ProductDetail />} />
          </Route>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route element={<Layout />}>
              <Route path="/admin/category" element={<Show />} />
              <Route path="/admin/category/add" element={<Add />} />
              <Route path="/admin/category/edit" element={<Edit />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App