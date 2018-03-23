import moment from 'moment';

export const SET_DATE = 'SET_DATE';
export const SET_FOCUSED = 'SET_FOCUSED';
export const PREV_DATE = 'PREV_DATE';
export const NEXT_DATE = 'NEXT_DATE';

export const setDate = (date) => {
  return {type: SET_DATE, date};
}

export const setFocused = (focused) => {
  return {type: SET_FOCUSED, focused};
}

export const prevDate = () => {
  return {type: PREV_DATE};
}

export const nextDate = () => {
  return {type: NEXT_DATE};
}