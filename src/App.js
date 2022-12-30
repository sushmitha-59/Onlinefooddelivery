import React from "react";
import "./App.css";
// import "./components/js.js";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PreviousOrders from "./components/PreviousOrders";
import Starters from "./components/Starters";
import RiceItems from "./components/RiceItems";
import Curries from "./components/Curries";
import Tandooris from "./components/Tandooris";
import FastFoods from "./components/FastFoods";
import Beverages from "./components/Beverages";
import Refreshments from "./components/Refreshments";
import Cart1 from "./components/Cart1";
import NotFound from "./components/NotFound";
import {CartProvider} from "react-use-cart";


function App() {
  return (

    <BrowserRouter>

      <Navbar />

      <Switch>

        <Route exact path="/">
          <Body />
          <Footer />
        </Route>
       
        <Route exact path="/previousorders">
          <PreviousOrders />
        </Route>
        
        <CartProvider>
        
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/starters">
          <Starters />
          </Route>
        <Route exact path="/riceitems">
          <RiceItems />
        </Route>
        <Route exact path="/curries">
          <Curries />
        </Route>
        <Route exact path="/tandooris">
          <Tandooris />
        </Route>
        <Route exact path="/fastfoods">
          <FastFoods />
        </Route>
        <Route exact path="/beverages">
          <Beverages />
        </Route>
        <Route exact path="/refreshments">
          <Refreshments />
        </Route>
        <Route exact path="/cart">
          <Cart1 />
        </Route>
       
        </CartProvider>
        
      <Route component={NotFound} />
      </Switch>
     
  </BrowserRouter>

  );
}

export default App;
