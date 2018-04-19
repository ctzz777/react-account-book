import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { SET_DATE, FETCH_ACCOUNTS_REQUEST, FETCH_ACCOUNTS_SUCCESS, FETCH_ACCOUNTS_FAILURE, SET_SELECTED_CATEGORY, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from '../actions';
import { FETCH_CURRENT_ACCOUNT_REQUEST, FETCH_CURRENT_ACCOUNT_SUCCESS, FETCH_CURRENT_ACCOUNT_FAILURE } from '../actions';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';
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
    case FETCH_ACCOUNTS_REQUEST:
      return state;
    case FETCH_ACCOUNTS_SUCCESS:
      return action.accounts;
    case FETCH_ACCOUNTS_FAILURE:
      return [];
    default:
      return state;
  }
};

const loading = (state=false, action) => {
  switch (action.type) {
    case FETCH_ACCOUNTS_REQUEST:
    case FETCH_CURRENT_ACCOUNT_REQUEST:
      return true;
    case FETCH_ACCOUNTS_SUCCESS:
    case FETCH_ACCOUNTS_FAILURE:
    case FETCH_CURRENT_ACCOUNT_SUCCESS:
    case FETCH_CURRENT_ACCOUNT_FAILURE:
      return false;
    default:
      return state; 
  }
};

const categories = (state=[], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return state;
    case FETCH_CATEGORIES_SUCCESS:
      return action.categories;
    case FETCH_CATEGORIES_FAILURE:
      return [];
    default:
      return state;
  }
}

const currentAccount = (state={}, action) => {
  switch (action.type) {
    case FETCH_CURRENT_ACCOUNT_REQUEST:
      return state;
    case FETCH_CURRENT_ACCOUNT_SUCCESS:
      return action.currentAccount;
    case FETCH_CURRENT_ACCOUNT_FAILURE:
      return {};
    default:
      return state;
  }
}

const login = (state={}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
      return action.login;
    case LOGIN_FAILURE:
      return {};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  date,
  accounts,
  loading,
  categories,
  currentAccount,
  login,
  form: formReducer,
});

export default rootReducer;