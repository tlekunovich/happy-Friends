import React from 'react';
import style from './Navbar.module.css';
import phone from './../../../img/phone 1.svg';

const Navbar = () => {

    const navbar = [
        { title: 'Главная', routeName: '#', img: '' },
        { title: 'Друзья', routeName: '#', img: '' },
        { title: 'О сервисе', routeName: '#', img: '' },
        { title: 'Контакты', routeName: '#', img: '' },
        { title: '+375 29 3333333', routeName: '#', img: phone },
    ]


    return (
        <nav className={style.navbar}>
            {navbar.map((elem) => {
                return (
                    <ul className={style.nav}>
                      <li>  
                          <a href={elem.routeName} className={style.navItem}> 
                             <img src={elem.img} alt=''/> 
                             {elem.title} 
                          </a>
                       </li>   
                    </ul>)
            })
            }

        </nav>
    )
}


export default Navbar;