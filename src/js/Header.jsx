import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className='container container--wide header__container'>
          <div className='header__change-avatar'>
            <label className='profile__input-label' htmlFor='inputAvatar'>
              <img
                className='profile__icon'
                src={require('../img/profile/changeAvatarIcon.png')}
                alt=''
              />
            </label>
            <input
              className='profile__input'
              id='inputAvatar'
              type='file'
            ></input>
          </div>
          <div className='header__publish'>
            <label className='header__input-label' htmlFor='inputProfile'>
              <img
                className='header__upload'
                src={require('../img/header/upload.svg')}
                alt='Photo Camera'
              />
            </label>
            <input id='inputProfile' className='header__input' type='file' />
          </div>
          <nav className='header__nav'>
            <ul className='header__list'>
              <li className='header__item'>
                <input
                  id='sortByPopular'
                  type='radio'
                  name='header__input'
                  className='header__input sort-by-popular'
                  checked
                />
                <label for='sortByPopular' className='header__label'>
                  Популярные
                </label>
              </li>
              <li className='header__item'>
                <input
                  id='sortByRandom'
                  type='radio'
                  name='header__input'
                  className='header__input sort-by-random'
                />
                <label for='sortByRandom' className='header__label'>
                  Случайные
                </label>
              </li>
              <li className='header__item'>
                <input
                  id='sortByComments'
                  name='header__input'
                  type='radio'
                  className='header__input sort-by-comments'
                />
                <label for='sortByComments' className='header__label'>
                  Обсуждаемые
                </label>
              </li>
            </ul>
          </nav>
          <form className='header__search'>
            <input
              className='header__search-text'
              type='text'
              placeholder='Поиск'
            />
          </form>
          <div className='header__wrapper'>
            <button
              type='button'
              className='header__button header__button--login'
            >
              Войти
            </button>
            <a
              className='header__link header__link--registration'
              href='http://localhost:3000/signup.html'
            >
              <button
                type='button'
                className='header__button header__button--registration'
              >
                Зарегистрироваться
              </button>
            </a>
          </div>
          <div className='header__user header__user--hidden'>
            <img
              src='./img/header/login.png'
              alt='login'
              className='header__icon'
            />
            <p className='header__username'></p>
            <a className='header__exit' href='.'>
              <img
                className='header__icon header__icon--exit'
                src='./img/header/logout.png'
                alt=''
              />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
