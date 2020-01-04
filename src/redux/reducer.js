const initialState = {
  age: 21
};

const reducer = (state = initialState, action) => {
  const newState = {
    age: state.age,
  };

  return newState;
}

export default reducer;
