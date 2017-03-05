import React, { PropTypes, Component } from 'react';
import TrainRow from './TrainRow';
import { connect } from 'react-redux';
import * as trainsActions from '../../actions/trainsActions';
import { bindActionCreators } from 'redux';


class TrainList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.updateProps(this.props.params);
  }

  componentWillReceiveProps(nextProp){
    if(JSON.stringify(nextProp.params) != JSON.stringify(this.props.params)){
      this.updateProps(nextProp.params);
      return false;
    }

    return true;
  }

  render() {
    const { trains } = this.props.trains;

    return (
      <div className='search-result'>
        <h3 className='search-result__title'>Результаты поиска</h3>
        { trains && trains.length > 0 ? 
          this.resultRender(trains): 
          this.notFoundRender() }
      </div>
    );
  }

  resultRender(trains){
    return (
      <table>
          <thead>
            <tr>
              <td>Поезд</td>
              <td>Маршрут</td>
              <td>Отправление</td>
              <td>Цена</td>
            </tr>
          </thead>
          <tbody>
            {trains.map((item, i) => {
              return (<TrainRow key={i} train={item} />);
            })}
          </tbody>
        </table>
      );
  }

  notFoundRender(){
    return (
      <h4>Ничего не найдено</h4>
      );
  }

  updateProps(params){
    const { getAvailableTrains } = this.props.trainsActions;
    getAvailableTrains(params.stationFrom, params.stationTo, params.departureDate);
  }
}

TrainList.propTypes = {
  departureDate: PropTypes.object,
  trainsActions: PropTypes.shape({
    getAvailableTrains: PropTypes.func.isRequired
  })
}

const mapStateToProps = (state) => {
  return {
    trains: state.trains
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    trainsActions: bindActionCreators(trainsActions, dispatch)
  };
}

export default connect( mapStateToProps, mapDispatchToProps )(TrainList);