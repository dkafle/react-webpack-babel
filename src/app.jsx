import React from 'react';
import 'normalize.css';
import Registration from './components/Registration';
import About from './components/About';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import styles from "./app.sass"  // Css-module styles
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';


const Menu = () => (
  <div>
    <ul>
      <li>
        <Link to="/a">About</Link>
      </li>
      <li>
        <Link to="/r">Registration</Link>
      </li>
    </ul>
  </div>
)

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className={styles.app}>
          <Switch>
            <Route path="/a">
              <About />
            </Route>
            <Route path="/r">
              <Registration />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
