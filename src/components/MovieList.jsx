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
    const movieName = this.state.movieName;
    this.props.onAddMovie({
      type: 'ADD_MOVIE',
      name: movieName,
    });
  }

  updateMyState(evt) {
    this.setState({ movieName: evt.target.value })
  }

  render() {
    return (<div>
      <MovieInput
        movieName={this.state.movieName}
        onChange={(evt) => this.updateMyState(evt)}
        onAddMovie={() => this.handleAddMovie()}
      />
      <MovieList movies={this.props.movies} />
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
    onAddMovie: data => dispatch(data),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieManager);
