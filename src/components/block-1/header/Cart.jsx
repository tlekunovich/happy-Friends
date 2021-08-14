import React from 'react';
import style from './Cart.module.css';
import vector1 from './../../../img/Vector 1.svg';
import cart from './../../../img/cart.svg';

const Cart = () => {
    return (
        <div className={style.cart}>
        <div className={style.cartLogo}><img src={cart} alt=''></img></div>
            <div>200 p.</div>
            <div className={style.cartArrow}><img src={vector1} alt=''></img></div>
            <div></div>
     </div>



    )
}


export default Cart;