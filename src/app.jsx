import React from 'react';
import 'normalize.css';
import {connect} from 'react-redux';
import axios from 'axios';

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
    this.getRemoteData();
  }

  getRemoteData() {
    const url = random_gif + '?api_key=' + API_KEY;
    axios.get(url)
      .then(result => {
        console.log(result);
        this.setState({
          giffy: result.data,
        })
      });
  }

  render() {
    const giffy = this.state.giffy;
    return (<div className='App'>
      <div>
        <div>
          <h3>{giffy.data ? giffy.data.title : 'No title'}</h3>
          <img src={giffy.data ? giffy.data.image_url : ''} /> <br/>
          <button onClick={() =>this.getRemoteData()}>Get Next</button>
        </div>
        <h1>Understand React Redux</h1>
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
