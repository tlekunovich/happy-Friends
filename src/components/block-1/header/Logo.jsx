import React from 'react';
import style from './Logo.module.css';
import logotype from './../../../img/logo.svg';

const Logo = () => {
    return (
    
        <div className={style.logo}>
            <a href='#!'>
              <img src={logotype} alt='logotype' className={style.logotype}></img>
            </a>
            <div className={style.title}>Happy Friends</div>
          </div>
    )
}


export default Logo;