import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';
import './css/style.scss';

import './img/people1.jpg';
import './img/people2.jpg';
import './img/people3.jpg';

import './img/icons/chat.svg';
import './img/icons/medicine.svg';

import Navigation from './component/navigation.js';

const App = () => {
  return (
      <Navigation />
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));