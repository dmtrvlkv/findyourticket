import { GET_AVAILABLE_TRAINS } from '../constants/trains';

const initialState = {
  trains: []
};

const trains = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_AVAILABLE_TRAINS:
      return {
        ...state,
        error: action.error,
        trains: action.trains
      };
    default:
      return state;
  }
};

export default trains;