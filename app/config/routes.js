//Routing file
// using react-router
import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Route } from 'react-router';

// we'll create a simple site structure, to demonstrate the router and react-bootstrap usage:
// a main template, with top bar and footer
// a page with a side bar
// a simple forms page
import AppHandler from 'screens/App';
import HomeHandler from 'screens/App/screens/home';
import SidebarHandler from 'screens/App/screens/sidebar';
import FormsHandler from 'screens/App/screens/forms';

let routes = (
  <Route name="app" path="/" handler={AppHandler}>
    <Route name="sidebar" path="/sidebar" handler={SidebarHandler}/>
    <Route name="forms" path="/forms" handler={FormsHandler}/>
    <DefaultRoute handler={HomeHandler}/>
  </Route>
);

let router = Router.create({
  routes: routes,
  location: Router.HashLocation,
});

export default router;
