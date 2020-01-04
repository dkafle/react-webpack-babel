const initialState = {
  age: 21
};

const reducer = (state = initialState, action) => {
  console.log(action);
  const newState = {
    age: state.age,
  };

  return newState;
}

export default reducer;
