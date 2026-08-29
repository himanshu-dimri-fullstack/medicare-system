import HomeSlider from "../components/HomeSlider";
import { FaPhone } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
// import ProductsSlider from "../components/ProductsSlider";
import AboutSection from "../components/AboutSection";
import EnquirySection from "../components/EnquirySection";
import FeaturedProducts from "../components/FeaturedProducts";
import FeaturedProductSlider from "../components/FeaturedProductSlider";

const HomePage = () => {
    return (
        <div className="bg-linear-to-br from-[#e9f7ef] to-white">
            <HomeSlider />
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 -mt-2">

                <div className="bg-[#1c9d36] flex justify-center py-4">
                    <div className="max-w-xs text-center">
                        <FaPhone className="text-2xl sm:text-3xl text-white mx-auto" />

                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mt-4">
                            24/7 Customer Care
                        </h3>

                        <p className="mt-3 text-sm sm:text-base lg:text-lg text-white">
                            Dedicated Customer Provide Best Care And Service
                        </p>
                    </div>
                </div>

                <div className="bg-white flex justify-center py-4">
                    <div className="max-w-xs text-center">
                        <FaRegThumbsUp className="text-2xl sm:text-3xl text-black mx-auto" />

                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black mt-4">
                            Best Equipment Service
                        </h3>

                        <p className="mt-3 text-sm sm:text-base lg:text-lg text-black">
                            Trusted Service And Powering Solution
                        </p>
                    </div>
                </div>

                <div className="bg-[#1c9d36] flex justify-center py-4">
                    <div className="max-w-xs text-center">
                        <AiFillSafetyCertificate className="text-2xl sm:text-3xl text-white mx-auto" />

                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mt-4">
                            Safe & Secure
                        </h3>

                        <p className="mt-3 text-sm sm:text-base lg:text-lg text-white">
                            100% Completely Safe & Secure
                        </p>
                    </div>
                </div>

            </div>
            <div className="bg-linear-to-br from-[#e9f7ef] to-white py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 lg:mb-12">
                        Featured{" "}
                        <span className="text-[#1c9d36]">Products</span>
                    </h2>

                    {/* <FeaturedProducts /> */}
                    <FeaturedProductSlider />
                </div>
                <AboutSection />
                <EnquirySection />
            </div>

        </div>
    );
};

export default HomePage;