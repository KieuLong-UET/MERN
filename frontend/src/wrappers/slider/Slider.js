import React from "react";
import Swiper from "react-id-swiper";
import SliderSingle from "../../components/slider/SliderSingle";

const Slider = () => {
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    ),
  };

  //Need to call api to get data here
  const dataSlider = [
    {
      id: 1,
      title: "New Arrival",
      subtitle: "New Design <br/> Bluetooth Speaker",
      image: "/assets/img/slider/single-slide-3.png",
      url: "/shop-grid-standard",
    },
    {
      id: 2,
      title: "Smart Products",
      subtitle: "Summer Offer <br/> 2020 Collection",
      image: "/assets/img/slider/single-slide-6.png",
      url: "/shop-grid-standard",
    },
  ];

  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <Swiper {...params}>
          {dataSlider &&
            dataSlider.map((single, key) => {
              return (
                <SliderSingle
                  data={single}
                  key={key}
                  sliderClass="swiper-slide"
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
