import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Link, Outlet } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io";

const AdminLayout = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen((prev) => !prev)
    }
    return (
        <>
            <div className='h-screen overflow-hidden relative grid grid-cols-6 bg-linear-to-br from-[#e9f7ef] to-white'>
                <div className=''>
                    <Sidebar />
                </div>
                <div className='col-span-5 min-h-0 flex flex-col'>
                    <div className='flex justify-end mt-5 mr-10 cursor-pointer'>
                        <div className='relative'>
                            <button onClick={handleClick} className='flex gap-3 items-center bg-[#0f172a] p-2 rounded-lg'>
                                <div className='flex justify-center items-center h-10 w-10 rounded-[50%] bg-[#1c9d36] backdrop-blur-2xl'>
                                    <span className='text-xl font-semibold text-white'>A</span>
                                </div>
                                <span className='text-white text-sm'>Admin</span>
                                <div className={`text-xl text-white ${open ? "rotate-180" : ""}`}>
                                    <IoIosArrowDown />
                                </div>
                            </button>
                            <div className={`z-999 absolute top-15 right-0 w-full text-center bg-white shadow
                                transition-all duration-1000 ease-in-out ${open ? "block opacity-100" : "hidden opacity:0"}`}>
                                <Link to="/" className='text-white px-3 py-1 rounded bg-[#1c9d36] my-5 inline-block'>Logout</Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 min-h-0 overflow-y-auto p-10'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout