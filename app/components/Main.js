import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Index';
import ProductDetail from './Product/Detail';
import ProductList from './Product/List';
import Contact from './Contact/Index';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contato" component={Contact} />
      <Route exact path="/categoria/:name" component={ProductList} />
      <Route path="/produto/:name/:id" component={ProductDetail} />
    </Switch>
  </main>
);

export default Main;
