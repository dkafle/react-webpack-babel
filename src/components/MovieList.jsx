import React from 'react';
import { connect } from 'react-redux';

const MovieInput = (props) => (
  <div>
    <input type="text" name="movieName" />
    <button onClick={props.onAddMovie}>Add</button>
  </div>
);

const MovieList = (props) => (
  <div>
    <ul>
      {props.movies.map((movie, i) => <li key={i}>{movie.name}</li>)}
    </ul>
  </div>
);

class MovieManager extends React.Component {
  render() {
    return (<div>
      <MovieInput onAddMovie={this.props.onAddMovie} />
      <MovieList movies={this.props.movies}/>
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    movies: [...state.movies],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddMovie: () => dispatch({
      type: 'ADD_MOVIE',
      name: 'Marte Dum Tak',
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieManager);
