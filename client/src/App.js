import React from 'react';
import './App.css';
import {Router, Link} from '@reach/router'
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';


function App() {
  return (
    <div className="App">
      <Router>
      <AllProducts path="/" />
      <OneProduct path="/product/:id" />
      <EditProduct path="/product/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
