import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import LogoBrandSliderComponent from "../../components/logobrand/LogoBrandSliderComponent";
import logoBrandData from "./logoBrandData.json"

const LogoBrandSlider = ({ spaceBottomClass, spaceTopClass }) => {
  const settings = {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 4
      },
      640: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    }
  };

  return (
    <div
      className={`brand-logo-area ${
        spaceBottomClass ? spaceBottomClass : ""
      }  ${spaceTopClass ? spaceTopClass : ""}`}
    >
      <div className="container">
        <div className="brand-logo-active">
          <Swiper {...settings}>
            {logoBrandData &&
              logoBrandData.map((single, key) => {
                return (
                  <LogoBrandSliderComponent
                    data={single}
                    key={key}
                    sliderClassName="swiper-slide"
                    spaceBottomClass="mb-30"
                  />
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

LogoBrandSlider.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default LogoBrandSlider;
