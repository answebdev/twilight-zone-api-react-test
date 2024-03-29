import React from 'react';
import Navbar from './Navbar';
// import Home from './Home';
// import HomeWithSearch from './HomeWithSearch';
import HomeWithTwoSearchBars from './HomeWithTwoSearchBars';
import './App.css';

// Live test app: https://twilight-zone-api-react-test.netlify.app/
// Code: https://github.com/answebdev/twilight-zone-api-react-test

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      {/* <Home /> */}
      {/* <HomeWithSearch /> */}
      <HomeWithTwoSearchBars />
    </div>
  );
};

export default App;
