import React from "react";
import { Link } from "react-router-dom";
import IconGroup from "../../components/header/IconGroup";


const HeaderMain = () => {
  return (
    <header className="header-area clearfix header-hm9 transparent-bar">
      <div className="container">
        <div className="header-top-area d-none d-lg-block">
          <div className="row">
            <div className="col-lg-2 d-none d-lg-block text-center">
              {/* header logo */}
              <div>
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <img alt="" src= "../../../public/img/logo.png" />
                </Link>
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
