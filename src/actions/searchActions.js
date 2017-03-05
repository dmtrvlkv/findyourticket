import { SET_REQUESTED_TRAINS } from '../constants/search';

export function handleSearch() {
  return dispatch => {
      dispatch({
        type: SET_REQUESTED_TRAINS,
        error: null,
        trains: []
      });
    };
}