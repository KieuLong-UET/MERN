import React from "react";
// import { Link } from "react-router-dom";
import logo from "./logo.png";
import IconGroup from "../../components/header/IconGroup";

const HeaderMain = () => {
  return (
    <header className="header-area clearfix header-hm9 transparent-bar">
      <div className="container">
        <div className="header-top-area d-none d-lg-block">
          <div className="row">
            <div className="col-lg-5 col-md-8 col-12">
              {/* Số điện thoại */}
              <div className="language-currency-wrap">
                <div className="same-language-currency">
                  <span>Việt Nam</span>
                </div>
                <div className="same-language-currency">
                  <span>Liên hệ 03859xxxxx</span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 d-none d-lg-block text-center">
              {/* header logo */}
              <div>
                <img src={logo} alt="Logo" />
              </div>
            </div>
            <div className="col-lg-5 col-md-4 col-12">
              {/* Icon group */}
              <IconGroup />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
