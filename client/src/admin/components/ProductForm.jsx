import React, { useState } from 'react'

const ProductForm = () => {

    const [highlights, setHighlights] = useState([""])
    const [information, setinformation] = useState([""])
    const [benefits, setbenefits] = useState([""])
    const [specifications, setSpecifications] = useState([""])

    const handleHighlights = () => {
        setHighlights((prev) => [...prev, ""])
    }

    const handleInformation = () => {
        setinformation((prev) => [...prev, ""])
    }

    const handleBenefits = () => {
        setbenefits((prev) => [...prev, ""])
    }

    const handleSpecifications = () => {
        setSpecifications((prev) => [...prev, ""])
    }
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
                <label className='font-semibold'>Choose Subcategory</label>
                <select type='text' className='focus:border-[#1c9d36] outline-none p-1 mt-1 border border-[#ccc] w-full'>
                    <option>Subcategory 1</option>
                    <option>Subcategory 2</option>
                </select>
            </div>

            <div className='mb-3'>
                <label className='font-semibold'>Product Name</label><br />
                <input type='text' className='focus:border-[#1c9d36] outline-none p-1 mt-1 border border-[#ccc] w-full' />
            </div>

            <div className='mb-3'>
                <label className='font-semibold'>Short Detail</label><br />
                <textarea className='p-1 mt-1 border border-[#ccc] w-full focus:border-[#1c9d36] outline-none'></textarea>
            </div>

            <div className='mb-3'>
                <label className='font-semibold'>Complete Detail</label><br />
                <textarea className='p-1 mt-1 border border-[#ccc] w-full focus:border-[#1c9d36] outline-none'></textarea>
            </div>

            <div className='mb-4'>
                <label className='font-semibold'>Key Highlights</label>
                <button onClick={handleHighlights} type="button" className='bg-[#1c9d36] text-white px-2 ml-3'>+</button>
                {
                    highlights.map((_, i) => {
                        return (
                            <div key={i}>
                                <input type='text' className='focus:border-[#1c9d36] outline-none p-1 mt-2 border border-[#ccc] w-full' />
                            </div>
                        )
                    })
                }
            </div>

            <div className='mb-4'>
                <label className='font-semibold'>Key Information</label>
                <button onClick={handleInformation} type="button" className='bg-[#1c9d36] text-white px-2 ml-3'>+</button>

                {
                    information.map((_, i) => {
                        return (
                            <div key={i} className='mt-2'>
                                <div>
                                    <span className='text-[#1c9d36] text-sm font-semibold'>Head</span>
                                    <input type='text' className='focus:border-[#1c9d36] outline-none p-1 my-1 border border-[#ccc] w-full' />
                                </div>
                                <div className=''>
                                    <span className='text-[#1c9d36] text-sm font-semibold'>Content</span>
                                    <input type='text' className='focus:border-[#1c9d36] outline-none p-1 mt-1 border border-[#ccc] w-full' />
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            <div className='mb-4'>
                <label className='font-semibold'>Key Benefits</label>
                <button onClick={handleBenefits} type="button" className='bg-[#1c9d36] text-white px-2 ml-3'>+</button>

                {
                    benefits.map((_, i) => {
                        return (
                            <div key={i} className='mt-2'>
                                <div>
                                    <span className='text-[#1c9d36] text-sm font-semibold'>Head</span>
                                    <input type='text' className='focus:border-[#1c9d36] outline-none p-1 my-1 border border-[#ccc] w-full' />
                                </div>
                                <div className=''>
                                    <span className='text-[#1c9d36] text-sm font-semibold'>Content</span>
                                    <input type='text' className='focus:border-[#1c9d36] outline-none p-1 mt-1 border border-[#ccc] w-full' />
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            <div className='mb-4'>
                <label className='font-semibold'>Specifications</label>
                <button onClick={handleSpecifications} type="button" className='bg-[#1c9d36] text-white px-2 ml-3'>+</button>
                {
                    specifications.map((_, i) => {
                        return (
                            <div className='mt-2'>
                                <div>
                                    <span className='text-[#1c9d36] text-sm font-semibold'>Head</span>
                                    <input type='text' className='focus:border-[#1c9d36] outline-none p-1 my-1 border border-[#ccc] w-full' />
                                </div>
                                <div className=''>
                                    <span className='text-[#1c9d36] text-sm font-semibold'>Content</span>
                                    <input type='text' className='focus:border-[#1c9d36] outline-none p-1 mt-1 border border-[#ccc] w-full' />
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            <div className='mb-3'>
                <label className='font-semibold'>Brochure</label><br />
                <input type='file' className='focus:border-[#1c9d36] outline-none p-1 mt-1 border border-[#ccc] w-full' />
            </div>

            <div className='mb-3'>
                <label className='font-semibold'>Thumbnail</label><br />
                <input type='file' className='focus:border-[#1c9d36] outline-none p-1 mt-1 border border-[#ccc] w-full' />
            </div>

            <div className='mb-3'>
                <label className='font-semibold'>Images</label><br />
                <input type='file' className='focus:border-[#1c9d36] outline-none p-1 mt-1 border border-[#ccc] w-full' />
            </div>

            <div>
                <button className='focus:border-[#1c9d36] outline-none bg-[#1c9d36] rounded text-white px-5 py-1'>Submit</button>
            </div>
        </form>
    )
}

export default ProductForm