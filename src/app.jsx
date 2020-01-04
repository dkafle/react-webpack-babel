import React from 'react';
import 'normalize.css';
import {connect} from 'react-redux';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
// import styles from "./app.sass"  // Css-module styles

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     age: 21
  //   };
  // }

  // onAgeUp() {
  //   let age = this.state.age;
  //   this.setState({
  //     age: ++age,
  //   });
  // }

  // onAgeDown() {
  //   let age = this.state.age;
  //   this.setState({
  //     age: --age,
  //   });
  // }

  render() {
    return (<div className='App'>
      <div>
        <h1>Understand React Redux</h1>
        <div>
          <div>Your age is: {this.props.age}</div>
          <button onClick={this.props.onAgeUp}>Age Up</button>
          <button onClick={this.props.onAgeDown}>Age Down</button>
        </div>
      </div>
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP' }),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
