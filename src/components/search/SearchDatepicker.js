import React, { PropTypes, Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export default class SearchDatepicker extends Component {

  constructor() {
    super();
    this.state = { 
      startDate: moment()
    };
  }

  render() {
    const { minDate, 
      name
    } = this.props;

    return <DatePicker
        className='search-form__datepicker'
        placeholderText='Дата отправления'
        dateFormat='DD.MM.YYYY'
        locale='ru-ru'
        minDate={minDate}
        selected={this.state.startDate}
        name={name}
        isClearable={true}
        onChange={this.handleChange.bind(this)} />;
  }

  componentDidMount(){
    this.props.onChangeDate(this.state.startDate);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
    this.props.onChangeDate(date);
  }
  
}

SearchDatepicker.propTypes = {
  minDate: PropTypes.object
};