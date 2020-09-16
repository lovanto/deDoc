import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';
import './css/style.scss';

import './img/people1.jpg';
import './img/people2.jpg';
import './img/people3.jpg';

import './img/icons/chat.svg';
import './img/icons/medicine.svg';

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