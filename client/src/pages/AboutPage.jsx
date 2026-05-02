import React from "react";

const AboutPage = () => {
    return (
        <div className="w-full min-h-screen bg-linear-to-br from-[#e9f7ef] to-white px-6 md:px-16 py-12">

            {/* Header */}
            <div className="max-w-6xl mx-auto text-center mb-14">
                <h1 className="text-4xl md:text-5xl font-bold text-[#1c9d36] mb-4">
                    About Us
                </h1>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    Delivering intelligent healthcare and technical solutions since 2008
                </p>
            </div>

            {/* Main Content Card */}
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-6 leading-relaxed text-gray-700">

                <p>
                    <span className="font-semibold text-[#1c9d36]">
                        Medicare Systems Inc.
                    </span>{" "}
                    has been at the forefront of delivering intelligent healthcare and
                    technical solutions since 2008. What began as a commitment to solving
                    complex business challenges has evolved into a trusted partnership
                    model—serving organizations not just across India, but extending our
                    expertise to international markets as well.
                </p>

                <p>
                    We specialize in designing solutions that are not only technically
                    sound, but also economically viable and operationally efficient. Our
                    strength lies in understanding real-world challenges and crafting
                    systems that work seamlessly in high-pressure environments—from
                    hospitals to defense sectors.
                </p>

                <p>
                    Over the years, we have proudly supported critical institutions
                    including the Indian Defence Services, working closely with the Army
                    and Air Force, where precision, reliability, and speed are
                    non-negotiable.
                </p>

                <p>
                    In the healthcare sector, our solutions are trusted by some of India’s
                    most respected hospitals such as{" "}
                    <span className="font-medium">
                        Medanta, Apollo Hospitals, Max Healthcare, Fortis Healthcare, AIIMS,
                        and Manipal Hospitals
                    </span>.
                </p>

                <p>
                    Our wide marketing and distribution network ensures that our solutions
                    reach where they are needed most—efficiently and reliably. But what
                    truly defines us is our long-term commitment: many of our clients have
                    been with us for years, and some since our inception.
                </p>

                <p>
                    We continuously evolve with emerging technologies, but we do not chase
                    trends blindly. Every solution we propose is driven by one simple
                    principle: what works best for our clients. When required, we innovate
                    and develop our own technologies to bridge gaps and deliver excellence.
                </p>

                <p>
                    Behind everything we do is a team of highly skilled, dedicated
                    professionals who believe that success is built not just on
                    systems—but on trust, service, and lasting relationships.
                </p>
            </div>

            {/* Mission & Vision */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mt-12">

                {/* Mission */}
                <div className="bg-[#1c9d36] text-white p-8 rounded-3xl shadow-lg hover:scale-[1.02] transition">
                    <h2 className="text-2xl font-semibold mb-4">Mission</h2>
                    <p className="text-sm leading-relaxed">
                        To achieve excellence through integrity, innovation, and
                        commitment—creating value for our clients, empowering our workforce,
                        and contributing responsibly to society.
                    </p>
                </div>

                {/* Vision */}
                <div className="bg-white border border-[#1c9d36]/20 p-8 rounded-3xl shadow-lg hover:scale-[1.02] transition">
                    <h2 className="text-2xl font-semibold text-[#1c9d36] mb-4">
                        Vision
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        "To strengthen India’s healthcare ecosystem by delivering world-class, accessible, fast, cost-effective, and sustainable solutions—while proudly serving
                        the nation, including its defence forces, with unwavering dedication."
                    </p>
                </div>

            </div>

        </div>
    );
};

export default AboutPage;