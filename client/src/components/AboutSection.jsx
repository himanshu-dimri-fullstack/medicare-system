import React from "react";

const AboutSection = () => {
    const stats = [
        { value: "180", label: "Products" },
        { value: "99", label: "Branches" },
        { value: "50", label: "Customers" },
        { value: "362", label: "Equipments" },
    ];

    return (
        <div className="mt-10">

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Welcome to{" "}
                        <span className="text-[#1c9d36]">Medicare System Inc.</span>
                    </h2>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Medicare Systems Inc has been providing technical solutions to
                        business problems since 2008. We take pride in working to understand
                        your business and suggesting solutions that make sense technically,
                        economically, and operationally.
                    </p>

                    <div className="h-1 w-20 bg-[#1c9d36] mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition duration-300"
                        >
                            <h3 className="text-3xl sm:text-4xl font-bold text-[#1c9d36]">
                                {item.value}
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm sm:text-base">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AboutSection;