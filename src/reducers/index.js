import { combineReducers } from 'redux';
import { SET_DATE } from '../actions';
import moment from 'moment';

const datePicker = (state={date: moment(), focused:false}, action) => {
  switch (action.type) {
    case SET_DATE:
      return {...state, date: action.date};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  datePicker
});

export default rootReducer;