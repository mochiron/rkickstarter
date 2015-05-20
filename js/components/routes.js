import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

//handlers
import AppHandler from '../app.js';
import LoginHandler from './Login.js';


let routes = (
  //can I make a comment here
  <Route name="app" path="/" handler={AppHandler}>
    <Route name="login" path="/login" handler={LoginHandler}/> //and here too?
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
