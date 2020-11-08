import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from "./components/navbar.component.js";
import HousePriceList from "./components/housepricelist.component";
//import addHousePost from "./components/addhousepost.component";


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
        <Route path = "/" exact component={HousePriceList} />
      </div>
    </Router> 
  );
}

export default App;
