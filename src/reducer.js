export const initialState = {
  user: {},
  logged: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      // Logic for adding item to basket
      return { ...state, logged: action.logged, user: action.user };
    case "LOGOUT":
      return { ...state, logged: false, user: action.user };
    default:
      return state;
  }
};

export default reducer;
