import React, { Component } from 'react';
import './App.css'; 
//import ProductPannel from './components/abc/products'
//import ViewBill from './components/abc/view-bill'
import { BrowserRouter as Router, Route } from "react-router-dom";
import BasicExample from './components/home/home'
class App extends Component {
  render() {
    return (
      <div>
      <BasicExample/>
      </div>
      /*
      <Router>
      <div className="container">
        <Route exact path="/" component={ProductPannel} />
        <Route path="/ViewBill" component={ViewBill} />
      </div>
    </Router>
    */
    );
  }
}
export default App;
