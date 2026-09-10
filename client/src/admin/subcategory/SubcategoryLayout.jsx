import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const SubcategoryLayout = () => {
    return (
        <div className='bg-white shadow h-full overflow-hidden flex flex-col'>
            <div>
                <ul className='flex bg-white py-6'>
                    <li><NavLink to="/admin/subcategory/add" className={({ isActive }) => `ml-5 hover:bg-[#1c9d36] hover:text-white p-2 rounded shadow ${isActive ? "bg-[#1c9d36] text-white"
                        : "bg-transparent border border-[#1c9d36] text-[#1c9d36]"}`}>Add Subcategory</NavLink></li>
                </ul>
            </div>
            <div className='flex-1 overflow-y-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default SubcategoryLayout