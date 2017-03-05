import isEmpty from 'lodash/isEmpty';
import { SET_REQUESTED_TRAINS } from '../constants/search';

const initialState = {
  failRequest: false,
  trains: []
};

const search = (state = initialState, action = {}) => {

  switch(action.type) {
    case SET_REQUESTED_TRAINS:
      return {
        ...state,
        failRequest: !isEmpty(action.error),
        trains: action.trains
      };
    default: return state;
  }
};

export default search;