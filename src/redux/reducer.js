const initialState = {
  age: 21,
  movies: [],
  isFetching: false,
  hasFetchingError: false,
  giffy: {},
};

let movieId = 0;

const reducer = (state = initialState, action) => {
  if (action.type === 'AGE_UP') {
    const newState = {
      age: ++state.age,
    }
    return newState;
  }
  if (action.type === 'AGE_DOWN') {
    const newState = {
      age: --state.age,
    };
    return newState;
  }

  if (action.type === 'ADD_MOVIE') {
    const newState = Object.assign({}, state);
    newState.movies.push({
      name: action.name,
      id: ++movieId,
    });
    console.log(newState);
    return newState;
  }

  if (action.type === 'REMOVE_MOVIE') {
    const newState = Object.assign({}, state);
    newState.movies = newState.movies.filter(m => m.id !== action.id)
    return newState;
  }

  if (action.type === 'GET_GIF_STARTED') {
    console.log('GET_GIF_STARTED');
    const newState = Object.assign({}, state);
    newState.isFetching = true;
    newState.hasFetchingError = false;
    newState.giffy = {};
    return newState;
  }

  if (action.type === 'GET_GIF_SUCCESS') {
    console.log('GET_GIF_STARTED');
    const newState = Object.assign({}, state);
    newState.isFetching = false;
    newState.hasFetchingError = false;
    newState.giffy = action.data;
    return newState;
  }

  if (action.type === 'GET_GIF_FAILURE') {
    console.log('get error');
    const newState = Object.assign({}, state);
    newState.isFetching = false;
    newState.hasFetchingError = true;
    newState.giffy = {};
    return newState;
  }

  return state;
}

export default reducer;
