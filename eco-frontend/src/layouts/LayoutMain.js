import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderMain from "../wrappers/header/HeaderMain";
import Footer from "../wrappers/footer/Footer";

const LayoutMain = ({ children }) => {
  return (
    <Fragment>
      <HeaderMain/>
      {children}
      <Footer
        backgroundColorClass="bg-gray"
        spaceTopClass="pt-100"
        spaceBottomClass="pb-70"
      />
    </Fragment>
  );
};

LayoutMain.propTypes = {
  children: PropTypes.any,
};

export default LayoutMain;
