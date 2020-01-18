import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  toggleClass = () => {
    const e = document.querySelector('#toggle');
    if (e.classList.contains('hide')) {
      e.classList.remove('hide');
      e.classList.add('show');
    } else {
      e.classList.remove('show');
      e.classList.add('hide');
    }
  }

  render() {
    return (
      <header>
        <div className="container h-flex">
          <Link to="/" className="logo">
            <img src={logo} alt="logo"></img>
          </Link>
          <nav className="links">
            <ul>
              <li>
                <Link to="/" className="menu__links">Лента</Link>
              </li>
              <li>
                <Link to="/profile/" className="menu__links">Профиль</Link>
              </li>
              <li>
                <Link to="/admin/" className="menu__links">Админка</Link>
              </li>
              <li>
                <button className="toggleClass" onClick={this.toggleClass}></button>
              </li>
            </ul>
          </nav>
        </div>
      </header >
    )
  }
}