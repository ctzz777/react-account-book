import { combineReducers } from 'redux';
import { SET_DATE, SET_FOCUSED ,PREV_DATE, NEXT_DATE} from '../actions';
import moment from 'moment';

const datePicker = (state={date: moment(), focused:false}, action) => {
  switch (action.type) {
    case SET_DATE:
      return {...state, date: action.date};
    case SET_FOCUSED:
      return {...state, focused: action.focused};
    case PREV_DATE:
      const prevDate = state.date.clone().add(-1, 'day');
      return {...state, date: prevDate};
    case NEXT_DATE:
      const nextDate = state.date.clone().add(1, 'day');
      return {...state, date: nextDate};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  datePicker
});

export default rootReducer;