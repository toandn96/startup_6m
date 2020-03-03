import { counterContants } from "../contants";

export const incrementCounter = (counter) => {
  return ({
    type: counterContants.COUNTER_INCREMEMT,
    payload: {
      counter
    }
  })
}
export const decrementCounter = (counter) => ({
  type: counterContants.COUNTER_DECREMENT,
  payload: {
    counter
  }
})

export const setCounterApi = (counter) => {
  return ({
    type: counterContants.SET_COUNTER_API,
    payload: {
      counter
    }
  })
}