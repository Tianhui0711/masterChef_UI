import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import Page from './Page.jsx';

const element = (
<<<<<<< HEAD
  <HashRouter>
    <Page/>
  </HashRouter>
);

ReactDOM.render(element, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
=======
  <BrowserRouter>
    <Page />
  </BrowserRouter>
);

ReactDOM.render(element, document.getElementById('root'));
>>>>>>> master
