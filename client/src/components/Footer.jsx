import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaFax } from "react-icons/fa";


const Footer = () => {

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Products", path: "/products" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <footer className="bg-[#0f172a] text-gray-300 pt-6 pb-4 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* About */}
                <div className="col-span-2">
                    <h2 className="text-xl font-semibold text-white mb-4 ">
                        Medicare System
                    </h2>
                    <p className="text-sm leading-relaxed w-[80%]">
                        Providing trusted medical equipment and healthcare solutions since 2008, we serve hospitals, clinics, and healthcare professionals with reliable products and technical support. We are committed to delivering quality medical equipment, dependable service, safety, and innovative healthcare solutions.
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
                            +91-11-41104977
                        </li>
                    </ul>
                    <div className="space-y-2 text-sm mt-4">
                        <h6 className="text-md font-semibold">Office Address</h6>
                        <p className="w-[80%]">704, 7th Floor, Kirti Shikhar Tower District Centre, Janakpuri</p>
                        <p>New Delhi-110058</p>
                        <p>India</p>
                    </div>
                </div>

            </div>
            <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
                <p> © {new Date().getFullYear()} Medicare System Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;