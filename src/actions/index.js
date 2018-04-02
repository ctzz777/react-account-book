import moment from 'moment';
import axios from 'axios';

const authToken = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYjI5MjgwZTU3MWEyMTY5MzNmZDIxNCIsImlhdCI6MTUyMjY4MTUzNCwiZXhwIjoxNTIyNzcxNTM0fQ.os22MEmXsfFTERxuZNd3pd1QBCIekmxBryLoo-BfklI';
axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.common['Authorization'] = authToken;

const accountBookId = '5ab29280e571a216933fd215';
const formatPattern = 'YYYYMMDD';

export const SET_DATE = 'SET_DATE';
export const FETCH_ACCOUNTS_REQUEST = 'FETCH_ACCOUNTS_REQUEST';
export const FETCH_ACCOUNTS_SUCCESS = 'FETCH_ACCOUNTS_SUCCESS';
export const FETCH_ACCOUNTS_FAILURE = 'FETCH_ACCOUNTS_FAILURE';
export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';


export function setDate(date) {
  return {
    type: SET_DATE,
    date,
  };
};

function fetchAccountsRequest() {
  return {
    type: FETCH_ACCOUNTS_REQUEST
  };
};

function fetchAccountsSuccess(accounts) {
  return {
    type: FETCH_ACCOUNTS_SUCCESS,
    accounts,
  };
};

function fetchAccountsfailure(error) {
  return {
    type: FETCH_ACCOUNTS_FAILURE,
    error,
  };
};

export function fetchAccounts(date) {
  return (dispatch) => {
    const formatDate = date.format(formatPattern);
    dispatch(fetchAccountsRequest());
    axios.get(`/api/account/accountBook/${accountBookId}/date/${formatDate}`)
      .then((res) => {
        dispatch(fetchAccountsSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchAccountsfailure(error));
      });
  }
};

function fetchCategoriesRequest() {
  return {
    type: FETCH_CATEGORIES_REQUEST
  };
};

function fetchCategoriesSuccess(categories) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories,
  };
};

function fetchCategoriesfailure(error) {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    error,
  };
};

export function fetchCategories() {
  return (dispatch) => {
    dispatch(fetchCategoriesRequest());
    axios.get('/api/category')
      .then((res) => {
        dispatch(fetchCategoriesSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchCategoriesfailure(error));
      });
  }
};