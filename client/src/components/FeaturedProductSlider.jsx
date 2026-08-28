import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { data } from "../data/featuredProductsData.js";
import { Link } from 'react-router-dom';
console.log(data)

const FeaturedProductSlider = () => {
    const [state, setState] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const handlePrev = () => {
        setState((prev) => prev === 0 ? data.length - 4 : prev - 1)
    }

    const handleNext = () => {
        setState((prev) => prev === data.length - 4 ? 0 : prev + 1)
    }


    useEffect(() => {
        if (isHovered) return
        const interval = setInterval(() => {
            setState((prev) => prev === data.length - 4 ? 0 : prev + 1)
        }, 3000)
        return () => clearInterval(interval)
    }, [isHovered])

    return (
        <div className="max-w-7xl mx-auto relative overflow-hidden" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className="flex transition-transform duration-500 ease-in-out gap-1"
                style={{ transform: `translateX(-${state * 25}%)` }}>
                {
                    data.map((item) => {
                        return (
                            <Link to="/products/anaesthesia/uniblocker" key={item.id} className='w-[25%] shrink-0 cursor-pointer group bg-white hover:bg-[#1c9d36] hover:text-white rounded shadow 
                             hover:shadow-[0_4px_15px_rgba(28,157,54,0.35)] p-4'>
                                <div className='flex justify-center'>
                                    <img src={item.image} className='h-25 md:h-30 lg:h-40' />
                                </div>
                                <h3 className='text-xl text-center mt-4 mb-2 lg:h-15'>{item.name}</h3>
                                <p className="text-gray-600 group-hover:text-white text-sm sm:text-base leading-relaxed">{item.desc}</p>
                            </Link>)
                    })
                }
            </div>

            <div className="absolute top-[50%] -translate-y-1/2 left-[1%] z-10">
                <button
                    onClick={handlePrev}
                    className="p-2 rounded-full border border-[#222] bg-[#222] text-white hover:bg-transparent hover:text-[#222] transition-colors duration-300 flex items-center justify-center"
                >
                    <FaAngleLeft />
                </button>
            </div>

            <div className="absolute top-[50%] -translate-y-1/2 right-[1%] z-10">
                <button
                    onClick={handleNext}
                    className="p-2 rounded-full border border-[#222] bg-[#222] text-white hover:bg-transparent hover:text-[#222] transition-colors duration-300 flex items-center justify-center"
                >
                    <FaAngleRight />
                </button>
            </div>

        </div>

    )
}

export default FeaturedProductSlider