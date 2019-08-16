import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './components/Landing';
import AddProduct from './components/AddProduct'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Landing} />
      <Route path="/add" component={AddProduct} />
      {/* <Route path="/login" component={Login} /> */}
    </Router>
  );
}

export default App;
