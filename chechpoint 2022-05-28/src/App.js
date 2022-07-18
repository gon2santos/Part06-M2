import React from "react"
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import { Route, NavBar, Link, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/products/create" component={CreateProduct} />
      </Switch>
    </div>

  )
}



export default App;
