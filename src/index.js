import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';
import './css/style.scss';

import Navigation from './component/navigation.js';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Navigation />
      </React.StrictMode>
    );
  }
};

ReactDOM.render(<App />, document.querySelector("#root"));