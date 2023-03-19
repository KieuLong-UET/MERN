import React from "react";
import { Link } from "react-router-dom";

const IconGroup = () => {
  return (
    <div className={`header-right-wrap`}>
      <div className="same-style header-search d-none d-lg-block">
        <button className="search-active">
          <i className="pe-7s-search" />
        </button>
        <div className="search-content">
          <form action="#">
            <input type="text" placeholder="Search" />
            <button className="button-search">
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="same-style account-setting d-none d-lg-block">
        <button className="account-setting-active">
          <i className="pe-7s-user-female" />
        </button>
        <div className="account-dropdown">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>Login</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>
                Register
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/my-account"}>
                my account
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="same-style header-wishlist">
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <i className="pe-7s-like" />
        </Link>
      </div>
      <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart">
          <i className="pe-7s-shopbag" />
        </button>
        {/* menu cart */}
      </div>
      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
          <i className="pe-7s-shopbag" />
        </Link>
      </div>
    </div>
  );
};

export default IconGroup;
