import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Products", path: "/products" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <footer className="bg-[#0f172a] text-gray-300 pt-14 pb-6 px-4">

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* About */}
                <div className="col-span-2">
                    <h2 className="text-xl font-semibold text-white mb-4 ">
                        Medicare System
                    </h2>
                    <p className="text-sm leading-relaxed w-[80%]">
                        Providing trusted medical equipment and technical solutions since 2008.
                        We deliver quality, safety, and innovation for healthcare needs.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Quick Links
                    </h2>

                    <ul className="space-y-2 text-sm">
                        {menuItems.map((item, i) => (
                            <li key={i}>
                                <Link
                                    to={item.path}
                                    className="cursor-pointer hover:text-[#1c9d36] transition"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Contact
                    </h2>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-[#1c9d36]" />
                            +91 9810857534
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-[#1c9d36]" />
                            info@medicaresystem.in
                        </li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Medicare System Inc. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;