import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutMain from "../../layouts/LayoutMain";
import Slider from "../../wrapers/slider/Slider";
import Category from "../../wrapers/category/Category";
import TabProduct from "../../wrapers/product/TabProduct";
import LogoBrandSlider from "../../wrapers/logobrand/LogoBrandSlider";

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
        {/* category */}
        <Category spaceBottomClass="pb-95" />

        {/* tab product */}
        {/* <TabProduct spaceBottomClass="pb-60" category="electronics" /> */}

        {/* logo brand */}
        <LogoBrandSlider spaceBottomClass="pb-95" spaceTopClass="pt-100" />

      </LayoutMain>
    </Fragment>
  );
};

export default HomeMain;
