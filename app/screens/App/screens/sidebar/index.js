import React from "react";
import { Alert } from 'react-bootstrap';

let Home = React.createClass({
  render() {
    return (
      <div>
        <Alert bsStyle="warning">
          <strong>Holy guacamole!</strong> SIDEBAR PAGE YO!
        </Alert>
      </div>
    );
  }
});

export default Home;
