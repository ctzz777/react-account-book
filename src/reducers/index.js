import { combineReducers } from 'redux';
import { SET_DATE, FETCH_ACCOUNTS_REQUEST, FETCH_ACCOUNTS_SUCCESS, FETCH_ACCOUNTS_FAILURE } from '../actions';
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
    case FETCH_ACCOUNTS_SUCCESS:
    case FETCH_ACCOUNTS_SUCCESS:
      return action.accounts;
    case FETCH_ACCOUNTS_FAILURE:
      return [];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  date,
  accounts,
});

export default rootReducer;