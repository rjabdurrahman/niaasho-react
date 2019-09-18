import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import ProductRender from './components/ProductRender';
import AddProduct from './components/AddProduct';
import ProcutDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div style={{ marginTop: '56px' }}></div>
      <Switch>
        <Route exact={true} path="/" component={Landing} />
        <Route path="/add" component={AddProduct} />
        <Route path="/category/:cat" component={ProductRender} />
        <Route path="/product/:id" component={ProcutDetails} />
        <Route path="/search/:key" component={ProductRender} />
        {/* <Route path="/forgot" component={ForgotPass} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
