import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='h-screen bg-[#0f172a] shadow-5xl flex flex-col rounded-r-4xl'>
            <div className='mt-5 ml-2'>
                <img src="/assets/logo2.png" className='h-12 w-18' />
                <p className='text-xs md:text-sm text-[#1c9d36] font-semibold mt-2'>Medicare System</p>
            </div>
            <ul className='pt-10 flex flex-col gap-3 w-[80%]'>
                <li><NavLink to="/admin/dashboard"
                    className={({ isActive }) => `w-full hover:bg-[#1c9d36] text-white px-4 py-2 text-sm lg:text-md
                rounded-r-2xl inline-block ${isActive ? "bg-[#1c9d36]" : "bg-transparent text-black"}`}>Dashboard</NavLink></li>
                <li><NavLink to="/admin/category"
                    className={({ isActive }) => `w-full hover:bg-[#1c9d36] text-white px-4 py-2 text-sm lg:text-md inline-block rounded-r-2xl 
                    ${isActive ? "bg-[#1c9d36]" : "bg-transparent text-black"}`}>Categories</NavLink></li>
                <li><NavLink to="/admin/category"
                    className={({ isActive }) => `w-full hover:bg-[#1c9d36] text-white px-4 py-2 text-sm lg:text-md inline-block rounded-r-2xl 
                   `}>Subcategories</NavLink></li>
                <li><NavLink to="/admin/category"
                    className={({ isActive }) => `w-full hover:bg-[#1c9d36] text-white px-4 py-2 text-sm lg:text-md inline-block rounded-r-2xl 
                   `}>Products</NavLink></li>
            </ul>
        </div>
    )
}

export default Sidebar