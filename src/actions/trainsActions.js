import { GET_AVAILABLE_TRAINS } from '../constants/trains';
import moment from 'moment';

export const trainActions = (filter) => {
  return {
    type: GET_AVAILABLE_TRAINS,
    filter
  }
}

// Get available trains by requested params
//
// @stationFrom - required station A (start)
// @stationTo - required station B (finish)
// @departureDate - required date to start way
export function getAvailableTrains (stationFrom, stationTo, departureDate) {
  let sortedTrains = testTrains
      .filter(item => filterTrains(item, stationFrom, stationTo, departureDate))
      .sort((prev, next) => sortByDate(prev, next));

  return dispatch => {
      dispatch({
        type: GET_AVAILABLE_TRAINS,
        trains: sortedTrains
      });
    };
}

// Filter trains by required stations
//
// @item - item from server collection
// @stationFrom - required station A (start)
// @stationTo - required station B (finish)
// @departureDate - required date to start way
function filterTrains(item, stationFrom, stationTo, departureDate) {
  let routeIsExist = 
    item.stationFrom.toLowerCase() == stationFrom.toLowerCase() &&
    item.stationTo.toLowerCase() == stationTo.toLowerCase();

  if(!routeIsExist) {
    return false;
  }

  if(!departureDate) {
    return true;
  }

  if(routeIsExist &&
    item.departureDate.format('DD.MM.YYYY') == 
      departureDate) {
    return true;
  }

  return false;
}

// ASC sort by date
function sortByDate(prev, next){
  return moment(prev) > moment(next);
}

// Test array
let testTrains = [
  {title: '107Ж', stationFrom: 'Москва', stationTo: 'Самара', departureDate: moment().add(1, 'h'), price: 3200 },
  {title: '212М', stationFrom: 'Москва', stationTo: 'Самара', departureDate: moment().add(2, 'h'), price: 3600 },
  {title: '576М', stationFrom: 'Москва', stationTo: 'Самара', departureDate: moment().add(3, 'h'), price: 2800 },
  {title: '107Ж', stationFrom: 'Москва', stationTo: 'Самара', departureDate: moment().add(4, 'h'), price: 4800 },
  {title: '212М', stationFrom: 'Москва', stationTo: 'Самара', departureDate: moment().add(1, 'd'), price: 4200 },
  {title: '240Н', stationFrom: 'Москва', stationTo: 'Новосибирск', departureDate: moment().add(1, 'd'), price: 4200 },
  {title: '240Н', stationFrom: 'Москва', stationTo: 'Новосибирск', departureDate: moment().add(2, 'd').add(1, 'h'), price: 3500 },
  {title: '240Н', stationFrom: 'Москва', stationTo: 'Новосибирск', departureDate: moment().add(2, 'd'), price: 3200 },
  {title: '576М', stationFrom: 'Москва', stationTo: 'Самара', departureDate: moment().add(1, 'd').add(1, 'h'), price: 2200 },
  {title: '132У', stationFrom: 'Москва', stationTo: 'Самара', departureDate: moment().add(1, 'd').add(2, 'h'), price: 2400 },
  {title: '032У', stationFrom: 'Москва', stationTo: 'Самара', departureDate: moment().add(1, 'd').add(3, 'h'), price: 3200 },
];