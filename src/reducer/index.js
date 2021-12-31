const initialState = [];
const reducer = (state = initialState, action) => {
  if (action.type === "ADD_TASK") {
    return [...state, action.payload];
  } else if (action.type === "REMOVE_TASK") {
    return state.filter((x) => x.id !== action.payload.id);
  }
  return state;
};

export default reducer;
