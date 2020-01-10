import React from 'react';
import 'normalize.css';
import {connect} from 'react-redux';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
// import styles from "./app.sass"  // Css-module styles
import MovieManager from './components/MovieList';

const API_KEY = 'TsBcDznUA5bcQK7u7lYRwEcIvCqHHXmM';
const random_gif = 'http://api.giphy.com/v1/gifs/random';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      giffy: {}
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch(random_gif + '?api_key=' + API_KEY)
      .then(data => data.json())
      .then(json => this.setState({
        giffy: json,
      }));
  }

  render() {
    return (<div className='App'>
      <div>
        <h3>{this.state.giffy.data ? this.state.giffy.data.title : 'No Title'}</h3>
        <img src={this.state.giffy.data ? this.state.giffy.data.image_url : ''} />
        <button onClick={() => this.getData()}>Get Next</button>
        <h3>Understand React Redux</h3>
        <div>
          <div>Your age is: {this.props.age}</div>
          <button onClick={this.props.onAgeUp}>Age Up</button>
          <button onClick={this.props.onAgeDown}>Age Down</button>
        </div>
        <MovieManager />
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
