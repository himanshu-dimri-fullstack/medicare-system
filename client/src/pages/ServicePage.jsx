import React from "react";
import { useNavigate } from "react-router-dom";

const ServicePage = () => {

    const navigate = useNavigate();
    return (
        <div className="w-full min-h-screen bg-linear-to-br from-[#e9f7ef] to-white">

            <section className="max-w-7xl mx-auto px-6 py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                    Premium <span className="text-[#1c9d36]">Medicare Services</span>
                </h1>
                <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
                    Ensuring uninterrupted performance of critical medical equipment,
                    enhancing patient safety, and delivering long-term value to healthcare providers.
                </p>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-10">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6">

                    <p className="text-gray-600 leading-relaxed">
                        Medicare Service is committed to keeping all Medicare equipment operating optimally at all times during the entire life cycle.
                        This is paramount to us as uninterrupted operation ensures patient safety and prevents inconvenience for hospitals.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        Our services help clinicians get the most from all equipment, both in the intensive care unit as well as in the operating room.
                        We offer a comprehensive range of solutions that support your Medicare products and ensure optimal performance.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        With decades of experience and continuous research and development, Medicare Service provides a trusted partnership,
                        bringing expertise directly to healthcare professionals.
                    </p>

                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-14">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
                    What We Offer
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {[
                        {
                            title: "Equipment Optimization",
                            desc: "Ensuring peak performance throughout the lifecycle of medical equipment.",
                        },
                        {
                            title: "Clinical Support",
                            desc: "Helping clinicians maximize efficiency in ICU and operating rooms.",
                        },
                        {
                            title: "Tailored Solutions",
                            desc: "Custom service plans designed to meet your specific hospital needs.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                        >
                            <h3 className="text-xl font-semibold text-[#1c9d36] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-10">
                <div className="bg-[#f4fbf6] rounded-2xl p-8 md:p-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Our Product Coverage
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Medicare offers a wide range of products, including operating tables, OR lighting,
                        ventilation systems, and cardiopulmonary equipment. Customers can cover all their
                        Medicare equipment under a single service agreement for complete peace of mind.
                    </p>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 py-16 text-center">
                <div className="bg-[#1c9d36] text-white rounded-2xl p-10 shadow-lg">
                    <h2 className="text-3xl font-semibold mb-4">
                        Need a Custom Service Plan?
                    </h2>
                    <p className="mb-6 text-white/90">
                        Contact us today and let us tailor a solution to your exact service requirements.
                    </p>
                    <button onClick={() => navigate("/contact")} className="bg-white text-[#1c9d36] font-semibold px-6 py-3 rounded-full hover:scale-105 transition">
                        Contact Us
                    </button>
                </div>
            </section>

        </div>
    );
};

export default ServicePage;