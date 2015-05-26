import React from "react";
import {RouteHandler} from "react-router";

import TopNav from './components/topnav';

let AppHandler = React.createClass({
  render() {
    return (
      <div className="container">
        <TopNav/>
        <RouteHandler/>
      </div>
    );
  }
});

export default AppHandler;
