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
      {props.movies.map((movie, i) => <li key={i}>
        <span>{movie.name}</span>
        <span><a href="#" onClick={(evt) => {
          evt.preventDefault();
          props.onRemoveMovie(movie.id);
        }
        }>
          {'[Del]'}
        </a></span>
      </li>)}
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

  handleRemoveMovie(movieId) {
    this.props.onRemoveMovie({
      type: 'REMOVE_MOVIE',
      id: movieId,
    });
  }

  render() {
    return (<div>
      <MovieInput
        movieName={this.state.movieName}
        onChange={(evt) => this.setState({ movieName: evt.target.value })}
        onAddMovie={() => this.handleAddMovie()}
      />
      <MovieList
        movies={this.props.movies}
        onRemoveMovie={(movieId) => this.handleRemoveMovie(movieId)}
      />
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
    onRemoveMovie: data => dispatch(data),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieManager);
