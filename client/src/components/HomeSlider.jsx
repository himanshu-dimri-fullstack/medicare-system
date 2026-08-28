import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";


const HomeSlider = () => {

    const [state, setState] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const data = [
        { id: 1, src: "/assets/SLIDER-IMAGES/slider-4.webp" },
        { id: 2, src: "/assets/SLIDER-IMAGES/slider1.jpg" },
        { id: 3, src: "/assets/SLIDER-IMAGES/slider2.png" },
        { id: 4, src: "/assets/SLIDER-IMAGES/slider-3.webp" },
    ]

    const handlePrev = () => {
        setState((prev) => prev === 0 ? data.length - 1 : prev - 1)
    }

    const handleNext = () => {
        setState((prev) => prev === data.length - 1 ? 0 : prev + 1)
    }

    useEffect(() => {
        if (isHovered) return
        const interval = setInterval(() => {
            setState((prev) => prev === data.length - 1 ? 0 : prev + 1)
        }, 3000)
        return () => clearInterval(interval)
    }, [isHovered])


    return (

        <div className="max-w-7xl mx-auto relative overflow-hidden" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className={`flex border-[#eee] transition-transform duration-500 ease-in-out`}
                style={{ transform: `translateX(-${state * 100}%)` }}>
                {
                    data.map((item) => {
                        return (
                            <div key={item.id} className="w-full shrink-0">
                                <img src={item.src} className="w-full h-60 sm:h-75 md:h-120 object-fill object-[center_20%] border-[#eee]" />
                            </div>
                        )
                    })
                }

            </div>

            <div className="absolute top-[50%] -translate-y-1/2 left-[1%] z-10">
                <button
                    onClick={handlePrev}
                    className="p-2 rounded-full border border-[#1c9d36] bg-[#1c9d36] text-white hover:bg-transparent hover:text-[#1c9d36] transition-colors duration-300 flex items-center justify-center"
                >
                    <FaAngleLeft />
                </button>
            </div>

            <div className="absolute top-[50%] -translate-y-1/2 right-[1%] z-10">
                <button
                    onClick={handleNext}
                    className="p-2 rounded-full border border-[#1c9d36] bg-[#1c9d36] text-white hover:bg-transparent hover:text-[#1c9d36] transition-colors duration-300 flex items-center justify-center"
                >
                    <FaAngleRight />
                </button>
            </div>



            {/* <Slider {...settings}>
                <div className="w-full border-[#eee]">
                    <img src="/assets/SLIDER-IMAGES/slider-4.webp" className="w-full h-60 sm:h-75 md:h-120 object-fill object-[center_20%] border-[#eee]" />
                </div>
                <div className="w-full border-[#eee]">
                    <img src="/assets/SLIDER-IMAGES/slider1.jpg" className="w-full h-60 sm:h-75 md:h-120 object-fill object-[center_20%]  border-[#eee]" />
                </div>
                <div className="w-full border-[#eee]">
                    <img src="/assets/SLIDER-IMAGES/slider2.png" className="w-full h-60 sm:h-75 md:h-120 object-fill object-[center_20%] border-[#eee]" />
                </div>
                <div className="w-full border-[#eee]">
                    <img src="/assets/SLIDER-IMAGES/slider-3.webp" className="w-full h-60 sm:h-75 md:h-120 object-fill object-[center_20%] border-[#eee]" />
                </div>
            </Slider> */}

        </div>

    )
}

export default HomeSlider