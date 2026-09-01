import React from 'react'

const Add = () => {
    return (
        <div className='flex justify-center py-20'>
            <form className='w-[50%]'>
                <div className='mb-3'>
                    <label className='font-semibold'>Category Name</label><br />
                    <input type='text' className='focus:border-[#1c9d36] outline-none p-1 mt-1 border border-[#ccc] w-full' />
                </div>
                <div className='mb-3'>
                    <label className='font-semibold'>Add Image</label><br />
                    <input type="file" className='p-1 mt-1 border border-[#ccc] w-full' />
                </div>
                <div>
                    <button className='focus:border-[#1c9d36] outline-none bg-[#1c9d36] rounded text-white px-5 py-1'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Add