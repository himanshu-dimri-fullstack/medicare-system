import { useState } from "react";
import { categories } from "../data/products.js";
import { FaHeartbeat, FaStethoscope, FaProcedures } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import ProductCategoryCard from "../components/ProductCategoryCard.jsx";

const ProductsPage = () => {
    const [openCards, setOpenCards] = useState({});

    const toggle = (index) => {
        setOpenCards((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const icons = [
        <FaHeartbeat />,
        <FaStethoscope />,
        <MdMedicalServices />,
        <FaProcedures />,
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-[#e9f7ef] to-white px-6 md:px-12 lg:px-20 py-12">

            <div className="text-center mb-14">
                <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
                    Our Products
                </h1>
                <div className="w-24 h-1 bg-[#1c9d36] mx-auto mt-4 rounded-full"></div>
                <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                    Delivering advanced medical equipment with precision, reliability, and care.
                </p>
            </div>

            <ProductCategoryCard />

            {/* <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">

                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="break-inside-avoid group bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-[0_10px_30px_rgba(28,157,54,0.2)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1c9d36]/10 text-[#1c9d36] text-xl group-hover:scale-110 transition">
                                {icons[index % icons.length]}
                            </div>

                            <h2 className="text-lg font-semibold text-gray-800 leading-tight">
                                {cat.name}
                            </h2>
                        </div>

                        <button
                            onClick={() => toggle(index)}
                            className="flex items-center gap-2 text-[#1c9d36] font-medium text-sm hover:gap-3 transition-all"
                        >
                            {openCards[index] ? "Hide Products" : "View Products"}

                            <IoChevronDown
                                className={`transition-transform duration-300 ${openCards[index] ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-500 ${openCards[index]
                                ? "max-h-125 mt-4 opacity-100"
                                : "max-h-0 opacity-0"
                                }`}
                        >
                            <ul className="mt-3 space-y-2">
                                {cat.subProducts.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3 text-gray-600 text-sm hover:text-gray-800 transition"
                                    >
                                        <span className="w-2 h-2 bg-[#1c9d36] rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6 h-px bg-linear-to-r from-transparent via-[#1c9d36]/30 to-transparent"></div>
                    </div>
                ))}

            </div> */}
        </div>
    );
};

export default ProductsPage;