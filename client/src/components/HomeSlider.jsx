import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = Slick.default;

const SliderComponent = Slick.default;

const HomeSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };
    console.log(Slider);
    return (

        <div className="max-w-7xl mx-auto">

            <Slider {...settings}>
                <div className="w-full border-[#eee]">
                    <img src="/assets/SLIDER-IMAGES/slider1.webp" className="w-full h-60 sm:h-75 md:h-120 object-fill object-[center_20%]  border-[#eee]" />
                </div>
                <div className="w-full border-[#eee]">
                    <img src="/assets/SLIDER-IMAGES/slider2.webp" className="w-full h-60 sm:h-75 md:h-120 object-fill object-[center_20%] border-[#eee]" />
                </div>
                <div className="w-full border-[#eee]">
                    <img src="/assets/SLIDER-IMAGES/slider.webp" className="w-full h-60 sm:h-75 md:h-120 object-fill object-[center_20%] border-[#eee]" />
                </div>
                <div className="w-full border-[#eee]">
                    <img src="/assets/SLIDER-IMAGES/slider4.webp" className="w-full h-60 sm:h-75 md:h-120 object-fill object-[center_20%]  border-[#eee]" />
                </div>
                <div className="w-full border-[#eee]">
                    <img src="/assets/SLIDER-IMAGES/slider5.webp" className="w-full h-60 sm:h-75 md:h-120 object-fill object-[center_20%] border-[#eee]" />
                </div>
                <div className="w-full border-[#eee]">
                    <img src="/assets/SLIDER-IMAGES/slider6.webp" className="w-full h-60 sm:h-75 md:h-120 object-fill object-[center_20%] border-[#eee]" />
                </div>
            </Slider>

        </div>

    )
}

export default HomeSlider