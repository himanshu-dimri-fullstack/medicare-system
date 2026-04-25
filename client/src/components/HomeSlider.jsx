import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = Slick.default;

const SliderComponent = Slick.default;

const HomeSlider = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    console.log(Slider);
    return (

        <Slider {...settings}>
            <div className="w-full border-[#eee]">
                <img src="/assets/slider/1.jpg" className="w-full h-50 sm:h-75 md:h-120 object-cover object-[center_20%]  border-[#eee]" />
            </div>
            <div className="w-full border-[#eee]">
                <img src="/assets/slider/2.jpg" className="w-full h-50 sm:h-75 md:h-120 object-cover object-[center_20%] border-[#eee]" />
            </div>
            <div className="w-full border-[#eee]">
                <img src="/assets/slider/3.jpg" className="w-full h-50 sm:h-75 md:h-120 object-cover object-[center_20%] border-[#eee]" />
            </div>
        </Slider>

    )
}

export default HomeSlider