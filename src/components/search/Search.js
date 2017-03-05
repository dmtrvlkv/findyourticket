import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { handleSearch } from '../../actions/searchActions';
import SearchDatepicker from './SearchDatepicker';
import moment from 'moment';
import TextField from '../common/TextField';
import validations from '../../utils/validations';
import { browserHistory } from 'react-router';


class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      stationFrom: '',
      stationTo: '',
      departureDate: null,

      stationFromIsValid: false,
      stationToIsValid: false,

      isSubmited: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  render() {

    return (
      <div className='search-panel'>
        <h2 className='search-panel__title'>Поиск поездов</h2>
        <form className='search-form'
          onSubmit={this.onSubmit}>

          <TextField name='stationFrom'
            label='Станция отправления'
            placeholder='Москва'
            onChange={this.onChange}
            isValid={this.state.isSubmited ? this.state.stationFromIsValid: true} />

          <TextField name='stationTo'
            label='Станция прибытия'
            placeholder='Самара'
            onChange={this.onChange}
            isValid={this.state.isSubmited ? this.state.stationToIsValid: true} />

          <div className='search-form__row'>
            <label className='search-form__label'>Дата отправления</label>
            <SearchDatepicker
              name='departureDate' 
              minDate={moment()}
              onChangeDate={this.changeDate} />
          </div>
          <button className='search-form__button search-form__button_block'
            type='submit'>Поиск</button>
        </form>
      </div>
      );
  }

  onChange(e){
    this.setState({ [e.target.name] : e.target.value });
    
    switch(e.target.name){
      case 'stationFrom' : 
        this.setState({stationFromIsValid: validations.isOnlySymbols(e.target.value)}); 
        break;
      case 'stationTo' : 
        this.setState({stationToIsValid: validations.isOnlySymbols(e.target.value)}); 
        break;
      default: break;
    }

  }

  onSubmit(e){
    e.preventDefault();
    this.setState({isSubmited: true});

    if(!this.formIsValid()){
      return;
    }

    let navigationDate = this.state.departureDate ?
      '/' + this.state.departureDate.format('DD.MM.YYYY') :
      '';

    browserHistory.push(`/${this.state.stationFrom}` +
      `/${this.state.stationTo}` + navigationDate);
    
    this.props.handleSearch({
      stationFrom: this.state.stationFrom,
      stationTo: this.state.stationTo,
      departureDate: this.state.departureDate
    });
  }

  changeDate(date) {
    this.setState({departureDate: date})
  }

  formIsValid(){
    return this.state.stationFromIsValid && this.state.stationToIsValid;
  }

}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default connect(null, { handleSearch })(Search);