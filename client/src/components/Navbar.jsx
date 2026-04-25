import React from 'react'

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex h-20 items-center'>
                <div className='w-[30%]'>
                    <div>
                        <img src="/assets/logo2.png" className='h-15 w-20' />
                    </div>
                </div>
                <div className='w-[70%]'>
                    <ul className='flex justify-end gap-8 text-lg' style={{ fontFamily: 'Poppins' }}>
                        <li className='hover:bg-[#1c9d36] hover:text-white cursor-pointer p-2 border border-transparent rounded-2xl'>Home</li>
                        <li className='hover:bg-[#1c9d36] hover:text-white cursor-pointer p-2 border border-transparent rounded-2xl'>About Us</li>
                        <li className='hover:bg-[#1c9d36] hover:text-white cursor-pointer p-2 border border-transparent rounded-2xl'>Services</li>
                        <li className='hover:bg-[#1c9d36] hover:text-white cursor-pointer p-2 border border-transparent rounded-2xl'>Products</li>
                        <li className='hover:bg-[#1c9d36] hover:text-white cursor-pointer p-2 border border-transparent rounded-2xl'>Contact Us</li>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar