import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import CategoryPage from './components/CategoryPage';
import AddProduct from './components/AddProduct';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div style={{ marginTop: '56px' }}></div>
      <Switch>
        <Route exact={true} path="/" component={Landing} />
        <Route path="/add" component={AddProduct} />
        <Route path="/category/:cat" component={CategoryPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/search/:key" component={ProductPage} />
        {/* <Route path="/forgot" component={ForgotPass} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
