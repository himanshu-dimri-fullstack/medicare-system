import React from "react";

const ContactPage = () => {

    const handleWhatsAppRedirect = () => {
        const phoneNumber = "919810857534";
        const message = `Hi,

I would like to enquire about your products/services.

Please share:
• Product details & pricing  
• Available options  
• Delivery timeline  

Looking forward to your response. Thanks!`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="w-full min-h-screen bg-linear-to-br from-[#e9f7ef] to-white px-6 md:px-16 py-12">

            <div className="max-w-6xl mx-auto text-center mb-14">
                <h1 className="text-4xl md:text-5xl font-bold text-[#1c9d36] mb-4">
                    Contact Us
                </h1>
                <p className="text-gray-600 text-lg">
                    We'd love to hear from you. Reach out to us anytime.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

                <div className="bg-white p-8 rounded-3xl shadow-xl space-y-6">

                    <h2 className="text-2xl font-semibold text-[#1c9d36]">
                        Get in Touch
                    </h2>

                    <p className="text-gray-600">
                        Whether you have a question about services, products, or anything else,
                        our team is ready to assist you.
                    </p>

                    <div className="space-y-5">

                        <div className="p-4 rounded-xl bg-gray-50">
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="text-lg font-semibold text-gray-800">
                                +91 9810857534
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-gray-50">
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="text-lg font-semibold text-gray-800">
                                info@medicaresystem.in
                            </p>
                        </div>

                    </div>

                    <div className="mt-4 p-5 bg-[#1c9d36] text-white rounded-2xl">
                        <p className="text-sm">
                            We typically respond within 24 hours. Your queries matter to us.
                        </p>
                    </div>

                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col justify-between">

                    <div>
                        <h2 className="text-2xl font-semibold text-[#1c9d36] mb-6">
                            Quick Connect
                        </h2>

                        <p className="text-gray-600 mb-6">
                            Need instant assistance? Chat with us directly on WhatsApp
                            and get quick responses from our team.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-6">

                            <div className="bg-gray-50 p-4 rounded-xl text-center">
                                <p className="text-2xl font-bold text-[#1c9d36]">15+</p>
                                <p className="text-sm text-gray-600">Years Experience</p>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-xl text-center">
                                <p className="text-2xl font-bold text-[#1c9d36]">100+</p>
                                <p className="text-sm text-gray-600">Clients</p>
                            </div>

                        </div>
                    </div>

                    <button
                        onClick={handleWhatsAppRedirect}
                        className="w-full flex items-center justify-center gap-2 bg-[#1c9d36] hover:bg-[#15852c] text-white py-3 rounded-xl font-semibold text-lg transition duration-300 shadow-lg"
                    >
                        💬 Chat on WhatsApp
                    </button>

                </div>

            </div>

        </div>
    );
};

export default ContactPage;