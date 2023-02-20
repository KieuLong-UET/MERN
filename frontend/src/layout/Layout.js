import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Header from "../wrappers/header/Header";
import Footer from "../wrappers/footer/Footer";

const Layout = ({ children, footerBackgroundClass }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer
        backgroundColorClass={footerBackgroundClass ? footerBackgroundClass : "bg-gray"}
        spaceTopClass="pt-100"
        spaceBottomClass="pb-70"
      />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  footerBackgroundClass: PropTypes.string
};

export default Layout;
