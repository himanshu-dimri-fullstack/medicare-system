import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io";

const AdminLayout = () => {
    return (
        <>
            <div className='relative grid grid-cols-6 bg-linear-to-br from-[#e9f7ef] to-white'>
                <div>
                    <Sidebar />
                </div>
                <div className='col-span-5'>
                    <div className='flex justify-end mt-5 mr-10 cursor-pointer'>
                        <div className='flex gap-3 items-center bg-[#0f172a] p-2 rounded-lg'>
                            <div className='flex justify-center items-center h-10 w-10 rounded-[50%] bg-[#1c9d36] backdrop-blur-2xl'>
                                <span className='text-xl font-semibold text-white'>A</span>
                            </div>
                            <span className='text-white'>Admin</span>
                            <div className='text-xl text-white'>
                                <IoIosArrowDown />
                            </div>
                        </div>
                    </div>
                    <div className='p-10'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout