import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Layout from "../../layout/Layout";
import Slider from "../../wrappers/slider/Slider";

const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Eco | Hàng điện tử online</title>
        <meta name="Mô tả" content="Web bán hàng điện tử online" />
      </MetaTags>
      <Layout>
        {/* Slider */}
        <Slider />

        {/* Category */}
        <CategoryHome spaceBottomClass="pb-95" />

      </Layout>
    </Fragment>
  );
}

export default Home;
