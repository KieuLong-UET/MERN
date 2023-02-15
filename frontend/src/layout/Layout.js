import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderTwo from "../wrappers/header/HeaderTwo";
import FooterOne from "../wrappers/footer/FooterOne";

const Layout = ({ children, footerBackgroundClass }) => {
  return (
    <Fragment>
      <HeaderTwo />
      {children}
      <FooterOne
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
