const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    default:
      return "DEFAULT";
  }
};

export default reducer;
