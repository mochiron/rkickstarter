//Startup Code
// There isn't much to this, other than initializing the css and the router

//loads main libraries. Note the custom router file
import React from 'react';
import router from 'config/routes'; //this is where our main route rules will reside

import "css/css.js" //we put all our .css, .sass, etc. references in this file

//start the router
router.run((Handler,state) => {
  React.render(<Handler {...state} />, document.querySelector("#react"));
});
