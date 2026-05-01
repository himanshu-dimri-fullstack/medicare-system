import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#0f172a] text-gray-300 pt-14 pb-6 px-4 mt-16">

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Medicare System
                    </h2>
                    <p className="text-sm leading-relaxed">
                        Providing trusted medical equipment and technical solutions since 2008.
                        We deliver quality, safety, and innovation for healthcare needs.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Quick Links
                    </h2>
                    <ul className="space-y-2 text-sm">
                        {["Home", "About Us", "Services", "Products", "Contact Us"].map((item, i) => (
                            <li
                                key={i}
                                className="cursor-pointer hover:text-[#1c9d36] transition"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

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

                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Follow Us
                    </h2>

                    <div className="flex gap-4">

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 p-3 rounded-full cursor-pointer hover:bg-[#1c9d36] transition"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://www.instagram.com/medicaresystemrgkak?utm_source=qr&igsh=MTJoZnZ0eGFtOGducA=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 p-3 rounded-full cursor-pointer hover:bg-[#1c9d36] transition"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 p-3 rounded-full cursor-pointer hover:bg-[#1c9d36] transition"
                        >
                            <FaLinkedinIn />
                        </a>

                    </div>
                </div>

            </div>

            <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Medicare System Inc. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;