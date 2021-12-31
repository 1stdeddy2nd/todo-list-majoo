const initialState = [];
const reducer = (state = initialState, action) => {
  if (action.type === "ADD_TASK") {
    return [...state, action.payload];
  } else if (action.type === "REMOVE_TASK") {
    return state.filter((x) => x.id !== action.payload.id);
  } else if (action.type === "EDIT_TASK") {
    return state.map(x => {
      if(x.id === action.payload.id) return action.payload
      else return x
    })
  }
  return state;
};

export default reducer;
