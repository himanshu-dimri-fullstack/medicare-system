import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Products", path: "/products" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <div className="w-full sticky top-0 z-50 bg-white shadow-sm">

            <div className="max-w-7xl mx-auto px-4">

                <div className="flex h-20 items-center justify-between">

                    <Link to="/" className="flex flex-col cursor-pointer">
                        <img src="/assets/logo2.png" className="h-12 w-16" />
                        <span className="text-sm text-[#1c9d36] font-semibold">
                            Medicare <span className="text-black">System Inc.</span>
                        </span>
                    </Link>

                    <ul className="hidden md:flex gap-2 lg:gap-6 text-lg font-medium">
                        {menuItems.map((item, i) => (
                            <NavLink
                                key={i}
                                to={item.path}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-xl transition-all duration-300 
                                    ${isActive
                                        ? "bg-[#1c9d36] text-white"
                                        : "hover:bg-[#1c9d36] hover:text-white"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </ul>

                    <div className="md:hidden">
                        <button onClick={() => setOpen(!open)} className="text-2xl">
                            {open ? "✕" : "☰"}
                        </button>
                    </div>

                </div>

                {open && (
                    <div className="md:hidden pb-4 bg-white">
                        <ul className="flex flex-col gap-3 text-lg font-medium">
                            {menuItems.map((item, i) => (
                                <NavLink
                                    key={i}
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded-xl transition-all duration-300 
                                        ${isActive
                                            ? "bg-[#1c9d36] text-white"
                                            : "hover:bg-[#1c9d36] hover:text-white"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Navbar;