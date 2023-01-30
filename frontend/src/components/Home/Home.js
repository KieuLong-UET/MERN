import React, { Fragment } from "react";
import { CgMouse } from "react-icons/all";
import './Home.css'

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Chao mung toi web</p>
        <h1>Tim kiem san pham di</h1>
        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
    </Fragment>
  );
};

export default Home;
