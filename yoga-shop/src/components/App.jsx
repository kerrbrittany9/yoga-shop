import React from 'react';
import ProductList from './ProductList';
import Products from './Products';
import Header from './Header';
import Cart from './Cart';
import { Switch, Route } from 'react-router-dom';
import Background from "./../../img/yoga-pose.jpg";


function App(props) {

  var appStyle = {
    textAlign: 'center',
    margin: "50px",
    color: "pink",
  }
  var shopStyle = {
    backgroundImage: "url(" + Background + ")",
    height: '200px',
    width: '1000px',
    backgroundRepeat: 'no-repeat',
    marginLeft: '230px',
    marginRight: '100px',
    paddingTop: '10px'
  }

  return (
    <div style={appStyle}>
    <Header/>
      <div style={shopStyle}>
        <h1>om</h1>
      </div>
      <Switch>
        <Route exact path="/cart" component={Cart}/>
        <Route path="/" component={Products}/>
      </Switch>
    </div>

    )
  }
export default App;
