import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";

const ImageSlider = () => {
    const [state, setState] = useState(0);
    const [isHovered, setIsHovered] = useState(false)

    const data = [
        { id: 1, src: "/assets/product-detail-images/uniblocker/uniblocker-3.jpeg" },
        { id: 2, src: "/assets/product-detail-images/uniblocker/uniblocker-2.jpeg" },
        { id: 3, src: "/assets/product-detail-images/uniblocker/uniblocker-4.jpeg" },
        { id: 4, src: "/assets/product-detail-images/uniblocker/uniblocker-5.png" },
        { id: 5, src: "/assets/product-detail-images/uniblocker/uniblocker-6.png" },
    ];

    const handlePrev = () => {
        setState((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setState((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setState((prev) => prev === data.length - 1 ? 0 : prev + 1)
        }, 3000)
        return () => clearInterval(interval)
    }, [isHovered])

    return (

        <div className="relative w-[50%] md:w-full overflow-hidden rounded-lg"
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

            <div className="w-full border-[#eee]">

                <div
                    className="flex transition-transform duration-500 ease-out-in"
                    style={{ transform: `translateX(-${state * 100}%)` }}
                >
                    {data.map((item) => (
                        <div key={item.id} className="w-full shrink-0">
                            <img
                                src={item.src}
                                alt={`Slide ${item.id}`}
                                className="w-full h-60 sm:h-80 md:h-120"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-[50%] -translate-y-1/2 left-[3%] z-10">
                <button
                    onClick={handlePrev}
                    className="p-2 rounded-full border border-[#1c9d36] bg-[#1c9d36] text-white hover:bg-transparent hover:text-[#1c9d36] transition-colors duration-300 flex items-center justify-center"
                >
                    <FaAngleLeft />
                </button>
            </div>

            <div className="absolute top-[50%] -translate-y-1/2 right-[3%] z-10">
                <button
                    onClick={handleNext}
                    className="p-2 rounded-full border border-[#1c9d36] bg-[#1c9d36] text-white hover:bg-transparent hover:text-[#1c9d36] transition-colors duration-300 flex items-center justify-center"
                >
                    <FaAngleRight />
                </button>
            </div>

            <div className="absolute top-[3%] left-[3%]">
                <button className="hover:bg-[#1c9d36] hover:text-white flex gap-2 items-center border border-[#1c9d36] text-[#1c9d36] bg-white rounded-2xl px-3 py-1"><FaDownload /> <span>Product Brochure</span></button>
            </div>
        </div>
    );
};

export default ImageSlider;
