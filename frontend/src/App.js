import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

//Home page
const Home = lazy(() => import("./pages/home/Home"));

//Shop page

// Product page

//Blog page

//Other page
function App(props) {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          vn: require("./translations/vietnamese.json")
        }
      })
    );
  });

  return (
    <ToastProvider>
      <BreadcrumbsProvider>
        <Route>
          <ScrollToTop>
            <Home></Home>
          </ScrollToTop>
        </Route>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
}

App.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(multilanguage(App));
