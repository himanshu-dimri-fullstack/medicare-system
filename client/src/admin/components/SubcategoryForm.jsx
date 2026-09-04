import React from 'react'

const SubcategoryForm = () => {
    return (
        <form className='w-[50%] text-gray-600'>
            <div className='mb-3'>
                <label className='font-semibold'>Choose Category</label>
                <select type='text' className='focus:border-[#1c9d36] outline-none p-1 mt-1 border border-[#ccc] w-full'>
                    <option>Category 1</option>
                    <option>Category 2</option>
                </select>
            </div>
            <div className='mb-3'>
                <label className='font-semibold'>Subcategory Name</label><br />
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
    )
}

export default SubcategoryForm