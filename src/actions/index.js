import moment from 'moment';

export const SET_DATE = 'SET_DATE';
export const SET_FOCUSED = 'SET_FOCUSED';

export const setDate = (date) => {
  return {type: SET_DATE, date};
}

export const setFocused = (focused) => {
  return {type: SET_FOCUSED, focused};
}