import React from 'react';
import 'normalize.css';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import styles from "./app.sass"  // Css-module styles

class App extends React.Component {

  render() {
    return (<div className='App'>
      <div>
        <h1>Understand React Redux</h1>
        <div></div>
      </div>
    </div>);
  }
}

export default App;
