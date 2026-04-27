import React, { useState } from "react";

const EnquirySection = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        product: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        alert("Enquiry Submitted!");
    };

    return (
        <div className="pt-16 px-4">

            <div className="max-w-3xl mx-auto space-y-10">

                <div className="text-center flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Make an{" "}
                        <span className="text-[#1c9d36]">Enquiry</span>
                    </h2>

                    <p className="text-gray-600 mb-6 leading-relaxed max-w-xl">
                        Have questions about our products or services? Fill out the form and
                        our team will get back to you shortly with the best solution.
                    </p>

                    <div className="h-1 w-20 bg-[#1c9d36] rounded-full"></div>
                </div>

                <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8">

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1c9d36]"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1c9d36]"
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1c9d36]"
                            required
                        />

                        <input
                            type="text"
                            name="product"
                            placeholder="Product / Category"
                            value={form.product}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1c9d36]"
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1c9d36]"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-[#1c9d36] hover:bg-[#15852c] text-white py-3 rounded-xl font-semibold transition duration-300"
                        >
                            Submit Enquiry
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default EnquirySection;