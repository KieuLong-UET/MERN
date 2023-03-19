import { Link } from "react-router-dom";
import IconGroup from "../../components/header/IconGroup";

const imageUrl = "/assets/img/logo/logo.png";

const HeaderMain = ({}) => {
  return (
    <header className="header-area clearfix header-hm9 transparent-bar">
      <div className="container">
        <div className="header-top-area d-none d-lg-block">
          <div className="row">
            <div className="col-lg-2 d-none d-lg-block text-center">
              {/* header logo */}
              <div>
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <img alt="" src={process.env.PUBLIC_URL + imageUrl} />
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
      <div
        className={`header-bottom sticky-bar header-res-padding header-padding-2 ${
          scroll > headerTop ? "stick" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-6 d-block d-lg-none">
              {/* header logo */}
              <div className="logo-hm-9">
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <img alt="" src={process.env.PUBLIC_URL + imageUrl} />
                </Link>
              </div>
            </div>
            <div className="col-6 d-block d-lg-none">
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
