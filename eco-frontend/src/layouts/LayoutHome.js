import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderMain from "../wrapers/header/HeaderMain";
import Footer from "../wrapers/footer/Footer";

const LayoutMain = ({ children }) => {
  return (
    <Fragment>
      <HeaderMain />
      {children}
      <Footer />
    </Fragment>
  );
};

LayoutMain.propTypes = {
  children: PropTypes.any,
};

export default LayoutMain;
