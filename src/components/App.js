import React from 'react';
import 'normalize.css/normalize.css';
import '../styles/app.css';
import Search from './search/Search';

class App extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <hr className='hr hr_light' />
        {this.props.children}
      </div>
    );
  }
}

export default App;