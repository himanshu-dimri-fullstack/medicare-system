import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-[#0f172a] h-[10vh] w-screen flex justify-between items-center px-6'>
            <div>
                <img src="/assets/logo2.png" className='h-10 w-15' />
            </div>
            <div>
                <p className='text-white'>Admin</p>
            </div>
        </div>
    )
}

export default Navbar