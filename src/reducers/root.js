import { combineReducers } from 'redux';
import search from './search';
import trains from './trains';

export default combineReducers({
  search,
  trains
});