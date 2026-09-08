import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ProductLayout = () => {
    return (
        <div className='bg-white shadow'>
            <div>
                <ul className='flex gap-10 bg-white justify-center py-6'>
                    <li><NavLink to="/admin/product/add" className={({ isActive }) => `hover:bg-[#1c9d36] hover:text-white p-2 rounded shadow ${isActive ? "bg-[#1c9d36] text-white"
                        : "bg-transparent border border-[#1c9d36] text-[#1c9d36]"}`}>Add Product</NavLink></li>
                    <li><NavLink to="/admin/product/edit" className={({ isActive }) => `hover:bg-[#1c9d36] hover:text-white p-2 rounded shadow ${isActive ? "bg-[#1c9d36] text-white"
                        : "bg-transparent border border-[#1c9d36] text-[#1c9d36]"}`}>Edit Product</NavLink></li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default ProductLayout