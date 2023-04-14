import React, {useState, useEffect} from "react";
// import { Link } from "react-router-dom";
import logo from "./logo.png";
import IconGroup from "../../components/header/IconGroup";
import NavMenu from "../../components/header/NavMenu";

const HeaderMain = () => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  
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
      <div
        className={`header-bottom sticky-bar header-res-padding header-padding-2 ${
          scroll > headerTop ? "stick" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-6 d-block d-lg-none">
              {/* header logo */}
              <div>
                <img src={logo} alt="Logo" />
              </div>
            </div>
            <div className="col-6 d-block d-lg-none">
              {/* Icon group */}
              <IconGroup />
            </div>
            <div className="col-xl-12 col-lg-12 d-none d-lg-block">
              {/* Nav menu */}
              <NavMenu />
            </div>
          </div>
          {/* mobile menu */}
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
