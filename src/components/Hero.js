import React from "react";
import Slider from "react-slick";
import banner1 from "../img/banner 1.jpg";
import banner2 from "../img/banner 2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderImages = [
  { src: banner1, alt: "Banner 1" },
  { src: banner2, alt: "Banner 2" },
];



const Hero = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="mt-24 lg:mt-40 max-w-7xl mx-auto">
      {/* Slider Section */}
      <div className="relative">
        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index} className="h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full lg:h-[500px] h-[180px] object-cover rounded-md shadow-lg"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none"></div>
      </div>

     
    </section>
  );
};

export default Hero;
