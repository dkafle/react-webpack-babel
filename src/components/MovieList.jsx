import React from 'react';
import { connect } from 'react-redux';

const MovieInput = (props) => (
  <div>
    <input type="text" value={props.movieName} onChange={props.onChange} />
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
  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
    };
  }
  handleAddMovie() {
    this.props.onAddMovie(this.state.movieName)
  }
  render() {
    return (<div>
      <MovieInput
        movieName={this.state.movieName}
        onChange={(evt) => this.setState({movieName: evt.target.value})}
        onAddMovie={() => this.handleAddMovie()}
      />
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
    onAddMovie: (movieName) => {
      dispatch({
        type: 'ADD_MOVIE',
        name: movieName,
      });
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieManager);
