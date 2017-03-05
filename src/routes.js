import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import MainPage from './components/MainPage';
import TrainList from './components/trains/TrainList';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={MainPage} />
    <Route path='/:stationFrom/:stationTo(/:departureDate)' component={TrainList} />
  </Route>
)