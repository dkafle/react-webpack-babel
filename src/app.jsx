import React from 'react';
import 'normalize.css';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
// import styles from "./app.sass"  // Css-module styles

import Board from './components/Board';

const App = () => (
  <div className='App'>
    <Board />
  </div>
);

export default App;
