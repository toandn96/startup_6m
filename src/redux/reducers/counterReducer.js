import { counterContants } from "../contants";

let initialState = {
  counterRedux: {
    fetching: false,
    error: null,
    counter: 1
  },
  counterApi: {
    fetching: false,
    error: null,
    data: 0
  }
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case counterContants.COUNTER_DECREMENT:
      return { ...state, counterRedux: { counter: action.payload.counter } }
    case counterContants.COUNTER_INCREMEMT:
      return { ...state, counterRedux: { counter: action.payload.counter } }
    case counterContants.SET_COUNTER_API_SUCCESS:
      return { ...state, counterRedux: { counter: action.payload.counter } }
    case counterContants.COUNTER_INCREMEMT:
      return { ...state, counterRedux: { counter: action.payload.counter } }
    default:
      return state;
  }
}