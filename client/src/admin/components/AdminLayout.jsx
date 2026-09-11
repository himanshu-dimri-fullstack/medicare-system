import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Link, Outlet } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const AdminLayout = () => {

    const [open, setOpen] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)

    const handleClick = () => {
        setOpen((prev) => !prev)
    }
    const handleMenuClick = () => {
        setOpenMenu((prev) => !prev)
    }
    return (
        <>
            <div className='h-screen overflow-hidden relative grid grid-cols-1 md:grid-cols-6 bg-linear-to-br from-[#e9f7ef] to-white'>
                <div className='hidden md:block'>
                    <Sidebar />
                </div>
                <div className='md:col-span-5 min-h-0 flex flex-col px-5 md:px-10'>
                    <div className='flex justify-between md:justify-end my-3 cursor-pointer'>
                        <button onClick={handleMenuClick} className='block md:hidden text-2xl'>
                            <GiHamburgerMenu />
                        </button>
                        <div className='relative'>
                            <button onClick={handleClick} className='flex gap-2 md:gap-3 items-center bg-[#0f172a] p-2 rounded-lg'>
                                <div className='flex justify-center items-center h-8 w-8 md:h-10 md:w-10 rounded-[50%] bg-[#1c9d36] backdrop-blur-2xl'>
                                    <span className='text-lg md:text-xl font-semibold text-white'>A</span>
                                </div>
                                <span className='text-white text-sm'>Admin</span>
                                <div className={`text-lg md:text-xl text-white ${open ? "rotate-180" : ""}`}>
                                    <IoIosArrowDown />
                                </div>
                            </button>
                            <div className={`z-999 absolute top-15 right-0 w-full text-center bg-white shadow
                                transition-all duration-1000 ease-in-out ${open ? "block opacity-100" : "hidden opacity:0"}`}>
                                <Link to="/" className='text-white px-3 py-1 rounded bg-[#1c9d36] my-5 inline-block'>Logout</Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 overflow-y-auto pb-10'>
                        <Outlet />
                    </div>
                </div>

                {
                    openMenu && <div className='absolute top-0 left-0 w-full'>
                        <div className='flex justify-between w-full'>
                            <div className='w-[40%]'>
                                <Sidebar handleMenuClick={handleMenuClick} setOpenMenu={setOpenMenu} />
                            </div>
                            <div className='w-[60%] bg-[#0f172a]/10 backdrop-blur-xl text-end'>
                                <button onClick={handleMenuClick} className='text-2xl text-white bg-[#1c9d36] rounded-[50%] p-2 mt-5 mr-5'>
                                    <IoMdClose />
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default AdminLayout