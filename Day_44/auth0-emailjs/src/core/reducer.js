export const initialState = {
  isLogin: false,
  isLoading: false,
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
    default:
      return state;
  }
};
