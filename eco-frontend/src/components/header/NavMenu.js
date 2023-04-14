import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="main-menu">
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>Trang chủ</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop"}>Sản phẩm</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>Liên hệ</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
