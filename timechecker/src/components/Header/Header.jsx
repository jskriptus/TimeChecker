import React from 'react';
import { Link } from 'react-router-dom';
import { logo, setting, info } from '../../assets/img';
import './header.css';

function Header() {
    return (
        <header className="header">
            <nav className="navigation">
                <div className="info__link">
                    <Link to="/info">
                        <img width="38" src={info} alt="Информация" />
                    </Link>
                </div>
                <div className="home__link">
                    <Link to="/">
                        <img width="60" src={logo} alt="Главная" />
                    </Link>
                </div>
                <div className="setting__link">
                    <Link to="/setting">
                        <img width="38" src={setting} alt="Настройки" />
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
