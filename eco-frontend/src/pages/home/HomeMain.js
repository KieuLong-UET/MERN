import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutMain from "../../layouts/LayoutMain";
import Slider from "../../wrapers/slider/Slider";

const HomeMain = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Eco | Home</title>
        <meta name="description" content="Web ban hang dien tu" />
      </MetaTags>
      <LayoutMain>
        {/* slider */}
        <Slider />
      </LayoutMain>
    </Fragment>
  );
};

export default HomeMain;
