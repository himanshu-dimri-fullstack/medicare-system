import React from "react";

const EnquirySection = () => {

    const handleWhatsAppRedirect = () => {
        const phoneNumber = "918979239430";
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
        <div className="pt-16 px-4">
            <div className="max-w-3xl mx-auto space-y-10">

                <div className="text-center flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Make an{" "}
                        <span className="text-[#1c9d36]">Enquiry</span>
                    </h2>

                    <p className="text-gray-600 mb-6 leading-relaxed max-w-xl">
                        Have questions about our products or services? Click below
                        and chat with us directly on WhatsApp.
                    </p>

                    <div className="h-1 w-20 bg-[#1c9d36] rounded-full"></div>
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={handleWhatsAppRedirect}
                        className="flex items-center gap-2 bg-[#1c9d36] hover:bg-[#15852c] text-white px-8 py-4 rounded-xl font-semibold text-lg transition duration-300 shadow-lg"
                    >
                        💬 Chat on WhatsApp
                    </button>
                </div>

            </div>
        </div>
    );
};

export default EnquirySection;