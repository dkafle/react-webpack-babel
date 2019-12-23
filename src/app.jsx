import React from 'react';
import 'normalize.css';
import Registration from './components/Registration'

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import styles from "./app.sass"  // Css-module styles

const App = () => {
  return (
    <div className={styles.app}>
      <div>
        <h1>Registration Form</h1>
        <Registration />
      </div>
    </div>
  )
};

export default App;
