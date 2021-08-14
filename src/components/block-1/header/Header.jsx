import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import style from './Header.module.css';
import Cart from './Cart';


const Header = () => {
    return (
        <div className={style.header}>
           <Logo />
           <Navbar />
           <Cart />
        </div>
    )
}


export default Header;