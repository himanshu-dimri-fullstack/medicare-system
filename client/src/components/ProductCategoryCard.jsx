import React from 'react'
import { categories } from "../data/products"

const ProductCategoryCard = () => {
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-8'>
                {
                    categories.map((item) => {
                        return (
                            <div key={item.name} className='cursor-pointer group bg-white hover:bg-[#1c9d36] hover:text-white rounded shadow  hover:shadow-[0_4px_15px_rgba(28,157,54,0.35)] p-4'>
                                <div className='flex justify-center'>
                                    <img src={item.image} className='object-contain h-25 w-full md:h-30 lg:h-40 rounded-lg' />
                                </div>
                                <h3 className='text-xl text-center mt-4 mb-2 lg:h-15'>{item.name}</h3>
                                <p className="text-gray-600 group-hover:text-white text-sm sm:text-base leading-relaxed">{item.shortDesc}</p>
                            </div>)
                    })
                }
            </div>
        </div>
    )
}

export default ProductCategoryCard