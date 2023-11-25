const initialState = {
  histories: localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [],
  history: [],
  isDelete: false,
};

export const historiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "histories/update": {
      const temp = [...state.histories, action.payload];
      localStorage.setItem("data", JSON.stringify(temp));
      return { ...state, histories: temp };
    }
    case "histories/clear": {
      localStorage.removeItem("data");
      return { ...state, histories: [] };
    }
    case "histories/add": {
      return { ...state, history: [...state.history, action.payload] };
    }
    case "histories/remove": {
      return { ...state, history: [] };
    }
    case "delete/toggle": {
      return { ...state, isDelete: !state.isDelete };
    }
    default: {
      return state;
    }
  }
};
