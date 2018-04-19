import moment from 'moment';
import axios from 'axios';

const authToken = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZDRjZDMwYTE4YmRjMjVhOTI3YjFkNyIsImlhdCI6MTUyNDEzNzkzNiwiZXhwIjoxNTI0MjI3OTM2fQ.60W18MerB3TTYQ3GhxlXDN0JOOt6lkumEsIzjAYHsNk';
axios.defaults.baseURL = 'https://serene-brook-51871.herokuapp.com';
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
  config.headers.Authorization = `Bearer ${token}`;
  return config;
}, function (error) {
  return Promise.reject(error);
});

const accountBookId = '5ad4cd33a18bdc25a927b1d8';
const formatPattern = 'YYYYMMDD';

export const SET_DATE = 'SET_DATE';
export const FETCH_ACCOUNTS_REQUEST = 'FETCH_ACCOUNTS_REQUEST';
export const FETCH_ACCOUNTS_SUCCESS = 'FETCH_ACCOUNTS_SUCCESS';
export const FETCH_ACCOUNTS_FAILURE = 'FETCH_ACCOUNTS_FAILURE';
export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const FETCH_CURRENT_ACCOUNT_REQUEST = 'FETCH_CURRENT_ACCOUNT_REQUEST';
export const FETCH_CURRENT_ACCOUNT_SUCCESS = 'FETCH_CURRENT_ACCOUNT_SUCCESS';
export const FETCH_CURRENT_ACCOUNT_FAILURE = 'FETCH_CURRENT_ACCOUNT_FAILURE';
export const SAVE_ACCOUNT_REQUEST = 'SAVE_ACCOUNT_REQUEST';
export const SAVE_ACCOUNT_SUCCESS = 'SAVE_ACCOUNT_SUCCESS';
export const SAVE_ACCOUNT_FAILURE = 'SAVE_ACCOUNT_FAILURE';
export const UPDATE_ACCOUNT_REQUEST = 'UPDATE_ACCOUNT_REQUEST';
export const UPDATE_ACCOUNT_SUCCESS = 'UPDATE_ACCOUNT_SUCCESS';
export const UPDATE_ACCOUNT_FAILURE = 'UPDATE_ACCOUNT_FAILURE';
export const DELETE_ACCOUNT_REQUEST = 'DELETE_ACCOUNT_REQUEST';
export const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS';
export const DELETE_ACCOUNT_FAILURE = 'DELETE_ACCOUNT_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


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

function fetchCurrentAccountRequest() {
  return {
    type: FETCH_CURRENT_ACCOUNT_REQUEST
  };
};

function fetchCurrentAccountSuccess(currentAccount) {
  return {
    type: FETCH_CURRENT_ACCOUNT_SUCCESS,
    currentAccount,
  };
};

function fetchCurrentAccountfailure(error) {
  return {
    type: FETCH_CURRENT_ACCOUNT_FAILURE,
    error,
  };
};

export function fetchCurrentAccount(id) {
  return (dispatch) => {
    dispatch(fetchCurrentAccountRequest());
    axios.get(`/api/account/${id}`)
      .then((res) => {
        dispatch(fetchCurrentAccountSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchCurrentAccountfailure(error));
      });
  }
};

function saveAccountRequest() {
  return {
    type: SAVE_ACCOUNT_REQUEST
  };
};

function saveAccountSuccess(account) {
  return {
    type: SAVE_ACCOUNT_SUCCESS,
    account,
  };
};

function saveAccountfailure(error) {
  return {
    type: SAVE_ACCOUNT_FAILURE,
    error,
  };
};

export function saveAccount(account) {
  return (dispatch) => {
    dispatch(saveAccountRequest());
    return axios.post('/api/account', account)
      .then((res) => {
        dispatch(saveAccountSuccess(res.data));
      })
      .catch((error) => {
        dispatch(saveAccountfailure(error));
      });
  }
};

function updateAccountRequest() {
  return {
    type: UPDATE_ACCOUNT_REQUEST
  };
};

function updateAccountSuccess(account) {
  return {
    type: UPDATE_ACCOUNT_SUCCESS,
    account,
  };
};

function updateAccountfailure(error) {
  return {
    type: UPDATE_ACCOUNT_FAILURE,
    error,
  };
};

export function updateAccount(data) {
  const id = data._id;
  const account = {
    amount: data.amount,
    category: data.category,
    description: data.description,
    rating: data.rating,
  }
  return (dispatch) => {
    dispatch(updateAccountRequest());
    return axios.put(`/api/account/${id}`, account)
      .then((res) => {
        dispatch(updateAccountSuccess(res.data));
      })
      .catch((error) => {
        dispatch(updateAccountfailure(error));
      });
  }
};

function deleteAccountRequest() {
  return {
    type: DELETE_ACCOUNT_REQUEST
  };
};

function deleteAccountSuccess(account) {
  return {
    type: DELETE_ACCOUNT_SUCCESS,
    account,
  };
};

function deleteAccountfailure(error) {
  return {
    type: DELETE_ACCOUNT_FAILURE,
    error,
  };
};

export function deleteAccount(id) {
  return (dispatch) => {
    dispatch(deleteAccountRequest());
    return axios.delete(`/api/account/${id}`)
      .then((res) => {
        dispatch(deleteAccountSuccess(res.data));
      })
      .catch((error) => {
        dispatch(deleteAccountfailure(error));
      });
  }
};

function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
};

function loginSuccess(login) {
  return {
    type: LOGIN_SUCCESS,
    login,
  };
};

function loginfailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
};

export function login(loginData) {
  return (dispatch) => {
    dispatch(loginRequest());
    return axios.post('/auth/login', loginData)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        dispatch(loginSuccess(res.data));
      })
      .catch((error) => {
        dispatch(loginfailure(error));
      });
  }
};