import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("Home"); // ✅ active state

    const menuItems = ["Home", "About Us", "Services", "Products", "Contact Us"];

    return (
        <div className="w-full shadow-sm bg-white">
            <div className="max-w-7xl mx-auto px-4">

                <div className="flex h-20 items-center justify-between">

                    <div>
                        <img src="/assets/logo2.png" className="h-12 w-auto" />
                        <span className="text-sm text-[#1c9d36] font-semibold mb-8">
                            Medicare {" "}
                            <span className="text-black">System Inc.</span>
                        </span>
                    </div>

                    <ul
                        className="hidden md:flex gap-2 lg:gap-6 text-lg font-medium"
                        style={{ fontFamily: "Poppins" }}
                    >
                        {menuItems.map((item, i) => (
                            <li
                                key={i}
                                onClick={() => setActive(item)}
                                className={`px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 
                  ${active === item
                                        ? "bg-[#1c9d36] text-white"
                                        : "hover:bg-[#1c9d36] hover:text-white"
                                    }`}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-2xl"
                        >
                            {open ? "✕" : "☰"}
                        </button>
                    </div>
                </div>

                {open && (
                    <div className="md:hidden pb-4">
                        <ul
                            className="flex flex-col gap-3 text-lg font-medium"
                            style={{ fontFamily: "Poppins" }}
                        >
                            {menuItems.map((item, i) => (
                                <li
                                    key={i}
                                    onClick={() => {
                                        setActive(item);
                                        setOpen(false);
                                    }}
                                    className={`px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 
                    ${active === item
                                            ? "bg-[#1c9d36] text-white"
                                            : "hover:bg-[#1c9d36] hover:text-white"
                                        }`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Navbar;