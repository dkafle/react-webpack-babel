import React from 'react';
import { connect } from 'react-redux';

const MovieInput = (props) => (
  <div>
    <input type="text"
      value={props.movieName}
      onKeyDown={props.onKeyDown}
      onChange={props.onChange}
    />
    <button onClick={props.onAddMovie}>Add</button>
  </div>
);

const MovieList = (props) => (
  <div>
    <ul>
      {props.movies.map((movie, i) => <li key={i}>
        <span>{movie.name}</span>
        <span className="delete"><a 
          href="#"
          title="Delete" 
          onClick={(evt) => {
            evt.preventDefault();
            props.onRemoveMovie(movie.id);
          }
        }>
          {'X'}
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
    if(movieName.length < 1) {
      return;
    }
    this.props.onAddMovie({
      type: 'ADD_MOVIE',
      name: movieName,
    });
    this.setState({
      movieName: ''
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
      <h3>Please enter some movies you have seen recently!</h3>
      <MovieInput
        movieName={this.state.movieName}
        onChange={(evt) => {
          const key = evt.target.value;
          this.setState({ movieName: key })
        }}
        onKeyDown={(evt) => {
          if (evt.which === 13) {
            this.handleAddMovie();
          } else if (evt.which === 27) {
            this.setState({ movieName: '' });
          }
        }}
        onAddMovie={() => this.handleAddMovie()}
      />
      <MovieList
        movies={this.props.movies}
        onRemoveMovie={(movieId) => this.handleRemoveMovie(movieId)}
      />
      <h3>Total: {this.props.movies.length}</h3>
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
