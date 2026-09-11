import React from 'react'

const Show = () => {
    return (
        <div>
            <h2 className='text-lg lg:text-2xl font-semibold text-center'>All Products</h2>
            <div className='px-5 overflow-x-auto whitespace-nowrap'>
                <table className='w-full shadow mt-5 text-sm md:text-md lg:text-lg '>
                    <thead className='text-center'>
                        <tr>
                            <th className='p-2 border border-[#ccc]'>Category</th>
                            <th className='p-2 border border-[#ccc]'>Subcategory</th>
                            <th className='p-2 border border-[#ccc]'>Name</th>
                            <th className='p-2 border border-[#ccc]'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr>
                            <td className='px-2 py-1 border border-[#ccc]'>Anaesthesia And OT</td>
                            <td className='px-2 py-1 border border-[#ccc]'>Anaesthesia And OT</td>
                            <td className='px-2 py-1 border border-[#ccc]'>Uniblocker</td>
                            <td className='px-2 py-1 border border-[#ccc]'>
                                <button type="button" className='text-white bg-[#1c9d36] px-3 py-1 rounded'>Edit</button>
                                <button type="button" className='text-white bg-red-500 px-3 py-1 ml-2 rounded'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Show