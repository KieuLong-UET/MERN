import { BrowserRouter as Router} from "react-router-dom";
import React from "react";

// home pages
import HomeMain from "./pages/home/HomeMain";

const App = () => {
  return (
    <Router>
      <HomeMain></HomeMain>
    </Router>
  );
};

export default App;
