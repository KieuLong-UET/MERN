import React, {lazy} from 'react';

// home pages
const HomeMain = lazy(() => import("./pages/home/HomeMain"));


const App = () => {
  return (
    <HomeMain></HomeMain>
  );
}

export default App;
