import { combineReducers } from 'redux';
import { SET_DATE, RECEIVE_ACCOUNTS } from '../actions';
import moment from 'moment';

const date = (state=moment(), action) => {
  switch (action.type) {
    case SET_DATE:
      return action.date;
    default:
      return state;
  }
};

const accounts = (state=[], action) => {
  switch (action.type) {
    case RECEIVE_ACCOUNTS:
      return action.accounts;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  date,
  accounts,
});

export default rootReducer;