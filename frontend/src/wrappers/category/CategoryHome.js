import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import CategoryOneSingle from "../../components/category/CategoryOneSingle.js";

//Call data
const categoryData = [
  {
    id: "1",
    image: "/assets/img/product/hm9-cagi-1.jpg",
    subtitle: "4 Products",
    title: "Bluetooth Speaker",
    link: "/shop-grid-standard",
  },
  {
    id: "2",
    image: "/assets/img/product/hm9-cagi-2.jpg",
    subtitle: "8 Products",
    title: "Bluetooth Headphone",
    link: "/shop-grid-standard",
  },
  {
    id: "3",
    image: "/assets/img/product/hm9-cagi-3.jpg",
    subtitle: "9 Products",
    title: "Kardon Aura Studio",
    link: "/shop-grid-standard",
  },
  {
    id: "4",
    image: "/assets/img/product/hm9-cagi-2.jpg",
    subtitle: "4 Products",
    title: "Bluetooth Speaker",
    link: "/shop-grid-standard",
  },
];

const CategoryHome = ({ spaceBottomClass }) => {
  // swiper slider settings
  const settings = {
    loop: false,
    spaceBetween: 30,
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <div
      className={`collections-area ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <div className="container">
        <div className="collection-wrap-2">
          <div className="collection-active-2">
            <Swiper {...settings}>
              {categoryData &&
                categoryData.map((single, key) => {
                  return (
                    <CategoryOneSingle
                      data={single}
                      key={key}
                      sliderClass="swiper-slide"
                    />
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryHome.propTypes = {
  spaceBottomClass: PropTypes.string,
};

export default CategoryHome;
