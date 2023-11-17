export const initialState = {
  isLogin: false,
  isLoading: false,
  cart: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "login/logged": {
      return { ...state, isLogin: true };
    }
    case "loading/show": {
      return { ...state, isLoading: true };
    }
    case "loading/hidden": {
      return { ...state, isLoading: false };
    }
    case "cart/add": {
      return { ...state, cart: action.payload };
    }
    case "cart/pay": {
      return { ...state, cart: [] };
    }
    default:
      return state;
  }
};

console.log(initialState);
