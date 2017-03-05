import React, { PropTypes, Component } from 'react';

export default class TextField extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { isValid } = this.props;

    return (
      <div className='search-form__row'>
        <label className='search-form__label'>{this.props.label}</label>
        <input name={this.props.name} 
          className={'search-form__input ' + (isValid ? '' : 'search-form__input_error')}
          type='text'
          placeholder={this.props.placeholder} 
          onChange={this.props.onChange} />
      </div>
      );
  }

}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  validation: PropTypes.func,
  onChange: PropTypes.func.isRequired
};