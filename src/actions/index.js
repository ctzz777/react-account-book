import moment from 'moment';

const formatPattern = 'YYYYMMDD';

export const SET_DATE = 'SET_DATE';
export const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS';

export const setDate = date => {
  return {
    type: SET_DATE,
    date,
  };
}

export const receiveAccounts = date => {
  const formatDate = date.format(formatPattern);
  console.log(formatDate);
  const accounts = {
    '20180327': [
      {_id: 1, category: {name: 'breakfast'}, amount: 100},
      {_id: 2, category: {name: 'MRT'}, amount: 25}
    ],
    '20180326': [
      {_id: 3, category: {name: 'lunch'}, amount: 400},
      {_id: 4, category: {name: 'train'}, amount: 18}
    ],
    '20180328': [
      {_id: 5, category: {name: 'dinner'}, amount: 800},
      {_id: 6, category: {name: 'ubike'}, amount: 5}
    ],
  }
  return {
    type: RECEIVE_ACCOUNTS,
    accounts: accounts[formatDate] ? accounts[formatDate] : [],
  };
}