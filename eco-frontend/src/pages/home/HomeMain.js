import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import HeaderMain from "../../wrapers/header/HeaderMain";
import LayoutMain from "../../layouts/LayoutMain";

const HomeMain = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Eco | Home</title>
        <meta
          name="description"
          content="Web ban hang dien tu"
        />
      </MetaTags>
      <LayoutMain>
        
      </LayoutMain>
      <HeaderMain />
    </Fragment>
  );
};

export default HomeMain;
