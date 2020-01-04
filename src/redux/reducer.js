const initialState = {
  age: 21
};

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

  return state;
}

export default reducer;
