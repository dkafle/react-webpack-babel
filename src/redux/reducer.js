const initialState = {
  age: 21,
  movies: [],
};

let movieId = 0;

const reducer = (state = initialState, action) => {
  if (action.type === 'AGE_UP') {
    const newState = {
      ...state,
      age: ++state.age,
    }
    return newState;
  }
  if (action.type === 'AGE_DOWN') {
    const newState = {
      ...state,
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

  return state;
}

export default reducer;
