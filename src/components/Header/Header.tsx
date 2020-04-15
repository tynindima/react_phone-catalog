import React, { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles/header.scss';
import apple from './img/Apple.svg';
import drocher from './img/Drocher.svg';
import heart from './img/heart.svg';
import bag from './img/bag.svg';

export const Header: FC = () => {
  return (
    <header className="header">
      <nav className="header__search-box">
        <Link className="header__logo logo" to="/">
          <img className="logo__img" src={apple} alt="apple" />
          <img className="logo__img" src={drocher} alt="drocher" />
        </Link>
        <ul className="header__list list-menu">
          <li className="list-menu__item">
            <NavLink
              className="list-menu__link"
              activeClassName="list-menu__link-active"
              to="/"
              exact
            >
              Home
            </NavLink>
          </li>
          <li className="list-menu__item">
            <NavLink
              className="list-menu__link"
              activeClassName="list-menu__link-active"
              to="/phone"
            >
              Phones
            </NavLink>
          </li>
          <li className="list-menu__item">
            <a className="list-menu__link" href="/">Tablets</a>
          </li>
          <li className="list-menu__item">
            <a className="list-menu__link" href="/">Accessories</a>
          </li>
        </ul>
      </nav>
      <div className="header__search-box">
        <form className="header__search search">
          <input
            className="search__input"
            type="text"
            placeholder="Search..."
          />
          <button type="submit" className="search__img"> </button>
        </form>
        <button type="button" className="header__emblem-box emblem-box">
          <img className="emblem-box__img" src={heart} alt="heart" />
        </button>
        <button type="button" className="header__emblem-box emblem-box">
          <img className="emblem-box__img" src={bag} alt="bag" />
        </button>
      </div>
    </header>
  );
};
