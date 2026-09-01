import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='bg-white min-h-[50vh] shadow'>
            <div>
                <ul className='flex gap-10 bg-white justify-center py-6'>
                    <li><NavLink to="/admin/category/add" className={({ isActive }) => `hover:bg-[#1c9d36] hover:text-white p-2 rounded shadow ${isActive ? "bg-[#1c9d36] text-white"
                        : "bg-transparent border border-[#ddd] text-[#1c9d36]"}`}>Add Category</NavLink></li>
                    <li><NavLink to="/admin/category/edit" className={({ isActive }) => `hover:bg-[#1c9d36] hover:text-white p-2 rounded shadow ${isActive ? "bg-[#1c9d36] text-white"
                        : "bg-transparent border border-[#ddd] text-[#1c9d36]"}`}>Edit Category</NavLink></li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout