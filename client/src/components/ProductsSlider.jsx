import React, { useState, useEffect, useRef } from "react";
import { categories } from "../data/products";

const ProductSlider = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const trackRef = useRef(null);

    const sliderData = [...categories, ...categories];

    useEffect(() => {
        if (!trackRef.current) return;

        if (selectedCategory) {
            document.body.style.overflow = "hidden";
            trackRef.current.style.animationPlayState = "paused";
        } else {
            document.body.style.overflow = "auto";
            trackRef.current.style.animationPlayState = "running";
        }
    }, [selectedCategory]);

    return (
        <>
            <div className="overflow-hidden py-10">
                <div
                    ref={trackRef}
                    className="flex gap-6 w-max marquee-track"
                    onMouseEnter={() =>
                        (trackRef.current.style.animationPlayState = "paused")
                    }
                    onMouseLeave={() => {
                        if (!selectedCategory)
                            trackRef.current.style.animationPlayState = "running";
                    }}
                >
                    {sliderData.map((cat, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedCategory(cat)}
                            className="w-65 shrink-0 bg-white rounded-2xl shadow-md cursor-pointer transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="w-full flex justify-center">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="h-20 w-20 object-contain rounded-t-2xl"
                                />
                            </div>

                            <h3 className="text-center text-sm sm:text-md font-semibold py-3">
                                {cat.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCategory && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md px-4">
                    <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-6 relative animate-fadeIn">

                        <button
                            onClick={() => setSelectedCategory(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold text-[#1c9d36] mb-2">
                            {selectedCategory.name}
                        </h2>

                        <div className="h-1 w-16 bg-[#1c9d36] mb-4 rounded-full"></div>

                        <div className="grid grid-cols-2 gap-3 max-h-75 overflow-y-auto">
                            {selectedCategory.subProducts.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-50 hover:bg-[#1c9d36]/10 border border-gray-200 rounded-xl px-3 py-2 text-sm transition cursor-pointer"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        <button className="mt-6 w-full bg-[#1c9d36] hover:bg-[#15852c] text-white py-3 rounded-xl font-semibold transition">
                            Explore Category
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductSlider;