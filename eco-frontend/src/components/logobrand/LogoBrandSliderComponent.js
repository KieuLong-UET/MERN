import PropTypes from "prop-types";
import React from "react";

const LogoBrandSliderComponent = ({ data, sliderClassName, spaceBottomClass }) => {
  return (
    <div
      className={`single-brand-logo ${sliderClassName ? sliderClassName : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <img src={process.env.PUBLIC_URL + data.image} alt="" />
    </div>
  );
};

LogoBrandSliderComponent.propTypes = {
  data: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default LogoBrandSliderComponent;
