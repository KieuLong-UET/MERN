import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderMain from "../wrapers/header/HeaderMain";

const LayoutMain = ({ children }) => {
  return (
    <Fragment>
      <HeaderMain />
      {children}
    </Fragment>
  );
};

LayoutMain.propTypes = {
  children: PropTypes.any,
};

export default LayoutMain;
