const initialState = {
  remainTimes: 10,
};

export const remainTimesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "remain/update": {
      return { ...state, remainTimes: Math.ceil(Math.log2(action.payload)) };
    }
    case "remain/decrease": {
      return {
        ...state,
        remainTimes: state.remainTimes - 1 > 0 ? state.remainTimes - 1 : 0,
      };
    }
    case "remain/reset": {
      return { ...state, remainTimes: action.payload };
    }
    default: {
      return state;
    }
  }
};
