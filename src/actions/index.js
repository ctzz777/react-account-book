import moment from 'moment';
import axios from 'axios';

const authToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYjI5MjgwZTU3MWEyMTY5MzNmZDIxNCIsImlhdCI6MTUyMjI1NDA5MywiZXhwIjoxNTIyMzQ0MDkzfQ.ljpnzfbDNOEA8pWRVczhg28Y3lDLybSv46k_uyka3n4';
axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.common['Authorization'] = authToken;

const accountBookId = '5ab29280e571a216933fd215';
const formatPattern = 'YYYYMMDD';

export const SET_DATE = 'SET_DATE';
export const FETCH_ACCOUNTS_REQUEST = 'FETCH_ACCOUNTS_REQUEST';
export const FETCH_ACCOUNTS_SUCCESS = 'FETCH_ACCOUNTS_SUCCESS';
export const FETCH_ACCOUNTS_FAILURE = 'FETCH_ACCOUNTS_FAILURE';

export const setDate = date => {
  return {
    type: SET_DATE,
    date,
  };
}

const fetchAccountsRequest = () => {
  return {
    type: FETCH_ACCOUNTS_REQUEST
  };
};

const fetchAccountsSuccess = (accounts) => {
  return {
    type: FETCH_ACCOUNTS_SUCCESS,
    accounts,
  };
};

const fetchAccountsfailure = (error) => {
  return {
    type: FETCH_ACCOUNTS_FAILURE,
    error,
  };
};

export const fetchAccounts = date => dispatch => {
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