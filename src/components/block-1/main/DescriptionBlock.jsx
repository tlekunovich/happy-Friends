import React from 'react';
import style from './DescriptionBlock.module.css';
import Slider from './Slider.jsx';


const DescriptionBlock = () => {
    return (
        <div>
            <div className={style.descriptionBlock}>
                <div className={style.title1}>Твой лучший друг<br /> с доставкой на дом</div>
                <div className={style.title2}>Онлайн питомник - верный друг в<br /> несколько кликов!</div>
                <button onClick={null} className={style.btnAllFriends}>Посмотреть друзей</button>
            </div>
            
            <Slider />
        </div>
    )
}


export default DescriptionBlock;