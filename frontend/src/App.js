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

//Product page

//Blog page

//Other page
const App = (props) => {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          vn: require("./languages/vietnamese.json"),
        },
      })
    );
  });

  return (
    <ToastProvider>
      <BreadcrumbsProvider>
        <Route>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="preloader-wrapper">
                  <div className="preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                {/* Home page */}
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={Home}
                />

                {/* Shop page */}

                {/* shop product page */}

                {/* Blog page */}

                {/* Other page */}
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Route>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(multilanguage(App));
