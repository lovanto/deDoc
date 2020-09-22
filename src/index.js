import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';
import './css/style.scss';

import Container from './component/container.js';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Container />
      </React.StrictMode>
    );
  }
};

ReactDOM.render(<App />, document.querySelector("#root"));