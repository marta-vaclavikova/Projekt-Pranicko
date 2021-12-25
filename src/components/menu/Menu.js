import React from "react";
import {
    Routes,
    Route,
    Link
    }  from 'react-router-dom';
import './style.css';

const Menu = () => (
    <nav className="menu">
        <Link className="menu__link menu__link--active" to="/">Úvod</Link>
        <Link className="menu__link" to="/card/create">Vytvořit přáníčko</Link>
        <Link className="menu__link" to="/card/pickup">Vyzvednout</Link>
    </nav>
);

export default Menu;