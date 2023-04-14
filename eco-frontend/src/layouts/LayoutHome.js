import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderHome from "../wrapers/header/HeaderHome";
import Footer from "../wrapers/footer/Footer";

const LayoutMain = ({ children }) => {
  return (
    <Fragment>
      <HeaderHome />
      {children}
      <Footer />
    </Fragment>
  );
};

LayoutMain.propTypes = {
  children: PropTypes.any,
};

export default LayoutMain;
