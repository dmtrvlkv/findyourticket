import React, { PropTypes, Component } from 'react';

export default class TrainRow extends Component {
  constructor(props) {
    super(props);
  }
    
  render() {

    const { title, 
      stationFrom, 
      stationTo, 
      departureDate, 
      price } = this.props.train;

    return (
      <tr>
        <td>{title}</td>
        <td>{stationFrom} - {stationTo}</td>
        <td>{departureDate.format('DD.MM.YYYY HH:mm')}</td>
        <td>{price} руб.</td>
      </tr>
      );
  }
}

TrainRow.propTypes = {
  train: React.PropTypes.shape({
    title: PropTypes.string.isRequired,
    stationFrom: PropTypes.string.isRequired,
    stationTo: PropTypes.string.isRequired,
    departureDate: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired
  })  
};