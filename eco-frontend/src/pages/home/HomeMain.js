import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutHome from "../../layouts/LayoutHome";
import Slider from "../../wrapers/slider/Slider";
import Category from "../../wrapers/category/Category";
// import TabProduct from "../../wrapers/product/TabProduct";
import LogoBrandSlider from "../../wrapers/logobrand/LogoBrandSlider";

const HomeMain = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Eco | Home</title>
        <meta name="description" content="Web ban hang dien tu" />
      </MetaTags>
      <LayoutHome>
        {/* slider */}
        <Slider />
        {/* category */}
        <Category spaceBottomClass="pb-95" />

        {/* tab product ---> Đoạn này phải call API để get data, khá mệt ----> để sau */}
        {/* <TabProduct spaceBottomClass="pb-60" category="electronics" /> */}

        {/* logo brand */}
        <LogoBrandSlider spaceBottomClass="pb-95" spaceTopClass="pt-100" />

      </LayoutHome>
    </Fragment>
  );
};

export default HomeMain;
