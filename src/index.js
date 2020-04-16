import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import { ItemProvider } from "./components/Cards/ItemContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Nav from "./components/Navbars/navTall";
import NavMobile from "./components/Navbars/nav";
import ItemDetail from "./pages/ItemDetail";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";

ReactDOM.render(
  <Router>
    <Nav className="nav" sticky />
    <NavMobile className="nav-mobile" />
    <ItemProvider>
      <Route exact path="/" component={App} />
      <Route path="/details" component={ItemDetail} />
      <Route path="/products/:category" render={(props)=>{
        return(
    <ProductPage category={props.match.params.category} {...props}/>)
}} />
      <Route path="/cart" component={Cart} />
    </ItemProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
