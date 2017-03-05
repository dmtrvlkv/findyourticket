import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import '../styles/app.css';

class MainPage extends Component {
  render() {
    return (
      <div className='main-page'>
        <h1 className='main-page__title'>Главная страница</h1>
        <p>Доступные маршруты:</p>
        <ul>
          <li>Москва - Самара</li>
          <li>Москва - Новосибирск</li>
        </ul>
        <p>Доступные даты:</p>
        <ul>
          <li>сегодня</li>
          <li>завтра</li>
          <li>послезавтра</li>
        </ul>
        <p className='author'>Дмитрий Волков</p>
      </div>
    );
  }
}

export default MainPage;