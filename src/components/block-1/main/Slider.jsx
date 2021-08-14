import React from 'react';
import style from './Slider.module.css';
import dog from './../../../img/dogSmall.png';
import fish from './../../../img/fish.png';
import arrow1 from './../../../img/Arrow.svg';
import arrow2 from './../../../img/Arrow1.svg';
import vector1 from './../../../img/Vector 2.svg';
import vector2 from './../../../img/Vector 3.svg';
import rect from './../../../img/Rectangle.svg';
import handle from './../../../img/Rectangle 9.svg';


const Slider = () => {

    const arrSlider = [
        { text: 'Для рыбок', arrow: arrow1, img: fish, key: 'left' },
        { text: 'Для собак', arrow: arrow2, img: dog, key: 'right' }
    ]
    return (
        <div className={style.sliderMainBlock}>
            <div className={style.sliderTitle}>
                Подарки для друзей:
            </div>

            <div className={style.slider}>
                <div className={style.btnForward}>
                    <img src={vector2} alt="" ></img>
                </div>
                {arrSlider.map((elem) => {
                    return (
                        <div className={style.sliderBlock}>
                            <div className={style.slider1}>
                                {elem.key === 'left' ?
                                    <div className={style.animalType}>
                                        <div className={style.titleSlider1}>{elem.text}</div>
                                        <img src={elem.arrow} className={style.sliderPhoto} alt=''></img>
                                    </div>
                                    :
                                    <div className={style.animalType}>
                                        <img src={elem.arrow} className={style.sliderPhoto} alt=''></img>
                                        <div className={style.titleSlider1}>{elem.text}</div>
                                    </div>
                                }
                                <img className={style.animalPhoto} src={elem.img} alt=''></img>
                            </div>
                        </div>
                    )
                })}
                <div className={style.btnForward}>
                    <img src={vector1} alt=""></img>
                </div>
            </div>

            <div className={style.handler}>
                <img src={rect} alt='' className={style.sliderRectangle}></img>
                <img src={handle} alt='' className={style.sliderHandle}></img>
            </div>

        </div>


    )
}


export default Slider;