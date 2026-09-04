import './App.css'
import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from 'react'
import Fallback from './components/Fallback'
import UserLayout from './components/UserLayout'
import SubcategoryLayout from './admin/subcategory/SubcategoryLayout'
const HomePage = lazy(() => import("./pages/HomePage"))
const AboutPage = lazy(() => import("./pages/AboutPage"))
const ContactPage = lazy(() => import("./pages/ContactPage"))
const ProductsPage = lazy(() => import("./pages/ProductPage"))
const ServicePage = lazy(() => import("./pages/ServicePage"))
const ProductDetail = lazy(() => import("./pages/ProductDetail"))
const Dashboard = lazy(() => import("./admin/AdminDashboard"))
const AdminLayout = lazy(() => import("./admin/components/AdminLayout"))
const CategoryLayout = lazy(() => import("./admin/category/CategoryLayout"))
const CategoryShow = lazy(() => import("./admin/category/Show"))
const CategoryEdit = lazy(() => import("./admin/category/Edit"))
const CategoryAdd = lazy(() => import("./admin/category/Add"))
const SubcategoryShow = lazy(() => import("./admin/subcategory/Show"))
const SubcategoryAdd = lazy(() => import("./admin/subcategory/Edit"))
const SubcategoryEdit = lazy(() => import("./admin/subcategory/Add"))

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
            <Route element={<CategoryLayout />}>
              <Route path="/admin/category" element={<CategoryShow />} />
              <Route path="/admin/category/add" element={<CategoryAdd />} />
              <Route path="/admin/category/edit" element={<CategoryEdit />} />
            </Route>
            <Route element={<SubcategoryLayout />}>
              <Route path="/admin/subcategory" element={<SubcategoryShow />} />
              <Route path="/admin/subcategory/add" element={<SubcategoryAdd />} />
              <Route path="/admin/subcategory/edit" element={<SubcategoryEdit />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App